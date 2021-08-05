import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CityWeather } from '../models/city-weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByIds(ids: number[]): Observable<CityWeather[]> {
    return this.http.get<{list: CityWeather[]}>
    (`${environment.openWeatherMapUrl}group?id=${ids}&units=metric&APPID=${environment.apiId}`).pipe(
      pluck('list')
    );
  }

  getCityForecast(cityName:string): Observable<CityWeather[]> {
    return this.http.get<{list: CityWeather[]}>
      (`${environment.openWeatherMapUrl}forecast?q=${cityName}&units=metric&APPID=${environment.apiId}`).pipe(
        pluck('list'),
        map( res => res.filter(r => new Date(r.dt_txt).getHours() === 9))
      );
  }
}
