import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { TicketsState } from './tickets-state';
import * as actions from './actions';
import { TicketsService } from './services/tickets.service';

@Injectable()
export class TicketsEffects {

    public readonly addTicket$: Observable<Action> = createEffect(() => 
        this._actions$.pipe(
            ofType(actions.addTicket),
            mergeMap(({ description }) => 
                this._service.newTicket({ description }).pipe(
                    map(added => actions.addTicketSuccess({ added })),
                    catchError(error => of(actions.addTicketFailure({ error })))
                )
            )
        )
    );

    public readonly loadTickets$: Observable<Action> = createEffect(() => 
        this._actions$.pipe(
            ofType(actions.loadTickets),
            mergeMap(_ => 
                this._service.tickets().pipe(
                    map(tickets => actions.loadTicketsSuccess({ tickets })),
                    catchError(error => of(actions.loadTicketsFailure({ error })))
                )
            )
        )
    );
    
    public readonly assignTicket$: Observable<Action> = createEffect(() => 
        this._actions$.pipe(
            ofType(actions.assignTicket),
            mergeMap(({ ticketId, userId }) => 
                this._service.assign(ticketId, userId).pipe(
                    map(updated => actions.assignTicketSuccess({ updated })),
                    catchError(error => of(actions.assignTicketFailure({ error })))
                )
            )
        )
    );

    public readonly completeTicket$: Observable<Action> = createEffect(() => 
        this._actions$.pipe(
            ofType(actions.completeTicket),
            mergeMap(({ ticketId, completed }) => 
                this._service.complete(ticketId, completed ).pipe(
                    map(updated => actions.completeTicketSuccess({ updated })),
                    catchError(error => of(actions.completeTicketFailure({ error })))
                )
            )
        )
    );

    public readonly updateTicket$: Observable<Action> = createEffect(() => 
        this._actions$.pipe(
            ofType(actions.updateTicket),
            mergeMap(({ ticketId, updates }) => 
                this._service.update(ticketId, updates).pipe(
                    map(updated => actions.updateTicketSuccess({ updated })),
                    catchError(error => of(actions.updateTicketFailure({ error })))
                )
            )
        )
    );
    
    constructor(
        private readonly _store$: Store<TicketsState>,
        private readonly _actions$: Actions,
        private readonly _service: TicketsService
    ){}
}