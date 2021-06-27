import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventTrackerService } from '../../services/event-tracker.service';

@Component({
  selector: 'app-event-tracker-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  newEvent;
  public isDirty = true;
  constructor(private router: Router, private eventService: EventTrackerService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues): void {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

}
