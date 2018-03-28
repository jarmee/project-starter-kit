import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { HelloWorldEffects } from './hello-world.effects';
import { HelloWorldService } from '../services/hello-world.service';
import { HttpModule } from '@angular/http';

describe('HelloWorldService', () => {
  let actions$: Observable<any>;
  let effects: HelloWorldEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        HelloWorldService,
        HelloWorldEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(HelloWorldEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
