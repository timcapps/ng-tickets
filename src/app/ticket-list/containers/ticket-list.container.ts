import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { asyncScheduler, Observable, of, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { addTicket } from 'src/app/store/tickets-store/actions';

import { Ticket } from 'src/app/store/tickets-store/models';
import { selectAllTickets } from 'src/app/store/tickets-store/selectors';
import { TicketsState } from 'src/app/store/tickets-store/tickets-state';

@Component({
    selector: 'ticket-list-container',
    templateUrl: './ticket-list.container.html',
    styleUrls: ['./ticket-list.container.css']
  })
  export class TicketListContainer implements OnInit, OnDestroy {
    
    constructor(private readonly _store: Store<TicketsState>) {
      if(!this._unsubscribe$) {
        this._unsubscribe$ = new Subject<void>();
      }
    }

    public tickets: Ticket[] = [];
    public _unsubscribe$: Subject<void>;

    public ngOnInit(): void {
        this._setSubscriptions();

        // this._store.dispatch(addTicket({ description: 'test'}));
    }

    public ngOnDestroy(): void {
      this._unsubscribe$.next();
      this._unsubscribe$.complete();
    }

    public onCreateClick(): void {
      console.log('time to create a ticket');
    }

    private _setSubscriptions(): void {
      this._store.select(selectAllTickets).pipe(takeUntil(this._unsubscribe$), tap(console.log)).subscribe(tickets => this.tickets = tickets);
    }
    
  }
  