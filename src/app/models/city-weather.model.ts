import { BaseWeather } from './base-weather.model';
import { GeoLocation } from './geo-location.model';
import { WeatherCondition } from './weather-condition.model';

export interface CityWeather {
  clouds: {
    all: number;
  };
  coord: GeoLocation;
  dt: number;
  dt_txt: string;
  id: number;
  main: BaseWeather;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
  }; 
  visibility: number;
  weather: WeatherCondition[];
  wind: {
    speed: number;
    deg: number;
  };
}
