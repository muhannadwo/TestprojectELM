import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/event/event.model';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { EventService } from 'src/app/event/event.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-eventcreation',
  templateUrl: './eventcreation.component.html',
  styleUrls: ['./eventcreation.component.css']
})
export class EventcreationComponent implements OnInit {

  usr= JSON.parse(localStorage.getItem('currentUser'));
  usrid= this.usr.userId;
  

  myReactiveFormEvent: FormGroup;
    event$: Observable<Events>;

  constructor(private formBuilder: FormBuilder, private evnetService: EventService) { }

  ngOnInit() {
    this.myReactiveFormEvent = this.formBuilder.group({
      eventname: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      eventcapacity: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.max(300)])],
      eventcity: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      eventtime : ``,
      eventdate: '',
      // organizer_id:`${this.usrid}`
    // }, {validator: passwordMatcher}); // pass in the validator function
  });

  console.log(this.usrid);
  }

  onSubmitOrg() {
    alert(JSON.stringify(this.myReactiveFormEvent.value));
    this.evnetService.addEvent(this.myReactiveFormEvent,this.usrid).subscribe();
     console.log('Form submitted: ', this.myReactiveFormEvent.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
     // TODO: do something useful with form
   }

}
