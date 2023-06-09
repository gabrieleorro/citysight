import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  datiUtente = new ReplaySubject;
  userRole = new ReplaySubject;
  apiBaseUrl = 'api/users';

  constructor(
    private http: HttpClient,
  ) { }

  insertUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }

  getUser(username: string): Observable<any> {
    const usernameUtente = { 'username': username };
    return this.http.post<any>(`${this.apiBaseUrl}/user`, usernameUtente);
  }

  updateUser(username: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/${username}`, user);
  }
}
