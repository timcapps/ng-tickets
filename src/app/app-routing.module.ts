import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const children: Routes = [
    {
        path: 'tickets',
        loadChildren: () => import('./ticket-list/ticket-list.module').then(m => m.TicketListModule)
    },
    {
        path: '',
        redirectTo: 'tickets',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'tickets'
    }
];

const routes: Routes = [
    {
        path: '',
        children
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}