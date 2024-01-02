import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignedhk',
  templateUrl: './assignedhk.component.html',
  styleUrls: ['./assignedhk.component.css'],
})
export class AssignedhkComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<any[]>('http://localhost:5000/Assign/all')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
