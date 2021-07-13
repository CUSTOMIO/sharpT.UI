import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormArray } from '@angular/forms';

@Component({
  selector: '[formGroup] app-review-details',
  templateUrl: './review-details.component.html'
})
export class ElementsReviewDetails implements OnInit {

  public appForm: FormGroup;
<<<<<<< HEAD
  public imageURL: string;
=======
  //public imageURL: string;
>>>>>>> develop

  get formArray(): FormArray | null { return this.appForm.get('formArray') as FormArray }

  constructor(
<<<<<<< HEAD
    private controlContainer: ControlContainer
  ) { }
  
=======
    private controlContainer: ControlContainer) { }

>>>>>>> develop
  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
  }

  getValue(index: number, controlName: string) {
<<<<<<< HEAD
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
=======
    return this.formArray.controls[index].get(controlName).value
  }
  getImage() {
   return this.appForm.value.formArray[2].imageBase64;
>>>>>>> develop
  }
}
