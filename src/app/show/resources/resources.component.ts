import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StationModel } from '../_models/stations.model';
import { StationService } from '../_services/station.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  rainflow: boolean = true;
  windspeed: boolean = true;
  temp: boolean = true;
  chart: boolean;
  table: boolean;
  user: boolean;
  isAdmin: boolean;
  stations: StationModel;
  station$: Observable<object>;
  select: string;
  id: string = this.route.snapshot.paramMap.get('id');
  
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private stationService: StationService,
  ) { }

  ngOnInit(): void {
    this.station$ = this.stationService.getStation(this.id);
    this.getStations();
  }
 
  getStations() {
    this.stationService.getStations().subscribe((data) => {
      this.stations = data;
    })
  }

  getURL(e){
    this.select =  e.target.value;
    this.station$ = this.stationService.getStation(this.select);
    this.router.navigateByUrl(`iot/${this.select}`, { state: { hello: 'world' } });
  }

  handle(e) {
    if (e[1] === 1) {
      this.isAdmin = true;
    }
  }

}
