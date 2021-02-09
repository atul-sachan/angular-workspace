import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventTrackerService } from '../../services/event-tracker.service';
import { IEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-tracker-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(
    private eventTrackerService: EventTrackerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.event = this.eventTrackerService.getEvent(+this.route.snapshot.params['id']);
  }

}
