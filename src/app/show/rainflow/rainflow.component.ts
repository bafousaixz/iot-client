import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IotService } from '../_services/iot.service';

@Component({
  selector: 'app-rainflow',
  templateUrl: './rainflow.component.html',
  styleUrls: ['./rainflow.component.css', '../resources/resources.component.css']
})
export class RainflowComponent implements OnInit {

  rainflow$: Observable<object>;
  stations: [];
  id: string;
  
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
    this.rainflow$ = this.iotService.getIOT(this.id);
  }

}
