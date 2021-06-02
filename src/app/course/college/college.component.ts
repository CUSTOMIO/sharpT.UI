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
  public loading: boolean = true;

  constructor(private standardService: StandardService,
    private subjectService: SubjectService) { }
 

  ngOnInit(): void {
    this.standardService.getStandardBycourseId(this.courseId).subscribe(res => {
      this.standard = res;
      //console.log(res);
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