import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ForecastModule } from './forecast/forecast.module';
import { UiModule } from './ui/ui.module';
import { ForecastState } from './state';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ForecastModule, UiModule, NoopAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ForecastState, HttpClient, HttpHandler, { provide: 'SESSIONSTORAGE', useFactory: getSessionStorage }
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Weather App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Weather App');
  });

  it('should render 5 Day Weather Forecast in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('5 Day Weather Forecast');
  });
});

export function getSessionStorage() {
  return typeof window !== 'undefined' ? window.sessionStorage : null;
}
