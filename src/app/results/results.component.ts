import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ExaminationService, ResultService, StandardService } from '../core/data-service';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../verify/verify.component';
import { environment } from '../../environments/environment';
import { NotificationService } from '../core/system-service/notification.service';
import { AlertType } from '../core/model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @ViewChild('formDirective') private formDirective: NgForm;

  isLoading = true;
  isVerified = false;
  isSubmitting = false;
  resultForm: FormGroup;
  examination: object;
  standard: object;
  testVariable = false;
  result: any;
  // result: any = {"username":"Isa Sunasra","userImageUrl":"/assets/images/2022-01-29T05-1.jpg  ","data":[{"marksObtained":1,"subjectId":1,"subjectName":"English","outOf":100},{"marksObtained":1,"subjectId":2,"subjectName":"Marathi","outOf":100},{"marksObtained":1,"subjectId":3,"subjectName":"Hindi","outOf":100},{"marksObtained":1,"subjectId":5,"subjectName":"Science","outOf":100},{"marksObtained":54,"subjectId":4,"subjectName":"Maths","outOf":100},{"marksObtained":21,"subjectId":6,"subjectName":"Social Science","outOf":99}]};
  apiEndpoint: any = environment.api_endpoint;
  public sendEmail = true;
  displayedColumns: string[] = ['subject', 'marksObtained', 'outOf'];

  constructor(private fb: FormBuilder,
              private examinationService: ExaminationService,
              private resultService: ResultService,
              public dialog: MatDialog,
              private notificationService: NotificationService,
              private standardService: StandardService) {
    this.resultForm = fb.group({
      examinationId: [null, [Validators.required]],
      email: [null,
        [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ],
      standardId: ['', [Validators.required]],
      otp: [''],
    });
  }

  ngOnInit(): void {
    this.examinationService.getExamination()
      .subscribe(res => {
        this.examination = res;
      });

    this.standardService.getStandard()
      .subscribe(res => {
        this.standard = res;
        this.isLoading = false;
      });
    this.isLoading = false;
  }

  openDialog(): void {
    if (!this.resultForm.valid) { return; }

    const dialogRef = this.dialog.open(VerifyComponent, {
      disableClose: true,
      width: '400px',
      data: {
        email: this.resultForm.value.email,
        sendEmail: this.sendEmail,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data.message) {
        this.resultForm.get('otp').setValue(+result.data.otp);
        this.isVerified = true;
      }
    });
    this.sendEmail = false;
  }

  getPercentage(): string {
    let totalMarks = 0;
    let obtainedMarks = 0;
    if (this.result.data) {
      this.result.data.sort((a, b) => {
        return b.marksObtained - a.marksObtained;
      });
      let subjectData = this.result.data;
      if (this.result.bestOf !== null) {
        subjectData =  this.result.data.slice(0, this.result.bestOf);
      }
      for (const r of subjectData) {
        totalMarks += r.marksObtained;
        obtainedMarks += r.outOf;
      }
    }
    return `${(totalMarks / obtainedMarks * 100).toFixed(2)}%`;
  }

  onSubmit(): void {
    if (!this.resultForm.valid) { return; }

    this.isSubmitting = true;
    this.resultService.postResult(this.resultForm.value).subscribe(res => {
      this.result = res;

      // if(this.result.bestOf != null){
      //   this.result.data = this.result.data.slice(0, this.result.bestOf);
      // }
      this.isSubmitting = false;
    }, (error) => {
      if (error.status === 401) {
        this.isSubmitting = false;
        this.result = error.error;
        this.notificationService.show(AlertType.Warning, error.error.message);
        return;
      }
      this.notificationService.show(AlertType.Error, 'We are afraid, something is not right with our server 😨😨😨.');
    });
  }
}
