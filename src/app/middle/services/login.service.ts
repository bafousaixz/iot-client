import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  url = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/users/"
  _url = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/users/login/"

  constructor(
    private http: HttpClient
  ) { } 

  signIn(user: LoginModel): Observable<any> {
    return this.http.post<any>(this._url, user)
  }

  signUp(user : UserModel): Observable<any> {
    return this.http.post<any>(this.url, user)
  }
  
}
