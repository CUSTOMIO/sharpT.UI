import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-system-notification',
  templateUrl: 'system-notification.component.html',
})
export class SystemNotificationComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar) { }

  public getCssClass() {
    switch (this.data.type) {
      case 'success': {
        return 'alert-primary';
        break;
      }
      case 'error': {
        return 'alert-warning';
        break;
      }
    }
  }
}
