import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxXml2jsonService } from 'ngx-xml2json';
//import * as fastXmlParser from 'fast-xml-parser';
//import * as xml2js from ‘xml2js’;
//import { xml2js } from 'xml-js';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityName: any = 'lagos';
  objs: any;
  loginForm: FormGroup;

  constructor(private wservice: WeatherService, private ngxXml2jsonService: NgxXml2jsonService) {
    
   }




  //weatherData: Result | string = "";
  ngOnInit(): void 
  {
   this.createSearch(); 
  }

onSubmit(){
  this.getWeatherData(this.loginForm.value);
  //this.cityName= '';
}

createSearch(){
  this.loginForm = new FormGroup({
    citySearch : new FormControl('', Validators.required)
  });
}

private getWeatherData(cityName: string){
  this.wservice.onSearch(cityName)
      .subscribe({
        next: (response) => {
          //const xml = response;
          const parser = new DOMParser();
          const xml = parser.parseFromString(response, 'text/xml');
          const obj = this.ngxXml2jsonService.xmlToJson(xml);
          this.objs = obj
          console.log(this.objs);
          //this.city = data;
          //this.weatherData = response;
          //console.log(response);
          //console.log(this.city);
        }
        })
}
/* parseXML(data: any) {
  return new Promise(resolve => {
    var k: string | number,
      arr: any = [],
      parser: any = new xml2js.Parser(
        {
          trim: true,
          explicitArray: true
        });
    parser.parseString(data, function (err: any, result: any) {
      var obj = result.Employee;
      for (k in obj.emp) {
        var item = obj.emp[k];
        arr.push({
          id: item.id[0],
          name: item.name[0],
          email: item.email[0],

        });
      }
      resolve(arr);
    });
  })
} */
}