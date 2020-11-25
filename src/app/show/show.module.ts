import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ViewRoutingModule } from './view-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../component/component.module';
import { ResourcesComponent } from './resources/resources.component';
import { FilterPipe } from './filter.pipe';
import { RainflowComponent } from './rainflow/rainflow.component';
import { WindspeedComponent } from './windspeed/windspeed.component';
import { StationComponent } from './station/station.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChartComponent } from './chart/chart.component';
import { TempComponent } from './temp/temp.component';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';
import { ConfigCarouselComponent } from './config-carousel/config-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { MiddleModule } from '../middle/middle.module';
@NgModule({
  declarations: [
    ViewComponent,
    ResourcesComponent, 
    FilterPipe, 
    RainflowComponent,
    WindspeedComponent,
    StationComponent,
    ChartComponent, 
    TempComponent, 
    ChartsComponent, 
    TableComponent, 
    ConfigCarouselComponent, UsersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentModule,
    MiddleModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    ViewRoutingModule,
  ],
  providers: [
    MatDatepickerModule,  
  ]
})
export class ShowModule { }
