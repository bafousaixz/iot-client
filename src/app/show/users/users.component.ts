import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/middle/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$ : Observable<object>;
  content: string;
  userId: string;
  isAdmin: boolean;
  popup: boolean;
  user: any;
  constructor(
    public route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    
  }

  handle(e) {
    this.userId = e[0];
    if (e[1] === 1) {
      this.isAdmin = true;
    }
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.userService.getUsers(this.userId);
  }

  delete(userId) {
    console.log(userId)
    this.userService.deleteUser(userId).subscribe(data => {
      if (data) {
        this.getUsers();
      }
    })
  }

  detail(user) {
    this.user = user;
    this.popup = !this.popup;
  }

}
