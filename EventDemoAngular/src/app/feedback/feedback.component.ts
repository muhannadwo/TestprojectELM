import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authintication/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {feedbackService} from './feedbackService';
import {Subscription} from 'rxjs';
import {Feedback} from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private authService : AuthenticationService, private route : ActivatedRoute, private feedbackService : feedbackService) { }


  id : number;
  sub : Subscription;
  feedback$: Feedback[];

  ngOnInit() {

    this.getFeeds();
  }

  getFeeds(){
    this.feedbackService.getFeedback().subscribe(
      feedbackData => {
        this.feedback$ = feedbackData;
      },
      err => console.log(err),
      () => console.log('Loading feedback complete...')
    );
  }

}
