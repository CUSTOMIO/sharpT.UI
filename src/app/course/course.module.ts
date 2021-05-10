import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule, routedComponents } from './course-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
  ]
})

export class CourseModule { }

