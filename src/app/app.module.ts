import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ForecastModule } from './forecast/forecast.module';

import * as state from './state';
import { Forecast5Service } from './forecast/services/forecast5.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    AppRoutingModule,
    UiModule,
    ForecastModule,
    HttpClientModule,
  ],
  providers: [
    Forecast5Service,
    state.ForecastState,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    { provide: 'SESSIONSTORAGE', useFactory: getSessionStorage }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}

export function getSessionStorage() {
  return typeof window !== 'undefined' ? window.sessionStorage : null;
}
