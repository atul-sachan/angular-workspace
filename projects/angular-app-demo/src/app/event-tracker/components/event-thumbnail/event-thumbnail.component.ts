import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-tracker-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass(): any{
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }

}
