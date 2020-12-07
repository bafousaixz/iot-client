import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { LoginService } from './services/login.service';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { WarningComponent } from './warning/warning.component'  ;
@NgModule({
  declarations: [
    UppercasePipe,
    TableComponent,
    WarningComponent,
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
    WarningComponent,
  ]
})
export class MiddleModule { }
