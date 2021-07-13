import { OnInit, Component, Input } from '@angular/core';


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
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
