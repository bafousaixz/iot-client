import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IOTModel } from '../_models/iot.model';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  url = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/iots/"
  // url = "http://localhost:3000/iots/"
  constructor(
    private http: HttpClient
  ) { }

  getIOTs(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  getIOT(id: string): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  postIOT(iot: IOTModel): Observable<any> {
    return this.http.post<any>(this.url, iot)
  }

  putIOT(iot: IOTModel): Observable<any> {
    return this.http.put<any>(`${this.url}${iot._id}`, iot)
  }

  deleteIot(id: string): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }
}
