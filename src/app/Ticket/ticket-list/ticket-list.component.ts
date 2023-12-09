import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatedTicket } from '../models/paginated.model';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  ticketsPaginated!: PaginatedTicket;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.ticketsPaginated = data['ticketsPaginated'];
    });
  }

  get tickets(): Ticket[] {
    return this.ticketsPaginated?.tickets;
  }

  handleTicket(ticketId: number) {
    this.ticketService.handleTicket(ticketId).subscribe((data) => {
      let handledTicketIndex = this.tickets?.findIndex((x) => x.id == ticketId);
      this.ticketsPaginated.tickets[handledTicketIndex] = data;
    });
  }

  getColorForTicket(createdDate: Date): string {
    const currentDate = new Date();
    const currenntDateAndTime = new Date(createdDate);
    const differenceInMilliseconds =
      currentDate.getTime() - currenntDateAndTime.getTime();
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

    if (differenceInMinutes <= 15) {
      return 'yellow';
    } else if (differenceInMinutes <= 30) {
      return 'green';
    } else if (differenceInMinutes <= 45) {
      return 'blue';
    } else if (differenceInMinutes <= 60) {
      return 'red';
    } else {
      return 'black';
    }
  }

  navigateToAddTicketPage() {
    this.router.navigate(['/add-ticket']);
  }
}
