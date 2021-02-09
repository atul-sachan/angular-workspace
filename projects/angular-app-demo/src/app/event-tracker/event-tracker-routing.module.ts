import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventRouteActivatorGuard } from './services/event-route-activator.guard';
import { EventListResolver } from './services/event-list-resolver.service';


const routes: Routes = [
    { path: 'new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: ':id', component: EventDetailsComponent, canActivate: [EventRouteActivatorGuard] },
    { path: '', component: EventListComponent, resolve: {events: EventListResolver} },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventTrackerRoutingModule { }
