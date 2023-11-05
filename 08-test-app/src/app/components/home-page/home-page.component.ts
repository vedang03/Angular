import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  city!:string
 weatherDataa:any;


 constructor(private weatherService:WeatherService){}

 ngOnInit(){

 }

 getWeather(){
  this.weatherService.getWeather(this.city)
  .subscribe(data=>{
    this.weatherDataa=data
    console.log(data)
    this.city=''
  })
 }
}
