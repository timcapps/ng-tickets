import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';


import { select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { merge, Observable, of } from 'rxjs';
import { first, map, mapTo, switchMap, take } from 'rxjs/operators';

import { loadTickets, loadTicketsFailure, loadTicketsSuccess } from '../actions';
import { Ticket } from '../models';
import { selectAllTickets } from '../selectors';
import { TicketsState } from '../tickets-state';

@Injectable({providedIn: 'root'})
export class TicketsExistGuard implements CanActivate {

    constructor(
        private readonly _store: Store<TicketsState>,
        private readonly _actions$: Actions,
    ){}

    private hasTicketsInApi(): Observable<boolean> {
        this._store.dispatch(loadTickets());

        return merge(
            this._actions$.pipe(ofType(loadTicketsSuccess), mapTo(true)),
            this._actions$.pipe(ofType(loadTicketsFailure), mapTo(false))
        ).pipe(first());
    }

    private hasTicketsInState(): Observable<boolean> {
        return this._store.pipe(
            select(selectAllTickets),
            map((tickets: Ticket[]) => tickets.length > 0),
            take(1)
        )
    }

    private hasTickets(): Observable<boolean> {
        return this.hasTicketsInState().pipe(
            switchMap(inState => {
                if(inState) return of(inState);

                return this.hasTicketsInApi();
            })
        );
    }

    public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.hasTickets();
    }
}
