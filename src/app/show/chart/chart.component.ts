import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { IOTModel } from '../_models/iot.model';
import { IotService } from '../_services/iot.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() stationId: string;
  @Input() label: string;
  chartRainflow;
  chartWindspeed;
  iot: IOTModel;
  chart: string;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private iotService: IotService,
  ) { }

  ngOnInit(): void {
    this.chart = this.router.url.split('/')[this.router.url.split('/').length -2];
    if (this.chart === 'rainflow' || this.chart === 'windspeed' || this.chart === 'temp') {
      this.stationId = this.router.url.split('/')[this.router.url.split('/').length -3];
    }
    this.iotService.getIOT(this.stationId).subscribe(data => {
      this.iot = data;
      let x = data.map(val => new Date(val.time).toLocaleDateString());
      let y;
      if (this.label === 'rainflow' || this.chart === 'rainflow') {
        y = data.map(val => val.rainflow);
        this.chartRainflow = new Chart('rainflow', {
          type: 'line',
          data: {
            labels: x,
            datasets: [
              {
                label: 'rainflow',
                data: y,
                backgroundColor: 'blue',
                borderColor: 'blue',
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
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  maxTicksLimit: 7
                }
              }],
              yAxes: [{
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2]
                }
              }],
            },
            legend: {
              display: false
            },
            tooltips: {
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              titleMarginBottom: 10,
              titleFontColor: '#6e707e',
              titleFontSize: 14,
              borderColor: '#dddfeb',
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              intersect: false,
              mode: 'index',
              caretPadding: 10,
            }
          }
        })
      }
      if (this.label ==='windspeed' || this.chart ==='windspeed') {
        y = data.map(val => val.windspeed);
        this.chartWindspeed = new Chart('windspeed', {
          type: 'line',
          data: {
            labels: x,
            datasets: [
              {
                label: 'windspeed',
                data: y,
                backgroundColor: 'blue',
                borderColor: 'blue',
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
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  maxTicksLimit: 7
                }
              }],
              yAxes: [{
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2]
                }
              }],
            },
            legend: {
              display: false
            },
            tooltips: {
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              titleMarginBottom: 10,
              titleFontColor: '#6e707e',
              titleFontSize: 14,
              borderColor: '#dddfeb',
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              intersect: false,
              mode: 'index',
              caretPadding: 10,
            }
          }
        })
      }
      if (this.label === 'temp' || this.chart === 'temp') {
        y = data.map(val => val.temp);
        this.chartRainflow = new Chart('temp', {
          type: 'line',
          data: {
            labels: x,
            datasets: [
              {
                label: 'temp',
                data: y,
                backgroundColor: 'blue',
                borderColor: 'blue',
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
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  maxTicksLimit: 7
                }
              }],
              yAxes: [{
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2]
                }
              }],
            },
            legend: {
              display: false
            },
            tooltips: {
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              titleMarginBottom: 10,
              titleFontColor: '#6e707e',
              titleFontSize: 14,
              borderColor: '#dddfeb',
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              intersect: false,
              mode: 'index',
              caretPadding: 10,
            }
          }
        })
      }
     
    }) 
  }

}