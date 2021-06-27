import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EventTrackerService } from './event-tracker.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {
    constructor(
        private eventTrackerService: EventTrackerService,
        private router: Router
    ) { }

    // tslint:disable-next-line: typedef
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const eventExist = !!this.eventTrackerService.getEvent(+route.params['id']);
        if (!eventExist) {
            this.router.navigate(['/app', '404']);
        }
        return true;
    }
}
