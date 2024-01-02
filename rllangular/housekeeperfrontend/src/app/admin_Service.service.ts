import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiUrl = 'http://localhost:5000/Admin/create';
  private loginUrl = 'http://localhost:5000/Admin/login';
  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password });
  }
  
}