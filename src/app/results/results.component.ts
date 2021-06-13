import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  isLoading: boolean = true;


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
  }, 500);
  }

}
