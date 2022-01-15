import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StandardService, SubjectService } from '../../core/data-service';
import { Course, Standard, Subject, SubjectCount } from '../../core/model';

@Component({
  selector: 'app-degree',
  templateUrl: './course-standard.component.html',
  styleUrls: ['./course-standard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseStandardComponent implements OnInit {

  public standard: Standard[] = [];
  public subject: Subject[] = [];
  public standardId: number;
  public courseId: number;
  public course: any;
  public imageUrl: string;
  public isLoading: boolean = true;
  public subjectCount: SubjectCount;


  constructor(private standardService: StandardService,
              private route: ActivatedRoute,
              private router: Router,
              private subjectService: SubjectService) {
    console.log('constructed');
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
    //this.course = this.router.getCurrentNavigation().extras.state;

  }


  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    //this.course = history.state;
    //if (this.course) {
    //  this.imageUrl = this.course.name.toLowerCase();
    //}

    this.standardService.getStandardBycourseId(this.courseId).subscribe(res => {
      this.standard = res;
      console.log(this.standard);
    }, (error) => {
      console.log(error)
    });
    this.subjectService.getSubject().subscribe(res => {
      this.subject = res;
      this.isLoading = false
    }, (error) => {
      console.log(error)
    });
    this.subjectService.getSubjectCount()
      .subscribe((res: SubjectCount) => {
        console.log(res);
        this.subjectCount = res;
     })
  }
}
