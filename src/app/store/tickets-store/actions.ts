import { createAction, props } from "@ngrx/store";

import { Ticket } from "./models";

export enum TicketsActionTypes{
    AddTicket = '[Tickets] Add Ticket',
    AddTicketSuccess = '[Tickets] Add Ticket Success',
    AddTicketFailure = '[Tickets] Add Ticket Failure',

    LoadTickets = '[Tickets] Load Tickets',
    LoadTicketsSuccess = '[Tickets] Load Tickets Success',
    LoadTicketsFailure = '[Tickets] Load Tickets Failure',

    LoadTicketById = '[Tickets] Load Ticket By Id',
    LoadTicketByIdSuccess = '[Tickets] Load Ticket By Id Success',
    LoadTicketByIdFailure = '[Tickets] Load Ticket By Id Failure',

    AssignTicket = '[Tickets] Assign Ticket',
    AssignTicketSuccess = '[Tickets] Assign Ticket Success',
    AssignTicketFailure = '[Tickets] Assign Ticket Failure',

    CompleteTicket = '[Tickets] Complete Ticket',
    CompleteTicketSuccess = '[Tickets] Complete Ticket Success',
    CompleteTicketFailure = '[Tickets] Complete Ticket Failure',

    UpdateTicket = '[Tickets] Update Ticket',
    UpdateTicketSuccess = '[Tickets] Update Ticket Success',
    UpdateTicketFailure = '[Tickets] Update Ticket Failure',

    RemoveTicket = '[Tickets] Remove Ticket',
    RemoveTicketSuccess = '[Tickets] Remove Ticket Success',
    RemoveTicketFailure = '[Tickets] Remove Ticket Failure',
}

export const addTicket = createAction(
    TicketsActionTypes.AddTicket,
    props<{ description: string }>()
);

export const addTicketSuccess = createAction(
    TicketsActionTypes.AddTicketSuccess,
    props<{ added: Ticket }>()
);

export const addTicketFailure = createAction(
    TicketsActionTypes.AddTicketFailure,
    props<{ error: Error }>()
);

export const loadTickets = createAction(
    TicketsActionTypes.LoadTickets
);

export const loadTicketsSuccess = createAction(
    TicketsActionTypes.LoadTicketsSuccess,
    props<{ tickets: Ticket[] }>()
);

export const loadTicketsFailure = createAction(
    TicketsActionTypes.LoadTicketsFailure,
    props<{ error: Error }>()
);

export const loadTicketById = createAction(
    TicketsActionTypes.LoadTicketById,
    props<{ id: number }>()
);

export const loadTicketByIdSuccess = createAction(
    TicketsActionTypes.LoadTicketByIdSuccess,
    props<{ ticket: Ticket }>()
);

export const loadTicketByIdFailure = createAction(
    TicketsActionTypes.LoadTicketByIdFailure,
    props<{ error: Error }>()
);

export const updateTicket = createAction(
    TicketsActionTypes.UpdateTicket,
    props<{ ticketId: number, updates: Partial<Omit<Ticket, "id">> }>()
);

export const updateTicketSuccess = createAction(
    TicketsActionTypes.UpdateTicketSuccess,
    props<{ updated: Ticket }>()
);

export const updateTicketFailure = createAction(
    TicketsActionTypes.UpdateTicketFailure,
    props<{ error: Error }>()
);

export const assignTicket = createAction(
    TicketsActionTypes.AssignTicket,
    props<{ ticketId: number, userId: number }>()
);

export const assignTicketSuccess = createAction(
    TicketsActionTypes.AssignTicketSuccess,
    props<{ updated: Ticket }>()
);

export const assignTicketFailure = createAction(
    TicketsActionTypes.AssignTicketFailure,
    props<{ error: Error }>()
);

export const completeTicket = createAction(
    TicketsActionTypes.CompleteTicket,
    props<{ ticketId: number, completed: boolean }>()
);

export const completeTicketSuccess = createAction(
    TicketsActionTypes.CompleteTicketSuccess,
    props<{ updated: Ticket }>()
);

export const completeTicketFailure = createAction(
    TicketsActionTypes.CompleteTicketFailure,
    props<{ error: Error }>()
);

export const removeTicket = createAction(
    TicketsActionTypes.RemoveTicket,
    props<{ ticket: Ticket }>()
);

export const removeTicketSuccess = createAction(
    TicketsActionTypes.RemoveTicketSuccess,
    props<{ removedId: number }>()
);

export const removeTicketFailure = createAction(
    TicketsActionTypes.RemoveTicketFailure,
    props<{ error: Error }>()
);