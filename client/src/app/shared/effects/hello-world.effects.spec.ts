import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { HelloWorldEffects } from './hello-world.effects';

describe('HelloWorldService', () => {
  let actions$: Observable<any>;
  let effects: HelloWorldEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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
