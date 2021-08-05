import { CityInfo } from "./city-info.model";
import { CityWeather } from "./city-weather.model";

export interface CityForecast {
  city: CityInfo;
  list: CityWeather[];
}
