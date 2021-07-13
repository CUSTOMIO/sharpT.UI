import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: '[formGroup] app-contact-details',
<<<<<<< HEAD
  templateUrl: './contact-details.component.html'
=======
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
>>>>>>> develop
})
export class ElementsContactDetails implements OnInit {

  public appForm: FormGroup;

<<<<<<< HEAD
  constructor(
    private controlContainer: ControlContainer
  ) { }
=======
  constructor(private controlContainer: ControlContainer) { }
>>>>>>> develop

  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.appForm.controls[controlName].hasError(errorName);
  }
<<<<<<< HEAD
=======
  
>>>>>>> develop
}
