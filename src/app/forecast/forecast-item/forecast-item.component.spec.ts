import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastItemComponent } from './forecast-item.component';
import { MatCardModule } from '@angular/material';

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastItemComponent ],
      imports: [ MatCardModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
