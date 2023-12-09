import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SearchCriteria } from '../models/search-criteria.model';
import { Observable } from 'rxjs';
import { PaginatedTicket } from '../models/paginated.model';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  baseURL = environment.apiUrl + 'Ticket';

  constructor(private http: HttpClient) {}

  getTickets(
    pageNumber: number = 1,
    pageSize: number = 5
  ): Observable<PaginatedTicket> {
    return this.http.get<PaginatedTicket>(
      this.baseURL + `/${pageNumber}/${pageSize}`
    );
  }

  handleTicket(ticketId: number): Observable<Ticket> {
    return this.http.post<Ticket>(this.baseURL + `/${ticketId}/handle`, null);
  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.baseURL, ticket);
  }
}
