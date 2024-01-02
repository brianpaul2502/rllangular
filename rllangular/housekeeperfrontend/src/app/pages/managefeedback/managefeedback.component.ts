import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managefeedback',
  templateUrl: './managefeedback.component.html',
  styleUrls: ['./managefeedback.component.css']
})
export class ManagefeedbackComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>('http://localhost:5000/Feedback/all')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
