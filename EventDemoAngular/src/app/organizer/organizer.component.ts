import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

// function passwordMatcher(control: AbstractControl) {
//   return control.get('password').value === control.get('confirm').value
//     ? null : {'nomatch': true};
// }

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  myReactiveForm1: FormGroup;
    user$: Observable<User>;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.myReactiveForm1 = this.formBuilder.group({
      useremail: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z]/)])],
      // confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      usergender: ``,
      city: ``,
      firstname: ``,
      // role: ``,
      lastname : ``,
      phonenumber: ``,
      userdate: ''
    // }, {validator: passwordMatcher}); // pass in the validator function
  });
  }

  onSubmitOrg() {
    alert(JSON.stringify(this.myReactiveForm1.value));
    this.userService.addOrg(this.myReactiveForm1).subscribe();
     console.log('Form submitted: ', this.myReactiveForm1.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
     // TODO: do something useful with form
   }

}
