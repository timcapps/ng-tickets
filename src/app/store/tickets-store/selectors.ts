import { createSelector } from "@ngrx/store";

import { pathOr } from "ramda";

import { selectRootState } from "../selectors";
import { adapter } from "./adapter";
import { initialState } from "./tickets-state";

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectTicketsState = createSelector(selectRootState, pathOr(initialState, ['tickets']));

export const selectAllTickets = createSelector(selectTicketsState, selectAll);

export const selectTicketEntities = createSelector(selectTicketsState, selectEntities);