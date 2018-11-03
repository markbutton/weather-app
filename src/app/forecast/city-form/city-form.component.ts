import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city';

import * as state from '../../state';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {
  @Input() city: City;
  value: string;

  constructor(private forecastState: state.ForecastState) { }

  ngOnInit() {
  }

  buttonClick(value: string) {
    this.forecastState.getForecastService(value + ',us');
  }

}
