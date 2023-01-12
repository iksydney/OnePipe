import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICity,  } from './shared/model';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
  onSearch(city: string): Observable<ICity>{
    return this.http.get<ICity>(environment.apiUrl + 'city/:city?city='+city)
  }
}
