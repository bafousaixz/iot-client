import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationModel } from '../_models/stations.model';
import { StationService } from '../_services/station.service';
import { Location } from '@angular/common';

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
    private location: Location,
  ) { 
    
  }

  ngOnInit(): void {
    this.getStations();
  }
 
  getStations() {
    this.stationService.getStations().subscribe((data) => {
      this.stations = data;
      const url = this.stations[0]._id
      // this.router.navigate([`iot/${url}`]);
      this.router.navigateByUrl(`iot/${url}`, { state: { hello: 'world' } });
    })
  }

}
