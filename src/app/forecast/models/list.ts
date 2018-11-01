import { Main } from './main';
import { Weather } from './weather';
import { Clouds } from './clouds';
import { Wind } from './wind';
import { Sys } from './sys';
import { Rain } from './rain';
import { Snow } from './snow';

export class List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
  snow?: Snow;
}
