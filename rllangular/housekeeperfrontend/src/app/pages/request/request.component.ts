import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendRequest(): void {
    const userEmail = sessionStorage.getItem('loggedInUser');
    if (userEmail) {
      fetch('http://localhost:5000/movedata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      })
        .then((response) => {
          if (response.ok) {
            alert('Request send successfully');
            console.log('Request sent!');
          } else {
            console.error('Failed to send request.');
          }
        })
        .catch((error) => {
          console.error('Error sending request:', error);
        });
    } else {
      console.error('User email not found in session storage.');
    }
  }
}
