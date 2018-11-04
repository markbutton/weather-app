import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';

import { ForecastComponent } from './forecast.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { CityFormComponent } from './city-form/city-form.component';
import { CityTextComponent } from './city-text/city-text.component';
import { FormsModule } from '@angular/forms';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';

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
  declarations: [ForecastComponent, ForecastListComponent, ForecastItemComponent, CityFormComponent, CityTextComponent, ReplaceSpacePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ForecastComponent]
})
export class ForecastModule { }
