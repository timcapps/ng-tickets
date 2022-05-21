import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

import { RootState } from './state';
import { reducer as ticketsReducer } from './tickets-store/reducer';

export const reducers: ActionReducerMap<RootState, Action> = {
    tickets: ticketsReducer
}

const _DESC = 'store.root.reducers';

export const ROOT_STORE_REDUCERS = new InjectionToken<ActionReducerMap<RootState, Action>>(
    _DESC, 
    { factory: (): ActionReducerMap<RootState, Action> => reducers }
);