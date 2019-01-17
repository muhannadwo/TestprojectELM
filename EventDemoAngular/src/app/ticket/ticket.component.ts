import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/ticket/ticket-model';
import { TicketService } from 'src/app/ticket/ticket.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from 'src/app/authintication/authentication.service';
import { error } from 'selenium-webdriver';
import {Feedback} from '../feedback/feedback.model';
import {feedbackService} from '../feedback/feedbackService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
//   styleUrls: ['./ti.component.css']
})
export class TicketComponent implements OnInit {

  // id : number;
  ticket$: Ticket[];
  tickets$: Ticket[];
  feedback$: Feedback;
  sub : Subscription;
  myRateForm : FormGroup;

  constructor(private formBuilder : FormBuilder,  private route: ActivatedRoute, private ticketsService: TicketService, private authService: AuthenticationService, private feedService : feedbackService) {
  }

  ngOnInit() {

    this.myRateForm = this.formBuilder.group({
      feedbackcomment:['', Validators.required],
      feedbackrate:['', Validators.required]

    });

  // this.sub = this.route.params.subscribe((v : any)=>{
  //   this.id = v.ticketid;
  //   console.log(v.ticketid);
  // });

  // });

  this.getTickets();
  // this.getTicketsCanceled();

}
//   getTicket(id:number)
// {
//   this.ticket$ = this.ticketsService.getTicket(id).subscribe();
// }

getTickets(){
  this.ticketsService.getAllUserTickets(this.authService.getId()).subscribe(
    ticketData => {
      this.ticket$ = ticketData;
    },
    err => console.log(err),
    () => console.log('Loading Tickets complete...')
  );
}

getTicketsCanceled(){
  this.ticketsService.getTicketCanceled().subscribe(
    ticketsData => {
      this.tickets$ = ticketsData;
    },
    err => console.log(err),
    () => console.log('Loading AllUserTickets complete...')
  );
}

  addFeed(id){
    this.feedService.createFeed(this.myRateForm,id).subscribe(
     data => {},
      error => console.log(error),
      ()=> console.log('Feed Added!')
    );
  }

getCanceled(tid){
this.ticketsService.getdelete(tid).subscribe();
alert("Ticket Canceled!");
}

isOrgAndUser(){
  if(this.authService.getrole() === 'ROLE_ORG' && this.authService.getrole() === 'ROLE_USER'){
    // console.log(this.authService.getrole());
  return true;
  }
}
  isAdmin() {
    if(this.authService.getrole() === 'ROLE_ADMIN'){
      // console.log(this.authService.getrole());
    return true;
    }
  }
    isUser(){
      if(this.authService.getrole() === 'ROLE_USER'){
      return true;
      }
    }

    ifAttended(){

    }
    


}

