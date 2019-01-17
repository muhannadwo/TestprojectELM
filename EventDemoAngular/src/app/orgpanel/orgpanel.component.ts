import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { AuthenticationService } from 'src/app/authintication/authentication.service';
import { User } from 'src/app/user/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserDetailsComponent } from 'src/app/user/user-details/user-details.component';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event/event.service';
import { Events } from 'src/app/event/event.model';
import { Ticket } from 'src/app/ticket/ticket-model';
import { TicketService } from 'src/app/ticket/ticket.service';
import { Comment } from 'src/app/comment/comment.model';
import { commentService } from 'src/app/comment/commentService';
import {EventDetailsComponent} from '../event/event-details/event-details.component';

@Component({
  selector: 'app-orgpanel',
  templateUrl: './orgpanel.component.html',
  styleUrls: ['./orgpanel.component.css']
})
export class OrgpanelComponent implements OnInit {

  user$ : Observable<User>;
  event$: Observable<Events>;

  ticketCounter: number;
  commentCounter: number;
  eventactivecounter: number;

  private eventDetail : EventDetailsComponent;

  constructor(private route: ActivatedRoute, private userService : UserService, private authService: AuthenticationService, private route1 : Router,
  private eventService : EventService, private ticketService : TicketService, private commentService: commentService) { }

  ngOnInit() {
    this.user$ = this.userService.getUser(this.authService.getId());
    // this.event$ = this.eventService.getEvent(this.authService.getId());
    this.ticketService.getCountByUser(this.authService.getId()).subscribe(value => this.ticketCounter = value );
    this.commentService.getUserComments(this.authService.getId()).subscribe(value => this.commentCounter = value );
    this.eventService.getActivecounter().subscribe(value => this.eventactivecounter = value);










  }
  deleteUser(){
    this.userService.getdelete(this.authService.getId()).subscribe();
    alert('User Deleted!');
  }



  EditUser(){
    this.route1.navigate(['/userupdate']);
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

}


