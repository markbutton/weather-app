import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';

import { ForecastComponent } from './forecast.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { CityFormComponent } from './city-form/city-form.component';
import { CityTextComponent } from './city-text/city-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [ForecastComponent, ForecastListComponent, ForecastItemComponent, CityFormComponent, CityTextComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }
