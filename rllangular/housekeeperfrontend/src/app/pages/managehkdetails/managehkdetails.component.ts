import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managehkdetails',
  templateUrl: './managehkdetails.component.html',
  styleUrls: ['./managehkdetails.component.css'],
})
export class ManagehkdetailsComponent implements OnInit {
  hkData: any[] = [];
  filteredDetails: any[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(): void {
    this.http.get<any>('http://localhost:5000/Housekeeper/all').subscribe(
      (response) => {
        this.hkData = response;
      },
      (error) => {
        console.error('Error fetching housekeeper details:', error);
      }
    );
  }

  filterDetails(): void {
    this.filteredDetails = this.hkData.filter((hk) =>
      hk.hostel.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.hkData =
      this.filteredDetails.length > 0 ? this.filteredDetails : this.hkData;
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

  handleDelete(hkId: string): void {
    console.log('Hk ID:', hkId);
    if (confirm('Are you sure you want to delete this Housekeeper')) {
      this.http
        .delete<any>(`http://localhost:5000/Housekeeper/delete/${hkId}`)
        .subscribe(
          () => {
            this.hkData = this.hkData.filter((hk) => hk._id !== hkId);
            alert('Details deleted successfully!');
          },
          (error) => {
            console.error('Error deleting details:', error);
          }
        );
    }
  }
}
