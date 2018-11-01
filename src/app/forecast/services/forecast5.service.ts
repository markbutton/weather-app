import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Forecast } from '../models/forecast';

@Injectable({
  providedIn: 'root'
})
export class Forecast5Service {

  constructor(private http: HttpClient) { }

  getWeatherForecast(city): Observable<Forecast> {
    return this.http.get<Forecast>(
      environment.baseUrl + 'forecast?q=' +
      city + '&appid=' +
      environment.appId + '&units=' +
      environment.units);
 }

}
