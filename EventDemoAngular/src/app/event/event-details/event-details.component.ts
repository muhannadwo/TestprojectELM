import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { Events } from 'src/app/event/event.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event/event.service';
import { Observable } from 'rxjs/internal/Observable';
import { Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authintication/authentication.service';
import { Router } from '@angular/router';
import { commentService } from 'src/app/comment/commentService';
import { error } from '@angular/compiler/src/util';
import { Comment } from 'src/app/comment/comment.model';
import {TicketService} from '../../ticket/ticket.service';
import {Ticket} from '../../ticket/ticket-model';
import {Feedback} from '../../feedback/feedback.model';
import {feedbackService} from '../../feedback/feedbackService';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  comment$: Comment[];
  tickets$ : Ticket[];
  ticket$ : Ticket;
  feedback$: Feedback;
  myForm : FormGroup;
  myRateForm : FormGroup;
  id: number;
  event$ : Events;
  allorgevents: Events[];
  allusersinevent: Events[];
  sub: Subscription;

  usrid = JSON.parse(localStorage.getItem('currentuser'));
  

  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private eventService : EventService, private authService : AuthenticationService, private route1 : Router
  ,private commentService : commentService, private ticketService : TicketService, private feedService : feedbackService) { }

  ngOnInit() {


      this.myForm = this.formBuilder.group({
        ccomment:['', Validators.required],
        eventrate:['', Validators.required]

      });
    this.myRateForm = this.formBuilder.group({
      feedbackcomment:['', Validators.required],
      feedbackrate:['', Validators.required]

    });


    this.sub = this.route.params.subscribe((v : any) => {
      this.id = v.id;
      console.log(this.event$);
    });
    
    
    this.eventService.getEvent(this.id).subscribe((value =>{
      this.event$ = value;
  }));

  this.getComments();
  this.allOrgEvents();
  this.getUserList();

}


activeEvent(){
this.eventService.getActive(this.id).subscribe();
alert ("Event Activated!");

}

dactiveEvent(){
  this.eventService.getDeactive(this.id).subscribe();
  alert ("Event Dectivated!");
  
  }

deleteEvent(){
  this.eventService.getDelete(this.id).subscribe();
  alert ("Event Deleted!");
  
  }

  // updateEvent(){
  //     this.route1.navigate(['/eventupdate'])
  //   }

  getEventId(){
     return this.id;
  }

  allOrgEvents(){
    this.eventService.getAllorgEvents(this.authService.getId()).subscribe(
      eventData => {
        this.allorgevents = eventData;
      },
      err => console.log(err),
      () => console.log('Loading Org Events complete...')
    );
  }

  // alladminEvents(){
  //   this.eventService.getAllEvents().subscribe(
  //     eventData => {
  //       this.alladminevents = eventData;
  //     },
  //     err => console.log(err),
  //     () => console.log('Loading Admin Events complete...')
  //   );
  // }

   bookTicket(){
    //  console.log(this.authService.getId());
    this.eventService.bookTicket(this.authService.getId(),this.id).subscribe();
    alert(" Ticket Booked!")
   }

   isOrg(){
    if(this.authService.getrole() === 'ROLE_ORG'){
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

      enableBook(){

        if( this.event$.ecount == this.event$.eventcapacity){
          return false;
        }return true;
      }

      enableEvent(){

        if( this.event$.active == true){
          return false;
        }return true;
      }

      disableEvent(){

        if( this.event$.active == true){
          return true;
        }return false;
      }


      // addFeed(id){
      //   console.log()
      //   // this.feedService.createFeed(this.myRateForm,id).subscribe(
      //   //  data => {},
      //   //   error => console.log(error),
      //   //   ()=> console.log('Feed Added!')
      //   // );
      // }

  addComment(){
    this.commentService.createComment(this.myForm,this.authService.getId(),this.id).subscribe(
      data => {},
      error => console.log(error),
      ()=> console.log('Comment Added!')
    );
    alert('You Cant Comment Again In 120 SECONDS!');
  }

      getComments(){
        this.commentService.getComment(this.id).subscribe(
          commentData => {
            this.comment$ = commentData;
          },
          err => console.log(err),
          () => console.log('Loading comments complete...')
        );      
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

  userAttend(id){
    this.ticketService.makeAttend(id).subscribe();
    alert ("User Attended!");
  }

}
