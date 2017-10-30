import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user.model';
import {UserService} from '../../../../shared/services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(private authServie: AuthService,
              private router: Router) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  onLogout() {
    this.authServie.logout();
    this.router.navigate(['/login']);
  }

}
