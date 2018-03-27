import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromHelloWorld from './hello-world.reducer';
import { environment } from '../../../environments/environment';

export interface AppState {
  helloWorld: fromHelloWorld.State
}

export const reducers: ActionReducerMap<AppState> = {
  helloWorld: fromHelloWorld.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
