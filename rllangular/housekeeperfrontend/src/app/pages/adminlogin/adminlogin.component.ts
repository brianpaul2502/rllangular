import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/admin_Service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router, private eloginService: Service) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.eloginService
      .loginUser(credentials.email, credentials.password)
      .subscribe(
        (response) => {
          alert('Login successful');

          this.isLoggedIn = true;
          console.log('Login successful:', response);

          this.router.navigate(['/posthkdetails']);
        },
        (error) => {
          alert('email or password invaled');
          console.error('Login failed:', error);
        }
      );
  }

  redirectToAnotherPage() {
    this.router.navigate(['/posthkdetails']);
  }
  storeEmailForReset() {
    sessionStorage.setItem('resetEmail', this.email);
  }
}
