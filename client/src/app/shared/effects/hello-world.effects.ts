import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HelloWorldActionTypes, HelloWorldLoaded, HelloWorldActions } from '../actions/hello-world.actions';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HelloWorldService } from '../services/hello-world.service';


@Injectable()
export class HelloWorldEffects {

  @Effect()
  helloWorld$: Observable<any> = this.actions$.pipe(
    ofType(HelloWorldActionTypes.HelloWorldLoadAction),
    switchMap(() => {
      return this.service.helloWorld();
    }),
    map((resp) => {
      return new HelloWorldLoaded(resp);
    })
  );

  constructor(private actions$: Actions, private service: HelloWorldService) {}
}
