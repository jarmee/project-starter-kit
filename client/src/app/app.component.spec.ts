import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { EffectsModule } from '@ngrx/effects';
import { HelloWorldEffects } from './shared/effects/hello-world.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducers/hello-world.reducer';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HelloWorldModule,
        StoreModule.forRoot(reducer),
        EffectsModule.forRoot([HelloWorldEffects])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
