import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-city-text',
  templateUrl: './city-text.component.html',
  styleUrls: ['./city-text.component.scss']
})
export class CityTextComponent implements OnInit {
  @Input() city: City;
  
  constructor() { }

  ngOnInit() {
  }

}
