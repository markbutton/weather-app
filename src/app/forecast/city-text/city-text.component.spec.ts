import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTextComponent } from './city-text.component';
import { ForecastState } from 'src/app/state';
import { Forecast5Data } from '../services/forecast5.data';

describe('CityTextComponent', () => {
  let component: CityTextComponent;
  let fixture: ComponentFixture<CityTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTextComponent ],
      providers: [
        ForecastState
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTextComponent);
    component = fixture.componentInstance;
    component.city = Forecast5Data.city;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
