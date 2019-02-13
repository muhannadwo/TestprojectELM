import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';


const API_URL = 'http://localhost:8080/api/users/';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users/all/users');
  }

  getUser(id) :Observable<User>{
    return this.http.get<User>(`/api/users/user/`+`${id}`);
  }

  getdelete(id) :Observable<User>{
    return this.http.get<User>(`/api/users/delete/`+`${id}`);
  }

  addUser(a): Observable<User> {
    return this.http.post<User>(
      `/api/users/create/3`, JSON.stringify(a.value), API_ARGS);
    }

    addOrg(a): Observable<User> {
      return this.http.post<User>(
        `/api/users/create/2`, JSON.stringify(a.value), API_ARGS);
      }

      updateUser(form, id): Observable<User> {
        return this.http.put<User>(
          `/api/users/update/`+`${id}`,
            JSON.stringify(form.value),
            API_ARGS
        )
    }
}
