import { Ticket } from "./ticket.model";

export interface PaginatedTicket {
    pageNumber : number;
    pageSize : number ;
    totalItems : number ;
    tickets: Ticket[];

}
