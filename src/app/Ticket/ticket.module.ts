import { NgModule } from '@angular/core';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListResolver } from './resolvers/ticket-list.resolver';
import { TicketService } from './services/ticket.service';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CommonModule } from '@angular/common';
import { AddOrEditTicketComponent } from './add-or-edit-ticket/add-or-edit-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicketListComponent,
    TicketComponent,
    AddOrEditTicketComponent,
  ],
  imports: [TicketRoutingModule, CommonModule, ReactiveFormsModule],
  providers: [TicketListResolver],
})
export class TicketModule {}
