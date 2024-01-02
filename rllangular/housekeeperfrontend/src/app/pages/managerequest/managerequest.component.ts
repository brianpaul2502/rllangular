import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managerequest',
  templateUrl: './managerequest.component.html',
  styleUrls: ['./managerequest.component.css'],
})
export class ManagerequestComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = [
    'name',
    'email',
    'number',
    'roomnumber',
    'delete',
  ];
  private apiUrl = 'http://localhost:5000/Request/all';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data: any[]) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  deleteData(id: any): void {
    const deleteUrl = `http://localhost:5000/Request/delete/${id}`;
    this.http.delete(deleteUrl).subscribe(
      () => {
        this.dataSource = this.dataSource.filter((item) => item._id !== id);
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
