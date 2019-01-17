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


@Component({
  selector: 'app-eventupdate',
  templateUrl: './eventupdate.component.html',
  styleUrls: ['./eventupdate.component.css']
})
export class EventupdateComponent implements OnInit {

  myEventUpdateForm : FormGroup;
  id: number;
  event$ : Events;
  sub: Subscription;

  usrid = JSON.parse(localStorage.getItem('currentuser'));
  

  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private eventService : EventService, private authService : AuthenticationService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe((v : any) => {
      this.id = v.id;
      console.log(this.event$);
    });
    
    
    this.eventService.getEvent(this.id).subscribe((value =>{
      this.event$ = value;
      this.myEventUpdateForm.patchValue(this.event$ as any)
  }));


    this.myEventUpdateForm = this.formBuilder.group({
      eventname: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      eventcapacity: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.max(300)])],
      eventcity: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      eventtime : ``,
      eventdate: '',
      // organizer_id:`${this.usrid}`
    // }, {validator: passwordMatcher}); // pass in the validator function
  });


}


  onSubmit() {
    alert(JSON.stringify(this.myEventUpdateForm.value));
    this.eventService.updateEvent(this.myEventUpdateForm, this.id).subscribe();
     console.log('Form submitted: ', this.myEventUpdateForm.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
     // TODO: do something useful with form
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
