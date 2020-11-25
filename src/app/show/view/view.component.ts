import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationModel } from '../_models/stations.model';
import { StationService } from '../_services/station.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  stations: StationModel;
  select;
  test: string;
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private stationService: StationService,
  ) { }

  ngOnInit(): void {
    this.getStations();
  }
 
  getStations() {
    this.stationService.getStations().subscribe((data) => {
      this.stations = data;
    })
  }

  handle(e){
    this.select =  e.target.value; 
    this.router.navigateByUrl(`iot/${this.select}`, { state: { hello: 'world' } });
  }

}
