import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule, routedComponents } from './course-routing.module';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ElementsBasicDetails } from './application-form/elements/basic-details/basic-details.component';
import { ElementsContactDetails } from './application-form/elements/contact-details/contact-details.component';
import { ElementsCourseDetails } from './application-form/elements/course-details/course-details.component';
import { ElementsReviewDetails } from './application-form/elements/review-details/review-details.component';
<<<<<<< HEAD
=======
import { CollegeComponent } from './college/college.component';
import { DegreeComponent } from './degree/degree.component';
import { SchoolComponent } from './school/school.component';
import { VerifyComponent } from '../verify/verify.component';
>>>>>>> develop


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
  ],
  declarations: [
    routedComponents,
    ApplicationFormComponent,
<<<<<<< HEAD
    ElementsBasicDetails,
    ElementsContactDetails,
    ElementsCourseDetails,
    ElementsReviewDetails
=======
    CollegeComponent,
    DegreeComponent,
    SchoolComponent,
    ElementsBasicDetails,
    ElementsContactDetails,
    ElementsCourseDetails,
    ElementsReviewDetails,
    VerifyComponent
>>>>>>> develop
  ],
  providers: [
  ]
})

export class CourseModule { }

