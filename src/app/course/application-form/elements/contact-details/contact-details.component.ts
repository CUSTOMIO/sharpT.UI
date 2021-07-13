import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: '[formGroup] app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ElementsContactDetails implements OnInit {

  public appForm: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.appForm.controls[controlName].hasError(errorName);
  }
  
}
