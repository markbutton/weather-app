import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city';
import { Forecast5Data } from '../services/forecast5.data';

@Component({
  selector: 'app-city-text',
  templateUrl: './city-text.component.html',
  styleUrls: ['./city-text.component.scss']
})
export class CityTextComponent implements OnInit {
  @Input() city: City;

  constructor() { }

  ngOnInit() {
    if (!this.city) {
      this.city = Forecast5Data.city;
    }
  }

}
