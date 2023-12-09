import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-or-edit-ticket',
  templateUrl: './add-or-edit-ticket.component.html',
  styleUrls: ['./add-or-edit-ticket.component.css'],
})
export class AddOrEditTicketComponent implements OnInit {
  ticketForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ticketForm = this.fb.group({
      phoneNumber: [null, Validators.required],
      governorate: [null, Validators.required],
      city: [null, Validators.required],
      district: [null, Validators.required],
      isHandled: [false, Validators.required],
    });
  }

  get cities(): string[] {
    return ['Cairo', 'Sharm', 'Alex'];
  }

  get districts(): string[] {
    return ['Rehab', 'Nasr City', 'Zaid'];
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      const newTicket: Ticket = this.ticketForm.value;
      this.ticketService.addTicket(newTicket).subscribe((data) => {
        this.router.navigate(['/']);
      });
    }
  }
}
