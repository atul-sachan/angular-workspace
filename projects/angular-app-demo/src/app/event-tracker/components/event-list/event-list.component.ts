import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventTrackerService } from '../../services/event-tracker.service';
import { IEvent } from '../../models/event.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-tracker-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: IEvent[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private eventTrackerService: EventTrackerService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.eventTrackerService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: string, id: number): void {
    this.router.navigate(['/events', +id]);
    this.toastr.success(name);
  }
}
