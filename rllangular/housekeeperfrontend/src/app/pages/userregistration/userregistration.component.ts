import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user_service } from '../../user_Service.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
})
export class UserregistrationComponent {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  roomnumber: string = '';
  isRegisteredIn: boolean = false;

  constructor(private router: Router, private userService: user_service) {}

  onSubmit() {
    const userData = {
      name: this.name,
      email: this.email,
      number: this.number,
      password: this.password,
      roomnumber: this.roomnumber,
    };

    this.userService.userReg(userData).subscribe(
      (response) => {
        alert('Registration successful');
        this.isRegisteredIn = true;
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
  }
  redirectToAnotherPage() {
    this.router.navigate(['/userlogin']);
  }
}
