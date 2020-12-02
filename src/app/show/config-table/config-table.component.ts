import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IOTModel } from '../_models/iot.model';
import { IotService } from '../_services/iot.service';
import { StationService } from '../_services/station.service';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.css']
})
export class ConfigTableComponent implements OnInit {

  iot$: Observable<object>;
  station: [];
  id: string;
  add: boolean;
  edit: boolean;
  idEdit: string;
  iot: IOTModel[];
  rain: number;
  base64textString = [];
  type = 'image';
  temp: number;
  rainflow: number;
  windspeed: number;
  detect_content: string;
  filename: string;
  time = 1606753483;
  machine_id: string;
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
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
    this.iotService.getIOT(this.id).subscribe(data => {
      this.iot = data;
      this.iot.map(x => {
        return x._time = new Date(x.time * 1000);
      })
      this.time = this.iot[this.iot.length -1].time;
    });
  }

  addIot() {
    const iot: IOTModel = {
      type: this.type,
      temp: this.temp,
      rainflow: this.rainflow,
      windspeed: this.windspeed,
      detect_content: this.detect_content,
      filename: this.filename,
      time: (this.time + 30*60),
      machine_id: this.id
    }
    this.iotService.postIOT(iot).subscribe(data => {
      if (data) {
        this.getIOT();
      }
    })
  }

  editIot(iot: IOTModel) {
    const i: IOTModel = {
      _id: iot._id,
      type: iot.type,
      temp: iot.temp,
      rainflow: iot.rainflow,
      windspeed: iot.windspeed,
      detect_content: iot.detect_content,
      filename: iot.filename,
      time: (this.time + 30*60),
      machine_id: this.id
    }
     console.log(i);
    this.iotService.putIOT(iot).subscribe(data => {
      if (data) {
        this.getIOT();
      }
    })
    this.idEdit = '';
  }

  deleteIot(id: string) {
    this.iotService.deleteIot(id).subscribe(data => {
      if (data) {
        this.getIOT();
      }
    })
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.filename = 'data:image/png;base64,' + btoa(e.target.result);
  }

}
