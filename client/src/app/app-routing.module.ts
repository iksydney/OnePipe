import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: 'backend-weather', component:WeatherComponent, },
  {path: 'weather', component:WeatherDataComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
