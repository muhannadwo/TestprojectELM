import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { Event } from '@angular/router/src/events';
import { Events } from 'src/app/event/event.model';
import {Feedback} from './feedback.model';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class feedbackService {

  constructor(private http: HttpClient) {
  }

  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>('/api/feedback/all/feedback');
  }

  createFeed(form,tid){
    return this.http.post<any>(
      `/api/feedback/create/`+`${tid}`, JSON.stringify(form.value), API_ARGS);
  }

  getComment(eid): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/comments/all/event/'+`${eid}`);
  }

  getUserComments(uid): Observable<any> {
    return this.http.get('/api/comments/count/'+`${uid}`);
  }

  getUserComment(uid): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/comments/all/user/'+`${uid}`);
  }




}
