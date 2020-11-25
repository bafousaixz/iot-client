import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IOTModel } from '../_models/iot.model';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  url = "http://localhost:3000/iots/"

  constructor(
    private http: HttpClient
  ) { }

  getIOTs(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  getIOT(id: string): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  deleteIot(id: string): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }
}
