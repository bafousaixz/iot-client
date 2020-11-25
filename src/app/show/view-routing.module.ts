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
                        path: '',
                        component: StationComponent
                    },
                    { 
                        path: 'station',
                        component: StationComponent
                    },
                    { 
                        path: 'rainflow',
                        component: RainflowComponent,
                        children: [
                            {
                                path: 'detail',
                                component: RainflowComponent,
                            },
                            {
                                path: 'chart',
                                component: ChartComponent,
                            }
                        ]
                    },
                    { 
                        path: 'windspeed',
                        component: WindspeedComponent,
                        children: [
                            {
                                path: 'detail',
                                component: WindspeedComponent,
                            },
                            {
                                path: 'chart',
                                component: ChartComponent,
                            }
                        ]
                    },
                    { 
                        path: 'temp',
                        component: TempComponent,
                        children: [
                            {
                                path: 'detail',
                                component: TempComponent,
                            },
                            {
                                path: 'chart',
                                component: ChartComponent,
                            }
                        ]
                    },
                    { 
                        path: 'charts',
                        component: ChartsComponent
                    },
                    { 
                        path: 'table',
                        component: TableComponent
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