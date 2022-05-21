import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from '../store/root-store.module';
import { TicketsExistGuard } from '../store/tickets-store/guards/tickets-exist.guard';

import { TicketListContainer } from './containers/ticket-list.container';

const routes: Routes = [
   {
    path: '',
    component: TicketListContainer,
    canActivate: [TicketsExistGuard]
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketListRoutingModule {}