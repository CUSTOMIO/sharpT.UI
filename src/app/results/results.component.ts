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
  resultForm: FormGroup;
  examination: object;
  standard: object;
  result: any;
  apiEndpoint: any = environment.api_endpoint;
  public sendEmail = true;
  displayedColumns: string[] = ['subject', 'marksObtained', 'outOf'];

  constructor(private fb: FormBuilder,
              private examinationService: ExaminationService,
              private resultService: ResultService,
              public dialog: MatDialog,
              private notificationService: NotificationService,
              private standardService: StandardService) { }

  ngOnInit(): void {
    this.examinationService.getExamination()
      .subscribe(res => {
        this.examination = res;
      });

    this.standardService.getStandard()
    .subscribe(res => {
      this.standard = res;
    });
    this.resultForm = this.fb.group({
      examinationId: [null, [Validators.required]],
      email: [null,
        [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ],
      standardId: ['', [Validators.required]],
      otp: [''],
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  openDialog(): void {
    this.onSubmit();
    const dialogRef = this.dialog.open(VerifyComponent, {
      disableClose: true,
      width: '350px',
      data: {
        email: this.resultForm.value.email,
        sendEmail: this.sendEmail,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resultForm.get('otp').setValue(+result.data.otp);
      // if (result.data.message == "Verified") {
      //   this.onSubmit();
      // }
    });
    this.sendEmail = false;
  }

  onSubmit(): void {
    this.resultService.postResult(this.resultForm.value).subscribe(res => {
      this.result = res;
      this.resultForm.reset();
      this.formDirective.resetForm();
    }, (error) => {
      this.notificationService.show(AlertType.Error, error.message);
    });
  }

  getPercentage() {
    let totalMarks = 0;
    let obtainedMarks = 0;
    if (this.result.data) {
      for (const r of this.result.data) {
        totalMarks += r.marksObtained;
        obtainedMarks += r.outOf;
      }
    }
    return `${(totalMarks / obtainedMarks * 100).toFixed(2)}%`;
  }

}
