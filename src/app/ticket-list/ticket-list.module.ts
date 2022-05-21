import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ROOT_STORE_REDUCERS } from '../store/reducer';

import { TicketListContainer } from './containers/ticket-list.container';
import { TicketListRoutingModule } from './ticket-list-routing.module';



@NgModule({
    declarations: [
        TicketListContainer
    ],
    imports: [
        CommonModule,
        TicketListRoutingModule
    ]
})
export class TicketListModule {
}