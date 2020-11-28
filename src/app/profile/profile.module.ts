import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiddleModule } from '../middle/middle.module';
import { ProfileComponent } from './profile/profile.component';
import { ComponentModule } from '../component/component.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MiddleModule,
    MatFormFieldModule,
    ComponentModule,
    MatInputModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
