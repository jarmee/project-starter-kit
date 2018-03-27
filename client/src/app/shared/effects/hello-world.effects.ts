import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HelloWorldActionTypes, HelloWorldLoaded, HelloWorldActions } from '../actions/hello-world.actions';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HelloWorldEffects {

  @Effect()
  helloWorld$: Observable<HelloWorldActions> = this.actions$.pipe(
    ofType(HelloWorldActionTypes.HelloWorldLoadAction),
    map(()=> new HelloWorldLoaded("TODO Add Service....."))
  );

  constructor(private actions$: Actions) {}
}
