import { Action, createSelector } from '@ngrx/store';
import { HelloWorldActionTypes, HelloWorldActions } from '../actions/hello-world.actions';
import { AppState } from '.';

export interface State {
  value: string
}

export const initialState: State = {
  value: ''
};

export function reducer(state = initialState, action: HelloWorldActions): State {
  switch (action.type) {
    case HelloWorldActionTypes.HelloWorldLoadedAction:
      return {value: action.payload};
    default:
      return state;
  }
}

export const selectHelloWorld = (state: AppState) => {
  return state.helloWorld
};
export const selectValue = createSelector(selectHelloWorld, (state: State) => state.value);