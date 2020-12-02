import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { IOTModel } from '../_models/iot.model';
import { StationModel } from '../_models/stations.model';
import { IotService } from '../_services/iot.service';
import { StationService } from '../_services/station.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() stationId: string;
  @Input() label: string;
  @Input() chart: string
  chartConfig;
  selected: '123';
  iot: IOTModel;
  stations: StationModel;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private iotService: IotService,
    private stationService: StationService,
  ) { }

  ngOnInit(): void{
    if (this.chart === 'rainflow' || this.chart === 'windspeed' || this.chart === 'temp') {
      this.stationId = this.router.url.split('/')[this.router.url.split('/').length -3];
    }
    this.getStations();
    this.configChart();
  }

  configChart() {
    let x = [];
    let y = [];
    this.iotService.getIOT(this.stationId).subscribe(data => {
      data.map(x => {
        return x._time = new Date(x.time * 1000);
      })
      this.iot = data;
      if (this.range.value.start && this.range.value.end) {
        data = data.filter(x => {
          return Date.parse(new Date(x._time).toLocaleDateString()) >= Date.parse(this.range.value.start) && Date.parse(new Date(x._time).toLocaleDateString()) <= Date.parse(this.range.value.end)
        })
      }
      x = data.map(val => new Date(val._time).toLocaleDateString())
      // x = [...new Set(x)];
      if (this.label === 'rainflow' || this.chart === 'rainflow') {
        y = data.map(val => val.rainflow);
        this.chartConfig = new Chart('rainflow', {
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
        this.chartConfig = new Chart('windspeed', {
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
        this.chartConfig = new Chart('temp', {
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

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.pop();
    chart.update();
  }

  getStations() {
    this.stationService.getStations().subscribe(data => {
      if (data) {
        this.stations = data;
      }
    })
  }

  updateChart() {
    this.removeData(this.chartConfig);
    this.configChart();
  }

  selectStation() {
    this.stationId = this.selected
  }

}