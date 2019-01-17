import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/user/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  myUpdateForm : FormGroup;
  id : number;
  user$: User;
  sub : Subscription;

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute, private userservice: UserService) { }

  ngOnInit() {

  
      this.sub = this.route.params.subscribe((v : any)=>{
      this.id = v.id;
      // this.user$ = this.userservice.getUser(this.id)
    });
  

    this.userservice.getUser(this.id).subscribe((value =>{
      this.user$ = value;
    }));


  }

  deleteUser(){
    this.userservice.getdelete(this.id).subscribe();
    alert("User Deleted!");
  }

  // onSubmit() {
  //   alert(JSON.stringify(this.myUpdateForm.value));
  //   this.userservice.updateUser(this.myUpdateForm, this.id).subscribe();
  //    console.log('Form submitted: ', this.myUpdateForm.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
  //    // TODO: do something useful with form
  //  }






}
