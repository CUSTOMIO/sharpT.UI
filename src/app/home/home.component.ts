import { Component, OnInit } from '@angular/core';
import { StandardService, SubjectService } from '../core/data-service';
import { Standard, Course, SubjectCount } from '../core/model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public isLoading: boolean = true;
  public standards: Standard[];
  public courses: Course[];
  public subjectCount: SubjectCount;
  public apiEndpoint: any = environment.api_endpoint;

  constructor(private standardService: StandardService,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.standardService.getStandard()
      .subscribe(res => {
console.log(res)
        this.standards = res;
      });
    this.subjectService.getSubjectCount()
      .subscribe((res: SubjectCount) => {
        this.subjectCount = res;
      })
        this.isLoading = false;
  }
}
