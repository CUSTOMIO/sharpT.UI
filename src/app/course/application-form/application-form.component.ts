import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup,  Validators, FormControl } from '@angular/forms';
import { ApplicationFormService } from '../../core/data-service/index';
import { ApplicationForm } from '../../core/model/index';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from './elements/verify/verify.component'

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displaDefaultIndicatorType: false }
  }]
})
export class ApplicationFormComponent implements OnInit {
  public appForm: FormGroup;
  public imageURL: string;
  public loadComponent: boolean = false;
  public sendEmail: boolean = true;
  public submitButton: boolean = false;
  isLoading: boolean = true;
  
  get formArray(): FormArray | null { return this.appForm.get('formArray') as FormArray }

  constructor(private applicationFormService: ApplicationFormService,
    private formBuilder: FormBuilder,
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
          school: [null, [Validators.required, this.whitespaceValidator]],
          image: [null, [Validators.required]],
          imageBase64: [null]
        })
      ])
    });
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading= false, 500);
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

  loadMyChildComponent() {
    this.loadComponent = true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyComponent,  {
      disableClose: true,
      width: '350px',
      data: {
        email: this.getValue(1, 'email'),
        sendEmail: this.sendEmail,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.data.message == "Verified"){
        this.submitButton = true
      }
    });
    this.sendEmail = false
  }

  submitForm() {
    const submitAppForm = new ApplicationForm();
    const fd = new FormData();

    //fd['firstName'] = this.getValue(0, 'firstName'); 
    //fd['middleName'] = this.getValue(0, 'middleName'); 
    //fd['lastName'] = this.getValue(0, 'lastName'); 
    //fd['email'] = this.getValue(1, 'email'); 
    //fd['studentPN'] = this.getValue(1, 'studentPN'); 
    //fd['parentPN'] = this.getValue(1, 'parentPN'); 
    //fd['address'] = this.getValue(1, 'address'); 
    //fd['standard'] = this.getValue(2, 'standard'); 
    //fd['school'] = this.getValue(2, 'school');
    //fd['image'] = this.formArray.controls[2].get('image').value 
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

    //submitAppForm.firstName = this.getValue(0, 'firstName');
    //submitAppForm.middleName = this.getValue(0, 'middleName');
    //submitAppForm.lastName = this.getValue(0, 'lastName');
    //submitAppForm.email = this.getValue(1, 'email');
    //submitAppForm.studentPN = this.getValue(1, 'studentPN');
    //submitAppForm.parentPN = this.getValue(1, 'parentPN');
    //submitAppForm.address = this.getValue(1, 'address');
    //submitAppForm.standard = this.getValue(2, 'standard');
    //submitAppForm.school = this.getValue(2, 'school');
    //submitAppForm.image = this.formArray.controls[2].get('image').value;

    //fd.forEach((value, key) => {
    //  console.log("key %s: value %s", key, value);
    //})

    //console.log(submitAppForm)
    //const reader = new FileReader();
    ////reader.onload = () => {
    ////  this.imageURL = reader.result as string;
    ////}
    //console.log(`${reader.readAsDataURL(this.getValue(2, 'image'))}`)

    //console.log(this.formArray.controls[2].get('image').value);
    //this.formArray.controls[2].get('image').value

    this.applicationFormService.postApplicationForm(fd)
      .subscribe((result) => {
        console.log(result) 
      }, (error) => {
          console.log(error)
      })
  }
}



