<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/data-service';
import { Course } from '../core/model';
=======
import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { CourseService, StandardService } from '../core/data-service';
import { Course, Standard } from '../core/model';
>>>>>>> develop


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  // variables
  public course: Course[];
<<<<<<< HEAD

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe(res => {
      this.course = res;
      console.log(res);
=======
  public standard: Standard[];

  constructor(private courseService: CourseService,
    private standardService: StandardService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(res => {
      this.course = res;
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
    this.standardService.getStandard().subscribe( res => {
      this.standard = res;

>>>>>>> develop
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
  }

<<<<<<< HEAD
  ngOnInit(): void {}
}
=======

};


>>>>>>> develop
