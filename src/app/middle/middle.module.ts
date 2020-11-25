import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    UppercasePipe,
  ],
  imports: [
    CommonModule
  ],
  providers:[
    LoginService,
  ],
  exports:[
    UppercasePipe,
  ]
})
export class MiddleModule { }
