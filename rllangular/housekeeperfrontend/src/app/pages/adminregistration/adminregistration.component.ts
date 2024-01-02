import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/admin_Service.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css'],
})
export class AdminregistrationComponent {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  isRegisteredIn: boolean = false;

  constructor(private router: Router, private registrationService: Service) {}

  onSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      number: this.number,
      password: this.password,
    };

    this.registrationService.registerUser(user).subscribe(
      (response) => {
        alert('Registration successful');

        this.isRegisteredIn = true;
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }

  redirectToAnotherPage() {
    this.router.navigate(['/adminlogin']);
  }
}
