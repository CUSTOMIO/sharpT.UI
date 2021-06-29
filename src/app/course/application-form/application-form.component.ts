import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ApplicationFormService, SubjectService } from '../../core/data-service/index';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../../verify/verify.component'

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displaDefaultIndicatorType: false }
  }]
})
export class ApplicationFormComponent implements OnInit {

  @ViewChild('formDirective') private formDirective: NgForm;

  public appForm: FormGroup;
  public imageURL: string;
  public sendEmail: boolean = true;
  public submitButton: boolean = false;
  isLoading: boolean = true;
  public subject: object;

  get formArray(): FormArray | null { return this.appForm.get('formArray') as FormArray }

  constructor(private applicationFormService: ApplicationFormService,
    private formBuilder: FormBuilder,
    private subjectService: SubjectService,
    public dialog: MatDialog) {
    this.appForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          firstName: [null, [Validators.required, this.whitespaceValidator]],
          middleName: [null, [Validators.required, this.whitespaceValidator]],
          lastName: [null, [Validators.required, this.whitespaceValidator]],
        }),
        this.formBuilder.group({
          email: [null, [Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
          ]],
          studentPN: [null, [Validators.required, Validators.pattern("[0-9 ]{10}")]],
          parentPN: [null, [Validators.required, Validators.pattern("[0-9 ]{10}")]],
          address: [null, [Validators.required, this.whitespaceValidator]]
        }),
        this.formBuilder.group({
          standard: [null, [Validators.required, this.whitespaceValidator]],
          subjects: this.formBuilder.array([], Validators.required),
          school: [null, [Validators.required]],
          image: [null, [Validators.required]],
          imageBase64: [null]
        })
      ])
    });
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500);
  }

  public whitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  public getValue(index: number, controlName: string) {
    if (this.formArray && this.formArray.controls[index]) {
      if (this.formArray.controls[index].get(controlName).value) {
        if (controlName === 'image') {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageURL = reader.result as string;
          }
          reader.readAsDataURL(this.formArray.controls[2].get('image').value);
        } else {
          return this.formArray.controls[index].get(controlName).value
        }
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyComponent, {
      disableClose: true,
      width: '350px',
      data: {
        email: this.getValue(1, 'email'),
        sendEmail: this.sendEmail,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data.message == "Verified") {
        this.submitButton = true
      }
    });
    this.sendEmail = false
  }

  submitForm() {
    const fd = new FormData();

    fd.append('firstName', this.getValue(0, 'firstName'));
    fd.append('middleName', this.getValue(0, 'middleName'));
    fd.append('lastName', this.getValue(0, 'lastName'));
    fd.append('email', this.getValue(1, 'email'));
    fd.append('studentPN', this.getValue(1, 'studentPN'))
    fd.append('parentPN', this.getValue(1, 'parentPN'));
    fd.append('address', this.getValue(1, 'address'));
    fd.append('standard', this.getValue(2, 'standard'));
    fd.append('school', this.getValue(2, 'school'));
    fd.append('image', this.formArray.controls[2].get('image').value);

    this.applicationFormService.postApplicationForm(fd)
      .subscribe({
        next: data => {
          this.appForm.reset();
          this.formDirective.resetForm();
          console.log(data)
        },
        error: error => {
          console.log(error)
        }
      })
  }
}



