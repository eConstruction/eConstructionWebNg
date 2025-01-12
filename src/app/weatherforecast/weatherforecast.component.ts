import { Component } from '@angular/core';
import { ApiService, WeatherForecast } from '../api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrl: './weatherforecast.component.scss',
  standalone: true,
})
export class WeatherforecastComponent {
  forecasts: WeatherForecast[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.forecasts = [];
    this.loadWeatherForecastAuth();
    this.loadWeatherForecastInventory();
    this.loadWeatherForecastOrder();
    this.loadWeatherForecastNotification();
  }

  loadWeatherForecastAuth() {
    this.apiService.getAuthWeather().subscribe({
      next: (forecasts) => {
        this.forecasts = forecasts;
      },
      error: (error) => console.error('Failed to fetch weather forecast:', error)
    });
  }

  loadWeatherForecastInventory() {
    this.apiService.getInventoryWeather().subscribe({
      next: (forecasts) => {
        this.forecasts = [...this.forecasts, ...forecasts];
      },
      error: (error) => console.error('Failed to fetch weather forecast:', error)
    });
  }

  loadWeatherForecastOrder() {
    this.apiService.getOrdersWeather().subscribe({
      next: (forecasts) => {
        this.forecasts = [...this.forecasts, ...forecasts];
      },
      error: (error) => console.error('Failed to fetch weather forecast:', error)
    });
  }

  loadWeatherForecastNotification() {
    this.apiService.getNotificationsWeather().subscribe({
      next: (forecasts) => {
        this.forecasts = [...this.forecasts, ...forecasts];
      },
      error: (error) => console.error('Failed to fetch weather forecast:', error)
    });
  }
}