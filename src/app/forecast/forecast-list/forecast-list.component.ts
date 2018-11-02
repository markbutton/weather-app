import { Component, OnInit, Input } from '@angular/core';

import { List } from '../models/list';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})

export class ForecastListComponent implements OnInit {
  @Input() items: Array<List>;

  constructor() { }

  ngOnInit() {
  }

}
