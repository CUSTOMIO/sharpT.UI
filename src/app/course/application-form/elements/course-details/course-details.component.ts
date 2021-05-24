import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { StandardService } from '../../../../core/data-service/index';
import { Standard } from '../../../../core/model/index';

@Component({
  selector: '[formGroup] app-course-details',
  templateUrl: './course-details.component.html'
})
export class ElementsCourseDetails implements OnInit {

  public appForm: FormGroup;
  public imageURL: string;
  public srcResult: any;
  public standard: Standard[];
  public standardNames = [];


  constructor(
    private standardService: StandardService,
    private controlContainer: ControlContainer,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.standardService.getCourses().subscribe(async res => {
      this.standard = await res;
      console.log(res[0]);
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
    this.appForm = this.controlContainer.control as FormGroup;
  }



  public hasError = (controlName: string, errorName: string) => {
    return this.appForm.controls[controlName].hasError(errorName);
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.appForm.patchValue({
      avatar: file
    });
    this.appForm.get('image').setValue(file);
    this.appForm.get('image').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

}
