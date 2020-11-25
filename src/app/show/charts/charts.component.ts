import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  id: string;
  url: any;
  charts: string;
  chart: string;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.url = this.router.url.split('/');
    this.charts = this.url[this.url.length -1];
    this.chart = this.url[this.url.length -2];
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
    })
  }

}
