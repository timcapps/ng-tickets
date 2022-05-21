import { Action, createReducer, on, State } from '@ngrx/store';

import { initialState, TicketsState } from './tickets-state';
import * as actions from './actions';
import { assoc, mergeRight } from 'ramda';
import { adapter } from './adapter';

export const ticketsReducer = createReducer<TicketsState>(
    initialState,

    on(
        actions.addTicket,
        actions.loadTickets,
        actions.loadTicketById,
        actions.assignTicket,
        actions.completeTicket,
        actions.updateTicket,
        actions.removeTicket,
        state => assoc('isLoading', true, state)
    ),

    on(actions.addTicketSuccess, (state, { added }) => adapter.addOne(added, assoc('isLoading', false, state))),

    on(actions.loadTicketsSuccess, (state, { tickets }) => adapter.addMany(tickets, assoc('isLoading', false, state))),

    on(actions.loadTicketByIdSuccess, (state, { ticket }) => adapter.upsertOne(ticket, assoc('isLoading', false, state))),

    on(
        actions.assignTicketSuccess,
        actions.completeTicketSuccess,
        actions.updateTicketSuccess, 
        (state, { updated }) => adapter.updateOne({ id: updated.id, changes: updated }, assoc('isLoading', false, state))
    ),

    on(actions.removeTicketSuccess, (state, { removedId }) => adapter.removeOne(removedId, assoc('isLoading', false, state))),

    on(
        actions.addTicketFailure,
        actions.loadTicketsFailure,
        actions.loadTicketByIdFailure,
        actions.assignTicketFailure,
        actions.completeTicketFailure,
        actions.updateTicketFailure,
        actions.removeTicketFailure,
        (state, { error }) => mergeRight(state, {isLoading: false, error})
    ),
);

export function reducer(state: TicketsState, action: Action){
    return ticketsReducer(state, action);
}
