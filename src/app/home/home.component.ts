import { Component, OnInit } from '@angular/core';
import { CourseService, StandardService } from '../core/data-service';
import { NoticeService } from '../core/data-service/notice/notice.service';
import { Notice, Standard, Course } from '../core/model';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public standards: Standard[];
  public courses: Course[];
  constructor(private standardService: StandardService,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.standardService.getStandard()
      .subscribe(res => {
        this.standards = res;
        console.log(this.standards);

      });
    this.courseService.getCourses()
      .subscribe(res => {
        this.courses = res;
        console.log(this.courses);
      })
  }

}
