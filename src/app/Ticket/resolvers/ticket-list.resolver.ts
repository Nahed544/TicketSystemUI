import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TicketService } from '../services/ticket.service';

@Injectable({
  providedIn: 'root',
})
export class TicketListResolver implements Resolve<any> {
   constructor(private ticketService: TicketService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.ticketService.getTickets(1, 5).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}
