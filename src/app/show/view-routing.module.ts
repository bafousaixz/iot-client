import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RainflowComponent } from './rainflow/rainflow.component';
import { ResourcesComponent } from './resources/resources.component';
import { WindspeedComponent } from './windspeed/windspeed.component';
import { StationComponent } from './station/station.component';
import { ViewComponent } from './view/view.component';
import { ChartsComponent } from './charts/charts.component';
import { TempComponent } from './temp/temp.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { UsersComponent } from './users/users.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ImagesComponent } from './images/images.component';
import { ConfigTableComponent } from './config-table/config-table.component';

const ViewRoutes: Routes = [ 
    {
        path: '',
        component: ViewComponent,
        children: [
            {
                path: ':id',
                component: ResourcesComponent,
                children: [
                    { 
                        path: 'station',
                        component: StationComponent
                    },
                    { 
                        path: 'charts',
                        component: ChartsComponent
                    },
                    {
                        path: 'images',
                        component: ImagesComponent
                    },
                    {
                        path: 'analytic',
                        component: AnalyticsComponent
                    },
                    { 
                        path: 'table',
                        component: TableComponent
                    },
                    { 
                        path: 'config',
                        component: ConfigTableComponent
                    },
                    { 
                        path: 'users',
                        component: UsersComponent
                    },
                ]
            },
            // { 
            //     path: 'station',
            //     component: StationComponent
            // }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(ViewRoutes)],
    exports: [RouterModule]
  })

export class ViewRoutingModule { }