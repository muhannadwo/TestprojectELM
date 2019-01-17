import {Component, OnInit} from '@angular/core';
import { retry } from 'rxjs/internal/operators/retry';
import { AuthenticationService } from 'src/app/authintication/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  styleUrls : ['./main.component.css'],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  admin;
  user;
  org;

  // cu1 = JSON.parse(localStorage.getItem('currentUser'));


  constructor(private authService : AuthenticationService, private route : Router) {}


  ngOnInit() {

    
    // console.log(this.authService.getrole());
    // this.getRole();
    this.isNull();

  
   }



   isNull(){
    if( this.authService.getrole() == null){
      console.log("No User Logged In!");
     return this.route.navigate(['/login']);
   }
   }

  //  getRole(){
  //    let admin = false;
  //    let user = false;
  //    let org = false;

     
  //    if (this.authService.getrole() === 'ROLE_ADMIN') {
  //     console.log(this.authService.getrole());

  //     return  true;

  //   }
  //   else if (this.authService.getrole() === 'ROLE_USER') {
  //     console.log(this.authService.getrole());

  //     return true;
  //   }
  //   else if (this.authService.getrole() === 'ROLE_ORG') {
  //     console.log(this.authService.getrole());

  //     return true;
  //   }
  //   this.admin = admin;
  //   this.user = user;
  //   this.org = org;
  //  }

  isAll(){
    // if(this.authService.getrole() === 'ROLE_ORG' && this.authService.getrole() === 'ROLE_ADMIN' &&
    //  this.authService.getrole() === 'ROLE_USER'){
    //   // console.log(this.authService.getrole());
    // return true;

    if( JSON.parse(localStorage.getItem('currentUser')) != null){
      return false;
    }
    return true;
  }

  isNotAll(){
    if( JSON.parse(localStorage.getItem('currentUser')) == null){
      return false;
    }return true;
  }

  isOrg(){
    if(this.authService.getrole() === 'ROLE_ORG'){
      // console.log(this.authService.getrole());
    return true;
    }
  }
    isAdmin() {
      // console.log(this.authService.getrole());
      if(this.authService.getrole() === 'ROLE_ADMIN'){
         console.log(this.authService.getrole());
      return true;
      }
    }
      isUser(){
        if(this.authService.getrole() === 'ROLE_USER'){
        return true;
        }
      }
    // if(this.role === JSON.parse(localStorage.getItem('Role')) ){
    // return true }
    // // role === localStorage....
    // else{return false;}

    navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(){
    this.authService.logout();
    this.route.navigate(["/login"]);
  }

  }

