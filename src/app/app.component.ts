import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AlertType, SystemNotification } from './core/model';
import { NotificationService } from './core/system-service/notification.service';
import { SystemNotificationComponent } from './shared/component/notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'sharp';
  public notifications: SystemNotification[] = [];
  public notificationSubscription: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationSubscription = this.notificationService.onAlert()
      .subscribe(alert => {
        if (!alert.message) {
          // clear alerts when an empty alert is received
          this.notifications = [];
          return;
        }

        // add alert to array
        this.notifications.push(alert);

        this.snackBar.openFromComponent(SystemNotificationComponent, {
          duration: 10000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          data: {
            type: AlertType[alert.type],
            message: alert.message,
          }
        });
      });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.notificationSubscription.unsubscribe();
  }
}
