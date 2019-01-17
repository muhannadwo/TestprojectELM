import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { Event } from '@angular/router/src/events';
import { Events } from 'src/app/event/event.model';
import { Comment } from 'src/app/comment/comment.model';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class commentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/comments/all/comments');
  }

  createComment<Comment>(form,uid,eid){
    return this.http.post<Comment>(
      `/api/comments/create/`+`${uid}`+`/`+`${eid}`, JSON.stringify(form.value), API_ARGS);
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
