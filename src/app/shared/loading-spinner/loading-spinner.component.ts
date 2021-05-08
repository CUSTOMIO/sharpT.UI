import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eberl-loading-spinner',
  templateUrl: 'loading-spinner.component.html',
  styleUrls: [
    'loading-spinner.component.scss'
  ]
})
export class LoadingSpinnerComponent {

  @Input() message: string;

  constructor() {
    this.message = 'Loading...';
  }

}
