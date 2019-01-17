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
import { AuthenticationService } from 'src/app/authintication/authentication.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  myUpdateForm : FormGroup;
  id : number;
  user$: User;
  sub : Subscription;

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute, private userservice: UserService, private authService : AuthenticationService) { }

  ngOnInit() {

    this.myUpdateForm = this.formBuilder.group({
      useremail: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      usergender: ``,
      city: ``,
      firstname: ``,
      lastname : ``,
      phonenumber: ``,
      userdate: ''
    //  }, {validator: passwordMatcher}); // pass in the validator function
  });
  
      this.sub = this.route.params.subscribe((v : any)=>{
      this.id = v.id;
      // this.user$ = this.userservice.getUser(this.id)
    });
  

    this.userservice.getUser(this.authService.getId()).subscribe((value =>{
      this.user$ = value;
      this.myUpdateForm.patchValue(this.user$ as any)
    }));


  }

  deleteUser(){
    this.userservice.getdelete(this.authService.getId()).subscribe();
    alert("User Deleted!");
  }

  onSubmit() {
    alert(JSON.stringify(this.myUpdateForm.value));
    this.userservice.updateUser(this.myUpdateForm, this.authService.getId()).subscribe();
     console.log('Form submitted: ', this.myUpdateForm.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
     // TODO: do something useful with form
   }






}
