import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { CityFormComponent } from './city-form/city-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForecastComponent, ForecastListComponent, ForecastItemComponent, CityFormComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }
