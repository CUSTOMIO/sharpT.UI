import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormArray } from '@angular/forms';

@Component({
  selector: '[formGroup] app-review-details',
  templateUrl: './review-details.component.html'
})
export class ElementsReviewDetails implements OnInit {

  public appForm: FormGroup;
  public imageURL: string;

  get formArray(): FormArray | null { return this.appForm.get('formArray') as FormArray }

  constructor(
    private controlContainer: ControlContainer
  ) { }
  
  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
  }

  getValue(index: number, controlName: string) {
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
}
