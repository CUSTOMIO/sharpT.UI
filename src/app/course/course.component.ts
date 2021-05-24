import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/data-service';
import { Course } from '../core/model';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  // variables
  public course: Course[];

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe(res => {
      this.course = res;
      console.log(res);
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
  }

  ngOnInit(): void {}
}
