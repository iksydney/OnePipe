import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { map, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: any = 'london';

  constructor(private wservice: WeatherService) { }

  ngOnInit(): void {
    this.getSearchResults(this.city);
  }
  
  getSearchResults(data:any) {
    this.wservice.onSearch(data).subscribe(
      res => {},
      err => {}
    )
  }
}
