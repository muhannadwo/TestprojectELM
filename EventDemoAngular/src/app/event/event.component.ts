import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/event/event.model';
import { Event } from '@angular/router/src/events';
import { EventService } from 'src/app/event/event.service';
import { AuthenticationService } from 'src/app/authintication/authentication.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event$:Events[];
  events$:Events[];
  searchevent$:Events[];
  orgevents$: Events[];


  constructor(private route: ActivatedRoute, private eventsService: EventService, private authService : AuthenticationService) {
  }

  ngOnInit() {
      this.getEvents();
      this.getAllEvents();
      this.getAllorgEvents();
      
  }

  getAllorgEvents() {

    this.eventsService.getAllorgEvents(this.authService.getId()).subscribe(
      eventData => {
        this.orgevents$ = eventData;
      },
      err => console.log(err),
      () => console.log('Loading OrgEvents complete...')
    );
  }

  getEvents() {
    this.eventsService.getEvents().subscribe(
      eventData => {
        this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Loading ActiveEvents complete...')
    );}

  searchEvents(name) {
    this.eventsService.searchEvents(name).subscribe(
      eventData => {
        this.searchevent$ = eventData;
      },
      err => console.log(err),
      () => console.log('Loading Searched-ActiveEvents complete...')
    );
    console.log(name);
    }

  alertmsg(){
    alert("Event Not Found!");
  }

    getAllEvents() {
      
      this.eventsService.getAllEvents().subscribe(
        eventData => {
          this.events$ = eventData;
        },
        err => console.log(err),
        () => console.log('Loading Events complete...')
      );
}

isAdmin() {
  if(this.authService.getrole() === 'ROLE_ADMIN'){
    // console.log(this.authService.getrole());
  return true;
  }
}

  isOrg() {
    if(this.authService.getrole() === 'ROLE_ORG'){
      // console.log(this.authService.getrole());
      return true;
    }
  }

  isUser() {
    if(this.authService.getrole() === 'ROLE_USER'){
      // console.log(this.authService.getrole());
      return true;
    }
  }





}
