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
    this.standardService.getStandard().subscribe(async res => {
      this.standard = await res;
    }, (error) => {
      // create notification services.
    });
    this.appForm = this.controlContainer.control as FormGroup;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.appForm.controls[controlName].hasError(errorName);
  }

  public showPreview(event) {
    if ((event.target as HTMLInputElement).files[0]) {
      const file = (event.target as HTMLInputElement).files[0];
      var pattern = /image-*/;

      if (!file.type.match(pattern)) {
        alert('Invalid format');
        return;
      }
      this.appForm.get('image').setValue(file);
      this.appForm.get('image').updateValueAndValidity();

      const reader = new FileReader();

      reader.onload = () => {
        this.imageURL = reader.result as string;
        this.appForm.get('imageBase64').setValue(this.imageURL)
      }
      reader.readAsDataURL(file)
    }
  }

}
