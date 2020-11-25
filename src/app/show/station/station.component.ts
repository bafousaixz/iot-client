import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IOTModel } from '../_models/iot.model';
import { IotService } from '../_services/iot.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css', '../resources/resources.component.css']
})
export class StationComponent implements OnInit {

  @Input() label: string;
  iot: IOTModel;
  stations$: Observable<object>;
  select: string;
  id: string;
  popup: true;
  station: [];
  
  constructor(
    public route: ActivatedRoute,
    private iotService: IotService,
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
    })
    this.getIOT();
  }

  getIOT(){
    this.stations$ = this.iotService.getIOT(this.id);
  }

  show(iot: any){
    this.popup = true; 
    this.station = iot
  }

}
