import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = false;
  }

}
