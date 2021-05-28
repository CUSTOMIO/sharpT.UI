import { Component, OnInit } from '@angular/core';
import { StandardService, SubjectService } from '../../core/data-service';
import { Standard, Subject } from '../../core/model';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit {

  public standard: Standard[] = [];
  public courseId = 3;
  public subject: Subject[] = [];
  public standardId: number;
  public loading: boolean = true;

  constructor(private standardService: StandardService,
    private subjectService: SubjectService  ) { }


  ngOnInit(): void {
    this.standardService.getStandardBycourseId(this.courseId).subscribe(res => {
      this.standard = res;
      console.log(this.standard)
      this.loading = false;
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
    this.subjectService.getSubject().subscribe(res => {
      this.subject = res;
      console.log(res);
      this.loading = false;
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    }); 

  }

}
