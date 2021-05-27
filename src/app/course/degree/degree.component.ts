import { Component, OnInit } from '@angular/core';
import { StandardService } from '../../core/data-service';
import { Standard } from '../../core/model';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit {

  public standard: Standard[] = [];
  public courseId = 3;
  public loading: boolean = true;

  constructor(private standardService: StandardService) { }


  ngOnInit(): void {
    this.standardService.getStandardBycourseId(this.courseId).subscribe(res => {
      this.standard = res;
      console.log(res);
      this.loading = false;

    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
  }

}
