import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.enum';
import { CityWeather } from '../models/city-weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cityIds: number[] = [City.Amsterdam,City.London, City.Madrid, City.Moscow, City.Paris];
  citiesWeather!: CityWeather[];

  constructor(private _getWeatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCitiesWeather();
  }

  getCitiesWeather() {
    this._getWeatherService.getWeatherByIds(this.cityIds)
    .subscribe(res => {      
      this.citiesWeather = res;
    });
  }

}
