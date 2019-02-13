import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket/ticket.service';
import {EventService} from '../event/event.service';
import {Events} from '../event/event.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Ticket} from '../ticket/ticket-model';

@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.css']
})
export class EventTicketComponent implements OnInit {

  constructor(private route : ActivatedRoute, private ticketService : TicketService, private eventService : EventService) { }

  tickets$ : Ticket[];
  id : number;
  sub : Subscription;

  ngOnInit() {


    this.sub = this.route.params.subscribe((v : any) => {
      this.id = v.id;
      console.log(this.id);
    });



    this.getUserList();
  }

  getUserList(){
    this.ticketService.getAllEventTickets(this.id).subscribe(
      ticketData => {
        this.tickets$ = ticketData;
      },
      err => console.log(err),
      () => console.log('Loading UserTickets complete...')
    );
  }





}
