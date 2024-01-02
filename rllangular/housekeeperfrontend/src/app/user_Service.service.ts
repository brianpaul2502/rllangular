import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class user_service {
  private baseUrl = 'http://localhost:5000/User';

  constructor(private http: HttpClient) {}

  userReg(jsData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, jsData);
  }

  userLogin(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }
  updateUser(email: string, updatedUserData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${email}`, updatedUserData);
  }
  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all/${email}`);
  }
}