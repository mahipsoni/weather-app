import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../models/city-weather.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() weatherData!: CityWeather;
  constructor() {}

  ngOnInit(): void {
    console.log(this.weatherData);
  }

}
