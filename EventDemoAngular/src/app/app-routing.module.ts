import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {OrganizerComponent} from './organizer/organizer.component'
import { UserDetailsComponent } from 'src/app/user/user-details/user-details.component';
import { EventComponent } from 'src/app/event/event.component';
import { EventDetailsComponent } from 'src/app/event/event-details/event-details.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthGuard } from 'src/app/authintication/auth.guard';
import { EventcreationComponent } from 'src/app/event/eventcreation/eventcreation.component';
import { MainComponent } from 'src/app/MainComponent';
import { TicketComponent } from 'src/app/ticket/ticket.component';
import { UserPageComponent } from 'src/app/user-page/user-page.component';
import { UserupdateComponent } from 'src/app/userupdate/userupdate.component';
import { EventupdateComponent } from 'src/app/eventupdate/eventupdate.component';
import { CommentComponent } from 'src/app/comment/comment.component';
import { UserpanelComponent } from 'src/app/userpanel/userpanel.component';
import { OrgpanelComponent } from 'src/app/orgpanel/orgpanel.component';
import {FeedbackComponent} from './feedback/feedback.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserComponent, canActivate: [AuthGuard], data: { expectedRole : ['ROLE_ADMIN'] }},
  {path: 'user/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'orgregister', component: OrganizerComponent},
  {path: 'events', component: EventComponent},
  {path: 'addevents', component: EventcreationComponent, canActivate: [AuthGuard], data: { expectedRole : ['ROLE_ORG'] }},
  // , AuthGuard, data:{expectedRole:'ROLE_ORG'}
  {path: 'event/:id', component : EventDetailsComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'tickets', component : TicketComponent, canActivate: [AuthGuard]},
  {path:'dashboard', component: UserPageComponent, canActivate: [AuthGuard], data: { expectedRole : ['ROLE_ADMIN'] }},
  {path:'userupdate', component: UserupdateComponent, canActivate: [AuthGuard]},
  {path:'eventupdate/:id', component: EventupdateComponent, canActivate: [AuthGuard], data: { expectedRole : ['ROLE_ORG'] }},
  {path:'comments', component: CommentComponent, canActivate: [AuthGuard]},
  {path:'userpanel', component: UserpanelComponent, canActivate: [AuthGuard], data: { expectedRole : ['ROLE_USER'] }},
  {path:'orgpanel', component: OrgpanelComponent, canActivate: [AuthGuard], data: { expectedRole : ['ROLE_ORG'] }},
  {path:'feedback', component: FeedbackComponent, canActivate: [AuthGuard] }
  // {path: 'detail/:id', component: CityDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

