import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user_service } from '../../user_Service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router, private jsService: user_service) {}

  onSubmit() {
    this.jsService
      .userLogin({ email: this.email, password: this.password })
      .subscribe(
        (response) => {
          alert('Login successful');
          if (response.message === 'Login successful') {
            this.isLoggedIn = true;
            sessionStorage.setItem('loggedInUser', this.email);
            this.router.navigate(['/userprofile']);
          } else {
            console.log('Login failed. Please try again.');
          }
        },
        (error) => {
          console.error('Error during login:', error);
        }
      );
  }

  redirectToAnotherPage() {
    this.router.navigate(['/userprofile']);
  }

  storeEmailForReset() {
    sessionStorage.setItem('resetEmail', this.email);
  }
}
