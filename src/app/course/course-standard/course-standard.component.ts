import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandardService, SubjectService } from '../../core/data-service';
import { Standard, StandardRate, Subject, SubjectCount } from '../../core/model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-degree',
  templateUrl: './course-standard.component.html',
  styleUrls: ['./course-standard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseStandardComponent implements OnInit {

  public standard: Standard[] = [];
  public subject: Subject[] = [];
  public standardRate: StandardRate[];
  public standardId: number;
  public courseId: number;
  public course: any;
  public imageUrl: string;
  public isLoading = true;
  public subjectCount: SubjectCount;
  public apiEndpoint: any = environment.api_endpoint;


  constructor(private standardService: StandardService,
              private route: ActivatedRoute,
              private router: Router,
              private subjectService: SubjectService) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
    // this.course = this.router.getCurrentNavigation().extras.state;

  }


  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    // this.course = history.state;
    // if (this.course) {
    //  this.imageUrl = this.course.name.toLowerCase();
    // }

    this.standardService.getStandardBycourseId(this.courseId).subscribe(res => {
      console.log(res);
      this.standard = res;
    }, (error) => {
      console.log(error);
    });
    this.subjectService.getSubject().subscribe(res => {
      this.subject = res;
      this.isLoading = false;
    }, (error) => {
      console.log(error);
    });
    this.subjectService.getSubjectCount()
      .subscribe((res: SubjectCount) => {
        this.subjectCount = res;
    });
    this.standardService.getStandardRate()
    .subscribe((res: StandardRate[]) => {
      this.standardRate = res;
    });
  }

  getRateByStandardId(standardId: number) {
    if (this.standardRate) {
      return this.standardRate.filter(x => x.standardId === standardId);
    }
    return null;
  }
}
