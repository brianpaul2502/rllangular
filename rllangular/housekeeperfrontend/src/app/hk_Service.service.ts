import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HkService {
  private apiUrl = 'http://localhost:5000/Housekeeper/create';

  constructor(private http: HttpClient) { }

  postHkdetails(hkData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, hkData);
  }
}
