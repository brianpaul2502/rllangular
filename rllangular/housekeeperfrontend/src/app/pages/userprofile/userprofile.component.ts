import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user_service } from '../../user_Service.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  roomnumber: string = '';
  name1: string = '';
  email1: string = '';
  number1: string = '';
  roomnumber1: string = '';
  isRegistered: boolean = false;

  constructor(private router: Router, private userService: user_service) {}

  ngOnInit() {
    this.getUserDataByEmail();
  }

  onSubmit() {
    const updatedUserData = {
      name: this.name,
      email: this.email,
      number: this.number,
      password: this.password,
      roomnumber: this.roomnumber,
    };

    const userEmail = sessionStorage.getItem('loggedInUser');

    if (userEmail) {
      this.userService.updateUser(userEmail, updatedUserData).subscribe(
        (response) => {
          console.log('User data updated:', response);
          sessionStorage.setItem('loggedInUser', response.user.email);
          window.location.reload();
        },
        (error) => {
          console.error('Error updating user data:', error);
        }
      );
    }
  }

  getUserDataByEmail() {
    const userEmail = sessionStorage.getItem('loggedInUser');

    if (userEmail) {
      this.userService.getUserByEmail(userEmail).subscribe(
        (userData) => {
          this.name1 = userData.name;
          this.email1 = userData.email;
          this.number1 = userData.number;
          this.roomnumber1 = userData.roomnumber;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }
}
