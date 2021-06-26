import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { StandardService, SubjectService } from '../../../../core/data-service/index';
import { Standard, Subject } from '../../../../core/model/index';



@Component({
  selector: '[formGroup] app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class ElementsCourseDetails implements OnInit {

  public appForm: FormGroup;
  public imageURL: string;
  public srcResult: any;
  public standard: Standard[];
  public standardNames = [];
  public subject: Subject;


  constructor(
    private standardService: StandardService,
    private subjectService: SubjectService,
    private controlContainer: ControlContainer,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
    this.standardService.getStandard().subscribe(async res => {
      this.standard = await res;
    }, (error) => {
      // create notification services.
    });
    this.appForm.get("standard").valueChanges.subscribe(standardId => {
      this.subjectService.getSubjectByStandardId(standardId)
      .subscribe({
        next: data => {
          if(data){
            this.subject = data;
          }
        },
        error: error => {
          console.log(error)
        }
      });
    })
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
