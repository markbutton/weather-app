import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Forecast } from '../forecast/models/forecast';
import { Forecast5Service } from '../forecast/services/forecast5.service';

@Injectable()
export class ForecastState {
  // State Model
  private _forecast: BehaviorSubject<Forecast> = new BehaviorSubject(Object());
  public forecast: Observable<Forecast> = this._forecast.asObservable();
  private _complete: BehaviorSubject<boolean> = new BehaviorSubject(Boolean());
  public complete: Observable<boolean> = this._complete.asObservable();

  constructor(private forecast5Service: Forecast5Service,
    @Inject('SESSIONSTORAGE') private sessionStorage: any) {
    this.loadInitialData();
    this.setComplete(false);
  }

  // State Controller
  public loadInitialData(): void {
    const sessionForecast = this.sessionStorage.getItem('forecast');
    if (sessionForecast) {
      this.getForecastSession();
    } else {
      this.getForecastService('denver,us');
    }
    console.log(this._forecast.getValue());
  }

  setComplete(complete: boolean): void {
    this._complete.next(complete);
  }

  getForecastService(city: string): void {
    this.forecast5Service.getWeatherForecast(city).subscribe(
      res => {
        const response = res;
        this._forecast.next(response);
        this.sessionStorage.setItem('forecast', JSON.stringify(response));
      },
      err => console.error('Error retrieving Weather Forecast')
    );
  }

  getForecastSession(): void {
    const forecast = sessionStorage.getItem('forecast');
    this._forecast.next(JSON.parse(forecast));
  }

}
