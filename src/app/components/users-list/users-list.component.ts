import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  users: User[] = [];

  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.usersService.getUsers()
    .subscribe(
      res => {this.users = res},
      error => console.log(error)
    )
  }
}
