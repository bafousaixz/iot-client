import { Component, OnInit } from '@angular/core';
import { IotService } from '../_services/iot.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-windspeed',
  templateUrl: './windspeed.component.html',
  styleUrls: ['./windspeed.component.css', '../resources/resources.component.css']
})
export class WindspeedComponent implements OnInit {

  windspeed$: Observable<object>;
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
    this.windspeed$ = this.iotService.getIOT(this.id);
  }

}
