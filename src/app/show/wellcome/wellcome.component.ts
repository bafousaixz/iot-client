import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {
  @Input() station$: any;
  constructor() { }

  ngOnInit(): void { }
}
