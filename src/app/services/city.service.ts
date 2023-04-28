import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiBaseUrl = 'api/cities';
  testoCercato = new ReplaySubject;

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiBaseUrl}/`);
  }

  getCity(id: string): Observable<City> {
    return this.http.get<City>(`${this.apiBaseUrl}/${id}`);
  }

  insertCity(city: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, city);
  }

  getAttractionsByCity(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/${id}/attractions`);
  }
}
