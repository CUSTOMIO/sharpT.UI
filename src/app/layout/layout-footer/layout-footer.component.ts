import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../core/data-service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {

  public courses: any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(res => {
        this.courses = res;
      })
  }

}
