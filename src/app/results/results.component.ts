import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ExaminationService, ResultService } from '../core/data-service';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../verify/verify.component'
import { environment } from '../../environments/environment'
import { NotificationService } from '../core/system-service/notification.service';
import { AlertType } from '../core/model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @ViewChild('formDirective') private formDirective: NgForm;

  isLoading: boolean = true;
  resultForm: FormGroup;
  examination: object;
  result: any;
  apiEndpoint: any = environment.api_endpoint
  public sendEmail: boolean = true;
  displayedColumns: string[] = ['subject', 'marksObtained', 'outOf'];

  constructor(private fb: FormBuilder,
    private examinationService: ExaminationService,
    private resultService: ResultService,
    public dialog: MatDialog,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.examinationService.getExamination()
      .subscribe(res => {
        this.examination = res;
      }, (error) => {
        console.log(`THis is the error: ${error}`)
      });
    this.resultForm = this.fb.group({
      examination: [null,
        [Validators.required]
      ],
      email: [null,
        [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ]
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyComponent, {
      disableClose: true,
      width: '350px',
      data: {
        email: this.resultForm.value.email,
        sendEmail: this.sendEmail,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data.message == "Verified") {
        this.onSubmit();
      }
    });
    this.sendEmail = false
  }

  onSubmit() {
    this.resultService.postResult(this.resultForm.value).subscribe(res => {
      this.result = res;
      this.resultForm.reset();
      this.formDirective.resetForm();
    }, (error) => {
      this.notificationService.show(AlertType.Error, error.message);
    });
  }

  getPercentage() {
    let totalMarks: number = 0;
    let obtainedMarks: number = 0;
    if (this.result.data) {
      for (let r of this.result.data) {
        totalMarks += r.marksObtained;
        obtainedMarks += r.outOf;
      }
    }
    return `${(totalMarks / obtainedMarks * 100).toFixed(2)}%`;
  }

}
