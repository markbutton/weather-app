import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { CityTextComponent } from './city-text/city-text.component';
import { CityFormComponent } from './city-form/city-form.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import { ForecastState } from '../state';
import { HttpClient, HttpHandler } from '@angular/common/http';

class Forecast {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent, CityTextComponent, CityFormComponent, ForecastListComponent, ForecastItemComponent ],
      imports: [ FormsModule, MatIconModule, MatFormFieldModule, MatCardModule ],
      providers: [ ForecastState, HttpClient, HttpHandler, { provide: 'SESSIONSTORAGE', useFactory: getSessionStorage } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export function getSessionStorage() {
  return typeof window !== 'undefined' ? window.sessionStorage : null;
}
