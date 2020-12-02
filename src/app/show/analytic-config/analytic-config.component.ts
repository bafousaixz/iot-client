import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Chart } from 'chart.js';
import { IotService } from '../_services/iot.service';
import { StationService } from '../_services/station.service';

@Component({
  selector: 'app-analytic-config',
  templateUrl: './analytic-config.component.html',
  styleUrls: ['./analytic-config.component.css']
})
export class AnalyticConfigComponent implements OnInit {
  ctx ='asd'
  id: string;
  myBarChart;
  constructor(
    public route: ActivatedRoute,
    private iotService: IotService,
    private stationService: StationService
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
      console.log(this.id)
    })
    this.analytics();
  }

  analytics() {
    let x = [];
    let y = [];
    this.iotService.getIOT(this.id).subscribe(data => {
      x = data.map(val => new Date(val.time).toLocaleDateString());
      y = data.map(val => val.rainflow);
      let _y = data.map(val => val.rainflow);
      this.myBarChart = new Chart('canvas', {
        type: 'horizontalBar',
        labels: x[0],
        data: {
          labels: x[0],
          datasets: [
            {
              label: 'rainflow',
              data: y,
              backgroundColor: 'blue',
              borderColor: 'blue',
              fill: false
            },
            {
              label: 'windspeed',
              data: _y,
              backgroundColor: 'red',
              borderColor: 'red',
              fill: false
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
        }
      });
    })
  }

}
