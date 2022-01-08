import { OnInit, Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isLoading: boolean = true;

  constructor() {

  }
  ngOnInit() {
    this.isLoading = false;
  }
}
