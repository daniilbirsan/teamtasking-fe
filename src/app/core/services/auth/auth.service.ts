import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:5000/auth/';

const API = 'http://localhost:5000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(email: string, firstName: string, lastName: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      firstName,
      lastName,
      password
    }, httpOptions);
  }

  getpersonaltodo(): Observable<any> {
    return this.http.get(API + 'getpersonaltodo', httpOptions)
  }
}