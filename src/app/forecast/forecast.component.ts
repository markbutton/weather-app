import { Component, OnInit } from '@angular/core';

import * as state from '../state';
import { Observable } from 'rxjs';
import { Forecast } from './models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

export class ForecastComponent implements OnInit {
  public complete: Observable<boolean>;
  public forecast: Observable<Forecast>;
  public day1: {start: 0, end: 8};

  constructor(private forecastState: state.ForecastState) { }

  ngOnInit() {
    this.complete = this.forecastState.complete;
    this.forecast = this.forecastState.forecast;
  }

}
