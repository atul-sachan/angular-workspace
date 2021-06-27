import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTrackerComponent } from './event-tracker.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventTrackerRoutingModule } from './event-tracker-routing.module';
import { EventTrackerService } from './services/event-tracker.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventRouteActivatorGuard } from './services/event-route-activator.guard';
import { EventListResolver } from './services/event-list-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { SessionListComponent } from './components/session-list/session-list.component';



@NgModule({
  declarations: [
    EventTrackerComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    EventTrackerRoutingModule
  ],
  providers: [
    EventTrackerService,
    EventRouteActivatorGuard,
    ToastrService,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    }
  ]
})
export class EventTrackerModule { }

export function checkDirtyState(component: EventCreateComponent): any {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
