import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationModel } from '../_models/stations.model';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  url = "http://node-env.eba-wpapkbmt.us-east-2.elasticbeanstalk.com/stations/"

  constructor(
    private http: HttpClient
  ) { }

  getStations(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  getStation(id: string): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  deleteStation(id: string): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }
}
