import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {fadeStateTrigger} from '../../shared/animations/fade.animation';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(private userService: UserService,
              private  authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.message = new Message('', 'danger');

    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage(<Message>{
          text: 'Теперь вы можете выполнить вход в систему!',
          type: 'success'
        });
      } else if (params['accessDenied']) {
        this.showMessage(<Message>{
          text: 'Для работы вам необходимо авторизироваться!',
          type: 'warning'
        });
      }
    });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => this.message.text = '', 5000);


  }

  onSubmit() {
    const dataForm = this.form.value;

    this.userService.getUserByEmail(dataForm.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === dataForm.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage(<Message>{
              text: 'Пароль не верный.',
              type: 'danger'
            });
          }
        } else {
          this.showMessage(<Message>{
            text: 'Нет такого email.',
            type: 'danger'
          });
        }
      });
  }

}
