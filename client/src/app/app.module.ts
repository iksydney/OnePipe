import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { XmlInterceptor } from './interceptors/xml-interceptor.interceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherComponent,
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //{
      //provide: HTTP_INTERCEPTORS, useClass: XmlInterceptor, multi: true
    //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
