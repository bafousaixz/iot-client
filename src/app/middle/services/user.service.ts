import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/users/me/"
  _url = "http://localhost:3000/users/list/"
  urlDelete = "http://localhost:3000/users/"

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

  editProfile(user: UserModel): Observable<any> {
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
