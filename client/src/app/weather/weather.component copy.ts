import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Result } from '../shared/weatherxml';
import { xml2json } from 'xml-js';
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
    //this.getSearchResults(this.city);
  
      }
  
  // getSearchResults(data:any) {
  //   this.wservice.onSearch(data).subscribe(
  //     res => {},
  //     err => {}
  //   )
  // }

  //this.getSearchResults(this.city);
  // this.wservice.onSearch(this.city)
  // .subscribe({
  //   next: (response) => {
  //     const xml = response;
  //     const json = xml2json(xml)
  //     this.weatherData = json;
  //     console.log(json);
  //     console.log(json.elements);
      
  //   }
  // });

}
/* this.wservice.onSearch(this.city)
    .subscribe((data) => {  
            this.parseXML(this.weatherData)  
              .then((data) => {  
                if(typeof(data) == "string")
                {
                  this.weatherData = data;  
                }
              });  
          });  
          Read Data
        } 
      

        parseXML(this.weatherData) {  
          return new Promise(resolve => {  
            var k: string | number,  
              arr = [],  
              parser = new xml2js.Parser(  
                {  
                  trim: true,  
                  explicitArray: true  
                });  
            parser.parseString(data, function (err, result) {  
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
            });  */


            /* this.wservice.onSearch(this.city)
  .subscribe({
    next: (response) => {
      const xml = response;
      //const json = xml2json(xml, { spaces: 1 })
      this.weatherData = response;
      console.log(response);      
      //console.log(json.elements.Title);      
    }
  }); */