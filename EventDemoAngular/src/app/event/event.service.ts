import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { Event } from '@angular/router/src/events';
import { Events } from 'src/app/event/event.model';
import { CommentComponent } from 'src/app/comment/comment.component';
import { Comment } from '@angular/compiler';


const API_URL = 'http://localhost:8080/api/events/';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('/api/events/all/events');
  }

  getAllorgEvents(id): Observable<any> {
    return this.http.get('/api/events/all/org/'+`${id}`);
  }

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('/api/events/approved');
  }

  searchEvents(name): Observable<Events[]> {
    return this.http.get<Events[]>('/api/events/name/'+`${name}`);
  }

  getEvent(id : number) :Observable<Events>{
    console.log(`/api/events/event/`+`${id}`);
    return this.http.get<Events>(`/api/events/event/`+`${id}`);
  }

  getActive(id : number) :Observable<Events>{
    console.log(`/api/events/active/`+`${id}`);
    return this.http.get<Events>(`/api/events/active/`+`${id}`);
  }

  getActivecounter() :Observable<any>{
    return this.http.get(`/api/events/countactive`);
  }

  getDeactive(id : number) :Observable<Events>{
    console.log(`/api/events/deactive/`+`${id}`);
    return this.http.get<Events>(`/api/events/deactive/`+`${id}`);
  }

  getDelete(id : number) :Observable<Events>{
    console.log(`/api/events/delete/`+`${id}`);
    return this.http.get<Events>(`/api/events/delete/`+`${id}`);
  }

  addEvent(form, id): Observable<Events> {
    return this.http.post<Events>(
      `/api/events/create/`+`${id}`, JSON.stringify(form.value), API_ARGS);
    }


      updateEvent(form, id: number): Observable<Events> {
        return this.http.put<Events>(
          `/api/events/update/` + `${id}`, JSON.stringify(form.value), API_ARGS)
    }

    bookTicket(uid:number, eid:number) {
      return this.http.get(`api/tickets/create/`+uid+`/`+eid);
    }

    
}
