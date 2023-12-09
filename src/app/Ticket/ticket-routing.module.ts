import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketListResolver } from './resolvers/ticket-list.resolver';
import { TicketService } from './services/ticket.service';
import { AddOrEditTicketComponent } from './add-or-edit-ticket/add-or-edit-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketComponent,
    children: [
      {
        path: '',
        component: TicketListComponent,
        resolve: {
          ticketsPaginated: TicketListResolver,
        },
      },
      {
        path: 'add-ticket',
        component: AddOrEditTicketComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
