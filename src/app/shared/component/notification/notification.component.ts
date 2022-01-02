import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-system-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class SystemNotificationComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar) { }

  public getCssClass() {
    switch (this.data.type) {
      case 'success': {
        return 'alert-success';
      }
      case 'error': {
        return 'alert-warning';
      }
      default: {
        return 'alert-warning';
      }
    }
  }
}
