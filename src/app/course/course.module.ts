import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule, routedComponents } from './course-routing.module';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ElementsBasicDetails } from './application-form/elements/basic-details/basic-details.component';
import { ElementsContactDetails } from './application-form/elements/contact-details/contact-details.component';
import { ElementsCourseDetails } from './application-form/elements/course-details/course-details.component';
import { ElementsReviewDetails } from './application-form/elements/review-details/review-details.component';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
  ],
  declarations: [
    routedComponents,
    ApplicationFormComponent,
    ElementsBasicDetails,
    ElementsContactDetails,
    ElementsCourseDetails,
    ElementsReviewDetails
  ],
  providers: [
  ]
})

export class CourseModule { }

