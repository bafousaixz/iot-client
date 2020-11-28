import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IotService } from '../_services/iot.service';
import { StationService } from '../_services/station.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../resources/resources.component.css', '../station/station.component.css']
})
export class TableComponent implements OnInit {

  iot$: Observable<object>;
  station: [];
  id: string;
  popup: boolean;
  iot: any;
  rain: number;
  panelOpenState = false;
  
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
  
  downloadPDF(){
    const element = document.getElementById('content');
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const doc = new jsPDF();
      let imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight);
      doc.save()
    })
 
  }

  getIOT(){
    this.iot$ = this.iotService.getIOT(this.id);
  }

  openPopup(iot){
    this.popup = !this.popup;
    this.iot = iot;
  }

}
