import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  registerUser(user: { email: string; password: string; }){
    return this.http.post(this._registerUrl,user)
  }
  login(data):Observable<any> {
    return this.http.post(this._loginUrl,user)
  }
}
