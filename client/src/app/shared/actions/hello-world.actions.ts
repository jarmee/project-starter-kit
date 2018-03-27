import { Action } from '@ngrx/store';

export enum HelloWorldActionTypes {
  HelloWorldLoadAction = '[HelloWorld] Load Action',
  HelloWorldLoadedAction = '[HelloWorld] Loadaed Action'
}

export class HelloWorldLoad implements Action {
  readonly type = HelloWorldActionTypes.HelloWorldLoadAction;
}

export class HelloWorldLoaded implements Action {
  readonly type = HelloWorldActionTypes.HelloWorldLoadedAction;
  constructor(public payload: string) {}
}

export type HelloWorldActions = HelloWorldLoad | HelloWorldLoaded;
