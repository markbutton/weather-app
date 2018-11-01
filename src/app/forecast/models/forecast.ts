import { City } from './city';
import { List } from './list';

  export class Forecast {
      cod: string;
      message: number;
      cnt: number;
      list: List[];
      city: City;
  }
