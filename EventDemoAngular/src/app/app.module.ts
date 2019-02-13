import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './MainComponent';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrganizerComponent } from './organizer/organizer.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { LoginComponent } from 'src/app/login/login.component';
import { EventcreationComponent } from 'src/app/event/eventcreation/eventcreation.component';
import { TicketComponent } from 'src/app/ticket/ticket.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { CommentComponent } from './comment/comment.component';
import { CommentcreationComponent } from './commentcreation/commentcreation.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from 'src/app/authintication/basic-auth.interceptor';
import { ErrorInterceptor } from 'src/app/authintication/error.interceptor';
import { OrgpanelComponent } from './orgpanel/orgpanel.component';
import { UserpanelComponent } from 'src/app/userpanel/userpanel.component';
import { EventTicketComponent } from './event-ticket/event-ticket.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    UserComponent,
    RegisterComponent,
    OrganizerComponent,
    UserDetailsComponent,
    EventComponent,
    EventDetailsComponent,
    LoginComponent,
    EventcreationComponent,
    TicketComponent,
    UserPageComponent,
    UserupdateComponent,
    EventupdateComponent,
    CommentComponent,
    CommentcreationComponent,
    UserpanelComponent,
    OrgpanelComponent,
    EventTicketComponent,
    FeedbackComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
