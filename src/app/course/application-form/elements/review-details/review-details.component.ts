import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormArray } from '@angular/forms';

@Component({
  selector: '[formGroup] app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ElementsReviewDetails implements OnInit {

  public appForm: FormGroup;

  get formArray(): FormArray | null { return this.appForm.get('formArray') as FormArray }

  constructor(
    private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
  }

  getValue(index: number, controlName: string) {
    return this.formArray.controls[index].get(controlName).value
  }
  getImage() {
   return this.appForm.value.formArray[2].imageBase64;
  }
}
