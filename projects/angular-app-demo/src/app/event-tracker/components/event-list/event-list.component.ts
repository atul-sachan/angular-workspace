import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventTrackerService } from '../../services/event-tracker.service';
import { IEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-tracker-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private eventTrackerService: EventTrackerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.eventTrackerService.getEvents().subscribe(events => this.events = events);
    // this.events = this.eventTrackerService.getEvents();
  }

  handleThumbnailClick(name: string): void {
    this.toastr.info(name);
  }
}
