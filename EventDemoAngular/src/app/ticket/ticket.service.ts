import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { Ticket } from 'src/app/ticket/ticket-model';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  getTicketCanceled(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('/api/tickets/all/delete');
  }

  getAllUserTickets(id) :Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`/api/tickets/all/user/`+`${id}`);
  }
  getAllEventTickets(id) :Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`/api/tickets/all/event/`+`${id}`);
  }


  getdelete(id) :Observable<Ticket>{
    return this.http.get<Ticket>(`/api/tickets/cancel/`+`${id}`);
  }

  makeAttend(id) :Observable<Ticket>{
    return this.http.get<Ticket>(`/api/tickets/attended/`+`${id}`);
  }

  getCountByUser(id): Observable<any> {
    return this.http.get(`/api/tickets/count/`+`${id}`);
  }

//   addUser(a): Observable<User> {
//     return this.http.post<User>(
//       `/api/users/create/3`, JSON.stringify(a.value), API_ARGS);
//     }

//     addOrg(a): Observable<User> {
//       return this.http.post<User>(
//         `/api/users/create/2`, JSON.stringify(a.value), API_ARGS);
//       }

//       updateUser(form, id: number): Observable<User> {
//         return this.http.put<User>(
//           `/api/users/update/`+`${id}`,
//             JSON.stringify(form.value),
//             API_ARGS
//         )
//     }
}
