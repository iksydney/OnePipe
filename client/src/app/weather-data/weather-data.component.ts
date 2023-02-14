import { Component, OnInit } from '@angular/core';
import { ICity } from '../shared/model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'Minsk';
  weatherData? : ICity;
  firstName =''

  ngOnInit(): void 
  {
    this.getWeatherData(this.cityName)
  }
  
  onSearch()
  {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  setValue()
  {
    console.log(this.firstName);
    
  }

  private getWeatherData(cityName: string)
  {
    this.weatherService.getWeather(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(this.weatherData.name);
          
          console.log(response);
        }
      });
  }
}


