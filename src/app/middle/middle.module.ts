import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { LoginService } from './services/login.service';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  ;
@NgModule({
  declarations: [
    UppercasePipe,
    TableComponent,
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    CommonModule
  ],
  providers:[
    LoginService,
  ],
  exports:[
    TableComponent,
    UppercasePipe,
  ]
})
export class MiddleModule { }
