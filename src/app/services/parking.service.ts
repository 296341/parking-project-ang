import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/parkings`);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/parkings/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/parkings`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/parkings/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/parkings/${id}`);
  }

  findByName(name: any): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/parkings?name=${name}`);
  }


}
