import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastItemComponent } from './forecast-item.component';
import { MatCardModule } from '@angular/material';
import { Forecast5Data } from '../services/forecast5.data';
import { ReplaceSpacePipe } from '../pipes/replace-space.pipe';

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastItemComponent, ReplaceSpacePipe ],
      imports: [ MatCardModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;
    component.item = Forecast5Data.list[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
