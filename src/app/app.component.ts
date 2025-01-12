import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherforecastComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers: [ApiService]
})
export class AppComponent {
  title = 'eConstructionWeb';
}
