import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IotService } from '../_services/iot.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  temp$: Observable<object>;
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
    this.temp$ = this.iotService.getIOT(this.id);
  }

}
