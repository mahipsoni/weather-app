import { GeoLocation } from "./geo-location.model";

export interface CityInfo {
  coord: GeoLocation;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
