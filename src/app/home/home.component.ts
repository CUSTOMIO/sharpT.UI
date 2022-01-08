import { Component, OnInit } from '@angular/core';
import { CourseService, StandardService } from '../core/data-service';
import { Standard, Course } from '../core/model';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public isLoading: boolean = true;
  public standards: Standard[];
  public courses: Course[];

  constructor(private standardService: StandardService,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.standardService.getStandard()
      .subscribe(res => {
        this.standards = res;
      });
    this.courseService.getCourses()
      .subscribe(res => {
        this.courses = res;
        this.isLoading = false;
      })
  }
}
