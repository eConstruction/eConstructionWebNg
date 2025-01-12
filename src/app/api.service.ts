import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAuthWeather(): Observable<any> {
    return this.http.get('/api/v1/auth');
  }

  getInventoryWeather(): Observable<any> {
    return this.http.get('/api/v1/inventory');
  }

  getNotificationsWeather(): Observable<any> {
    return this.http.get('/api/v1/notifications');
  }

  getOrdersWeather(): Observable<any> {
    return this.http.get('/api/v1/orders');
  }
}

// Define the WeatherForecast model based on your .NET class
export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
  }