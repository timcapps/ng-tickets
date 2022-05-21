import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { TicketsEffects } from "./effects";

import { Ticket } from "./models";

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();