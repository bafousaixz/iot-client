import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserModel } from 'src/app/middle/models/user.model';
import { LoginService } from 'src/app/middle/services/login.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  lastName: string;
  userName: string;
  password: string;
  image: string = "https://res.cloudinary.com/heymarketer/image/upload/dpr_auto,w_auto,f_auto,q_auto:good/v1553089040/Testimonials/undraw_profile_pic_ic5t.svg";
  constructor(
    public router: Router,
    public userService: LoginService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    let s: UserModel = {
      lastName: this.lastName,
      username: this.userName,
      password: this.password,
      image: this.image,
    };
    console.log(s)
    this.userService.signUp(s).subscribe((data) => {
      if(data) {
        this.location.back();
      }
    });
  }


}
