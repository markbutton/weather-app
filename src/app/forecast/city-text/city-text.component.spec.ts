import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTextComponent } from './city-text.component';

describe('CityTextComponent', () => {
  let component: CityTextComponent;
  let fixture: ComponentFixture<CityTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTextComponent ]
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
