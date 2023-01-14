import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Result } from '../shared/weatherxml';
import { xml2js } from 'xml-js';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: any = 'lagos';

  constructor(private wservice: WeatherService) { }

  

  weatherData : Result | string = "";
  ngOnInit(): void { 
    this.wservice.onSearch(this.city)
    .subscribe({
        next: (response) => {
          const xml = response;
          //const json = xml2json(xml)
          this.weatherData = response;
          console.log(response);
      }
})
  }
}