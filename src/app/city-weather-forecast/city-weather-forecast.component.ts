import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityWeather } from '../models/city-weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss']
})
export class CityWeatherForecastComponent implements OnInit {
  cityForecastData!: CityWeather[];
  constructor(
    private route: ActivatedRoute, 
    private _getWeatherService: WeatherService
  ) { 
    console.log(this.route.snapshot.params.name);
  }

  ngOnInit(): void {
    this.getCityForecast();
  }

  get cityName(): string {
    return this.route.snapshot.params.name;
  }

  getCityForecast() {
    this._getWeatherService.getCityForecast(this.cityName).subscribe(res=>{
      console.log("5 days weather forecast", res);
      this.cityForecastData = res;
    });
  }

}
