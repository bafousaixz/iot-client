import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IotService } from '../_services/iot.service';
import { StationService } from '../_services/station.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  iot$: Observable<object>;
  station: [];
  id: string;
  
  constructor(
    public route: ActivatedRoute,
    private iotService: IotService,
    private stationService: StationService,
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.stationService.getStation(param['id']).subscribe(data => {
        this.station = data;
      })
    })
    
    this.getIOT();
  }

  getIOT(){
    this.iot$ = this.iotService.getIOT(this.id);
  }

}
