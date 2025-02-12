import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAuthWeather(): Observable<any> {
    return this.http.get(`http://econstruction-service-auth.econstruction.svc.cluster.local:6060/api/v1/auth`);
  }

  getInventoryWeather(): Observable<any> {
    return this.http.get(`http://econstruction-inventory-service.econstruction.svc.cluster.local:7070/api/v1/inventory`);
  }

  getNotificationsWeather(): Observable<any> {
    return this.http.get(`http://econstruction-notification-service.econstruction.svc.cluster.local:4040/api/v1/notifications`);
  }

  getOrdersWeather(): Observable<any> {
    return this.http.get(`http://econstruction-order-service.econstruction.svc.cluster.local:5050/api/v1/orders`);
  }
}

// Define the WeatherForecast model based on your .NET class
export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
  }