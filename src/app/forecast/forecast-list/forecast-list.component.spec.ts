import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastListComponent } from './forecast-list.component';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';
import { MatCardModule } from '@angular/material';
import { Forecast5Data } from '../services/forecast5.data';
import { ReplaceSpacePipe } from '../pipes/replace-space.pipe';

describe('ForecastListComponent', () => {
  let component: ForecastListComponent;
  let fixture: ComponentFixture<ForecastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastListComponent, ForecastItemComponent, ReplaceSpacePipe ],
      imports: [ MatCardModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastListComponent);
    component = fixture.componentInstance;
    component.items = Forecast5Data.list;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
