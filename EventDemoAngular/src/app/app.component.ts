import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {EventService} from './event/event.service';
import {Events} from './event/event.model';
import {AuthenticationService} from './authintication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EventDemoAngular';
  events$: Events[];
  value: boolean;
  user: any;
  route : Router;

  constructor(private eventService : EventService, private authService : AuthenticationService, private Router : Router){}

ngOnInit(){

  this.user = JSON.parse(localStorage.getItem('currentUser'))
  this.getEvents();

    }

    getEvents() {

      this.eventService.getEvents().subscribe(
        eventData => {
          this.events$ = eventData;
        },
        err => console.log(err),
        () => console.log('Loading Events complete...')
      );
      // console.log(this.events$)
    }

    navto(){
    if ( this.user)
    {this.route.navigate(['[routerLink]="[\'/event\', events.eventid]"']) }

    else {this.route.navigate(['/register'])}
    }




}
