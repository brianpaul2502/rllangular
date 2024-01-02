import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hkdetails',
  templateUrl: './hkdetails.component.html',
  styleUrls: ['./hkdetails.component.css']
})
export class HkdetailsComponent implements OnInit {
  hkData: any[] = [];
  filteredhk: any[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHk();
  }

  fetchHk(): void {
    this.http.get<any>('http://localhost:5000/Housekeeper/all')
      .subscribe(
        (response) => {
          this.hkData = response;
        },
        (error) => {
          console.error('Error fetching housekeeper details:', error);
        }
      );
  }

  filterDetails(): void {
    this.filteredhk = this.hkData.filter(hk =>
      hk.hostel.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.hkData = this.filteredhk.length > 0 ? this.filteredhk : this.hkData;
  }

  sortDetails(): void {
    this.hkData.sort((a, b) => {
      if (a.available && !b.available) {
        return -1;
      } else if (!a.available && b.available) {
        return 1;
      }
      return 0;
    });
  }
}
