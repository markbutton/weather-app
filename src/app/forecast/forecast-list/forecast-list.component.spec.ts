import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastListComponent } from './forecast-list.component';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';
import { MatCardModule } from '@angular/material';

describe('ForecastListComponent', () => {
  let component: ForecastListComponent;
  let fixture: ComponentFixture<ForecastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastListComponent, ForecastItemComponent ],
      imports: [ MatCardModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
