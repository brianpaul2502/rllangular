import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  name: string = '';
  roomno: string = '';
  cleaningexp: string = '';
  constructor(private http: HttpClient) {}

  onSubmit() {
    const feedbackData = {
      name: this.name,
      roomno: this.roomno,
      cleaningexp: this.cleaningexp,
    };

    this.http
      .post<any>('http://localhost:5000/Feedback/create', feedbackData)
      .subscribe(
        (response) => {
          alert('Feedback Submitted Successfully');
          console.log('Feedback submitted successfully:', response);
        },
        (error) => {
          console.error('Error submitting feedback:', error);
        }
      );
  }
}
