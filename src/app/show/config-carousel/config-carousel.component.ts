import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-carousel',
  templateUrl: './config-carousel.component.html',
  styleUrls: ['./config-carousel.component.css']
})
export class ConfigCarouselComponent implements OnInit {

  @Input() data$: any;
  @Input() name: string;
  data;
  constructor() {
  }

  ngOnInit(): void {
    this.data$.subscribe(data => {
      this.data = data;
    })

  }

}
