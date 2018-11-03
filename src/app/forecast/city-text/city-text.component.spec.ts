import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTextComponent } from './city-text.component';
import { ForecastState } from 'src/app/state';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
