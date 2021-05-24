import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Form, Validators, FormControl } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displaDefaultIndicatorType: false}
  }]
})
export class ApplicationFormComponent implements OnInit {
  public appForm: FormGroup;

  get formArray(): FormArray | null { return this.appForm.get('formArray') as FormArray }

  constructor(
    private formBuilder: FormBuilder
  ) {
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
          image: [null, [Validators.required]]
        })
      ])
    });
  }

  ngOnInit(): void {
  }

  public whitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
