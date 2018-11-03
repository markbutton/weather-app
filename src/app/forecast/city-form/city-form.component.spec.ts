import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFormComponent } from './city-form.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule } from '@angular/material';
import { ForecastState } from 'src/app/state';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CityFormComponent', () => {
  let component: CityFormComponent;
  let fixture: ComponentFixture<CityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityFormComponent ],
      imports: [
        FormsModule, MatInputModule, MatIconModule, BrowserAnimationsModule
      ],
      providers: [
        ForecastState, HttpClient, HttpHandler, { provide: 'SESSIONSTORAGE', useFactory: getSessionStorage }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFormComponent);
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
