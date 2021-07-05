import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SystemNotification, AlertType } from '../model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private subject = new Subject<SystemNotification>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    // enable subscribing to alerts observable
    onAlert(alertId?: string): Observable<SystemNotification> {
        return this.subject.asObservable().pipe(filter(x => x && x.alertId === alertId));
    }

    // convenience methods
    show(alertType: AlertType, message: string, alertId?: string) {
        const p = new SystemNotification({ message, type: alertType, alertId });
        this.notify(p);
    }

    // main alert method
    notify(alert: SystemNotification) {
        console.log(alert);
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }

    // clear alerts
    clear(alertId?: string) {
        this.subject.next(new SystemNotification({ alertId }));
    }
}