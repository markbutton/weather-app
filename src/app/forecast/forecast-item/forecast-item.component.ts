import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models/list';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {
  @Input() item: List;

  constructor() { }

  ngOnInit() {
  }

}
