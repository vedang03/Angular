import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private http : HttpClient) { }

  getWeather(city:string){
    const  apiKey = '782d043c13111f149e2a089d15a33722'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   return this.http.get(apiUrl)
  }
}
