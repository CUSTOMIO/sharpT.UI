import { Component, OnInit } from '@angular/core';
import { StandardService, SubjectService } from '../../core/data-service';
import { Standard, Subject } from '../../core/model';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  public standard: Standard[] = [];
  public courseId = 2;
  public subject: Subject[] = [];
  public standardId: number;
  isLoading: boolean = true;

  constructor(private standardService: StandardService,
    private subjectService: SubjectService) { }


  ngOnInit(): void {
    this.standardService.getStandardBycourseId(this.courseId).subscribe(res => {
      this.standard = res;
    }, (error) => {
      console.log(error)
    });
    this.subjectService.getSubject().subscribe(res => {
      this.subject = res;
    }, (error) => {
      console.log(error)
    });
    setTimeout(() => this.isLoading = false, 500);
  }
}
