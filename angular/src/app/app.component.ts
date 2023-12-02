import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';

type WeatherItem = {
  date: string;
  summary: string;
  temperatureC: string;
  temperatureF: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  @if(weather().length) {
    <table>
    <caption>Weather Forecast</caption>
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Summary</th>
          <th scope="col">Temperature C</th>
          <th scope="col">Temperature F</th>
        </tr>
      </thead>
      <tbody>
        @for (item of weather(); track item.date) {
          <tr>
            <th scope="row">{{item.date | date:'ccc MMM d, yyyy'}}</th>
            <td>{{item.summary}}</td>
            <td>{{item.temperatureC}}</td>
            <td>{{item.temperatureF}}</td>
          </tr>
        }
      </tbody>
    </table>
  }
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      th[scope="col"] {
        padding-inline: 16px;
      }
      th[scope="row"] {
        text-align: left;
      }
      td {
        text-align: center;
      }
    `
  ],
})
export class AppComponent implements OnInit {
  #client = inject(HttpClient);

  protected weather = signal<WeatherItem[]>([]);

  ngOnInit(): void {
    this.#client.get<WeatherItem[]>('http://localhost:5229/weatherforecast').subscribe((weather) => this.weather.set(weather))
  }
}
