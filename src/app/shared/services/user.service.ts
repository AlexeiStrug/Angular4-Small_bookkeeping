import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user.model';
import {BaseApi} from '../base/base-api';

@Injectable()
export class UserService {

  constructor(private baseApi: BaseApi) {
  }

  getUserByEmail(email: string): Observable<User> {
    return this.baseApi.get(`users?email=${email}`)
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  createNewUser(user: User) {
    return this.baseApi.post(`users`, user);
  }

  catchErrors(error: any) {
    return Observable.throw(error);
  }
}
