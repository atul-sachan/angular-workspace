import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventTrackerService } from '../../services/event-tracker.service';
import { IEvent } from '../../models/event.model';
import { ISession } from '../../models/session.model';

@Component({
  selector: 'app-event-tracker-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;

  constructor(
    private eventTrackerService: EventTrackerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.event = this.eventTrackerService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventTrackerService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }

}
