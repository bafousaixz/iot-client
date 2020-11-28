import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})
export class ChartDetailComponent implements OnInit {
  chart: string;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.chart = this.router.url.split('/')[this.router.url.split('/').length -2];
  }

}
