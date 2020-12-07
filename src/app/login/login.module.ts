import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginDirective } from './_directive/login.directive';

@NgModule({
  declarations: [
    LoginDirective, 
    LoginComponent, 
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
  ],
  providers: [],
  exports: [
    LoginDirective
  ]
  
})
export class LoginModule { }
