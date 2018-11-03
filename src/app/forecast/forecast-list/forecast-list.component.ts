import { Component, OnInit, Input } from '@angular/core';

import { List } from '../models/list';
import { Forecast5Data } from '../services/forecast5.data';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})

export class ForecastListComponent implements OnInit {
  @Input() items: Array<List>;

  constructor() { }

  ngOnInit() {
    if (!this.items) {
      this.items = Forecast5Data.list;
    }
  }

}
