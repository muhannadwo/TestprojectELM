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


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {


  user$ : Observable<User>;
  users$: User[];

  event$: Observable<Event>
  events$ : Events[];

  ticket$: Observable<Ticket>
  tickets$: Ticket[];

  comment$: Observable<Comment>
  comments$: Comment[];

  constructor(private route: ActivatedRoute, private userService : UserService, private authService: AuthenticationService, private route1 : Router,
  private eventService : EventService, private ticketService : TicketService, private commentService: commentService) { }

  ngOnInit() {
    this.user$ = this.userService.getUser(this.authService.getId());

    
  

  this.usercounter();
  this.eventscounter();
  this.ticketscounter();
  this.commentcounter();

  


  }
  deleteUser(){
    this.userService.getdelete(this.authService.getId()).subscribe();
    alert('User Deleted!');
  }

  eventscounter(){
    if(this.isAdmin){
      this.eventService.getAllEvents().subscribe(
        value => this.events$ = value
      )
    }
  }

  ticketscounter(){
    if(this.isAdmin){
      this.ticketService.getTicketCanceled().subscribe(
        value => this.tickets$ = value
      )
    }
  }

  usercounter(){
  if(this.isAdmin){
    this.userService.getUsers().subscribe(
      value => this.users$ = value
    )
  }
}

commentcounter(){
  if(this.isAdmin){
    this.commentService.getComments().subscribe(
      value => this.comments$ = value
    )
  }
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
