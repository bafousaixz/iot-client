import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  rainflow: boolean = true;
  windspeed: boolean = true;
  temp: boolean = true;
  chart: boolean;
  table: boolean;
  user: boolean;
  isAdmin: boolean;
  id: string = this.route.snapshot.paramMap.get('id');
  
  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

  handle(e) {
    if (e[1] === 1) {
      this.isAdmin = true;
    }
  }

}
