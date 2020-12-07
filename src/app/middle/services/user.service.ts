import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/users/me/"
  _url = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/users/list/"
  urlDelete = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/users/"

  constructor(
    private http: HttpClient
  ) { }

  getUser():Observable<any> {
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.get<any>(this.url, httpOptions)
  }

  editProfile(user: any): Observable<any> {
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.put<any>(this.url, user, httpOptions)
  }

  getUsers(id: string): Observable<any> {
    return this.http.get<any>(this._url + id)
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(this.urlDelete + id)
  }

}
