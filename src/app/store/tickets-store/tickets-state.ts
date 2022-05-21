import { EntityState } from '@ngrx/entity';

import { adapter } from './adapter';
import { Ticket } from './models';

export interface TicketsState extends EntityState<Ticket>{
    isLoading: boolean;
    error: any;
    selectedTicket: Ticket | null;
    selectedTicketId: number | null;
} 

export const initialState: TicketsState =  adapter.getInitialState({
    isLoading: false,
    error: null,
    selectedTicket: null,
    selectedTicketId: null
});