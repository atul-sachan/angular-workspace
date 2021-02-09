import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventTrackerService } from './event-tracker.service';
import { Observable } from 'rxjs';
import { IEvent } from '../models/event.model';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventTrackerService) {

    }

    resolve(): Observable<IEvent[]> {
        return this.eventService.getEvents().pipe(map(events => events));
    }
}
