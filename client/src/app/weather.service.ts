import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ICity,  } from './shared/model';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Coord, Result } from './shared/weatherxml';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }

  // onSearch(city: string){
  //   return this.http.get(environment.apiUrl + 'city/:city?city='+city);
  // }
  // onSearch(city: string): Observable<ICity>
  // {
  //   return this.http.get<ICity>(environment.apiUrl + 'city/:city?city='+city,{
  //     params: new HttpParams().set('mode', 'json')

  //   })
  // }
  onSearch(city: string){
    return this.http.get(environment.apiUrl + 'city/:city?city='+city,
    {
    headers: new HttpHeaders({
        'Content-Type': 'application/xml'
      }),
      responseType: 'text'
  })
  }

  // getWeather(city: string) : Observable<ICity>
  // {
  //   return this.http.get<ICity>(environment.apiWeather + 
  //     '/data/2.5/weather', {
  //     params : new HttpParams()
  //     .set('q', city),
  //     headers: new HttpHeaders()
  //     .set(environment.apiHeader, environment.apiKey)
  //   });
  // }
//}
getWeather(cityName: string) : Observable<ICity>
  {
    console.log(cityName);
    console.log('Hjhh');    
    return this.http.get<ICity>(environment.apiWeather + `/data/2.5/weather?q=${cityName}&appid=${environment.apiKey}`)
    
  }
}
