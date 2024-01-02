import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignhktouser',
  templateUrl: './assignhktouser.component.html',
  styleUrls: ['./assignhktouser.component.css'],
})
export class AssignhktouserComponent implements OnInit {
  name: string = '';
  roomno: string = '';
  housekeeper: string = '';
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(): void {
    const assignData = {
      name: this.name,
      roomno: this.roomno,
      housekeeper: this.housekeeper,
    };

    this.http
      .post<any>('http://localhost:5000/Assign/create', assignData)
      .subscribe(
        (response) => {
          console.log('Submitted successfully:', response);
          this.fetchData();
        },
        (error) => {
          console.error('Error submitting:', error);
        }
      );
  }

  fetchData(): void {
    this.http
      .get<any[]>('http://localhost:5000/Assign/all')
      .subscribe((response) => {
        this.data = response;
      });
  }

  onDelete(id: string): void {
    this.http
      .delete<any>('http://localhost:5000/Assign/delete/' + id)
      .subscribe(
        (response) => {
          console.log('Data deleted successfully:', response);
          this.fetchData();
        },
        (error) => {
          console.error('Error deleting data:', error);
        }
      );
  }
}
