import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Comment } from 'src/app/comment/comment.model';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { commentService } from 'src/app/comment/commentService';
import { Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authintication/authentication.service';

@Component({
  selector: 'app-commentcreation',
  templateUrl: './commentcreation.component.html',
  styleUrls: ['./commentcreation.component.css']
})
export class CommentcreationComponent implements OnInit {

  myReactiveFormEvent: FormGroup;
  event$: Observable<Comment>;

constructor(private formBuilder: FormBuilder, private commentService : commentService, private authService : AuthenticationService) { }

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

}

// onSubmit() {
//   alert(JSON.stringify(this.myReactiveFormEvent.value));
//   this.commentService.createComment(this.myReactiveFormEvent,this.authService.getId(),this.id).subscribe();
//    console.log('Form submitted: ', this.myReactiveFormEvent.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
//    // TODO: do something useful with form
//  }

}
