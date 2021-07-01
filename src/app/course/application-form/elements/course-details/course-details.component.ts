import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, ControlContainer, FormArray, FormBuilder } from '@angular/forms';
import { StandardService, SubjectService } from '../../../../core/data-service/index';
import { AllSubject } from '../../../../core/model/index';
import { Standard } from '../../../../core/model/index';
import { MatSlideToggleChange } from '@angular/material/slide-toggle'

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
  public allSubject: any;
  public subject: object;

  constructor(
    private formBuilder: FormBuilder,
    private standardService: StandardService,
    private subjectService: SubjectService,
    private controlContainer: ControlContainer,
  ) {
  }


  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
    this.standardService.getStandard().subscribe(res => {
      this.standard = res;
    }, (error) => {
      // create notification services.
    });
    this.appForm.get("standard").valueChanges.subscribe(standardId => {
      if (standardId) {
        this.subjectService.getSubjectByStandardId(standardId)
          .subscribe({
            next: data => {
              if (data) {
                this.allSubject = data;
                (this.appForm.controls['subjects'] as FormArray).clear();
                if(!this.allSubject.allowSubjectSelection){
                  console.log(!this.allSubject.allowSubjectSelection);
                  for (let subject of this.allSubject.data){
                    (this.appForm.controls['subjects'] as FormArray).push(this.patchValues(subject.id, subject.name));
                  }
                }
              }
            },
            error: error => {
              console.log(error)
            }
          });
      }
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

  public checkSubject(event: MatSlideToggleChange, item: AllSubject) {
    if (event.checked) {
      (this.appForm.controls['subjects'] as FormArray).push(this.patchValues(item.id, item.name));
    }
    else {
      (this.appForm.controls['subjects'] as FormArray).removeAt(
        this.appForm.controls['subjects'].value.findIndex(x => {
          x.id === item.id
        })
      )
    }
  }

  public patchValues(id: number, name: string) {
    return this.formBuilder.group({
      id: [id],
      name: [name]
    })
  }

  printvalue() {
    console.log(this.appForm.value)
  }
}