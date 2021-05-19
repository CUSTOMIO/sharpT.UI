import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule, routedComponents } from './course-routing.module';
import { ApplicationFormComponent } from './application-form/application-form.component';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
  ],
  declarations: [
    routedComponents,
    ApplicationFormComponent,
  ],
  providers: [
  ]
})

export class CourseModule { }

