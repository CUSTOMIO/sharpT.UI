import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { CourseComponent } from './course.component';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { CourseStandardComponent } from './course-standard/course-standard.component';

const routes: Routes = [
  {
    path: 'enroll',
    component: ApplicationFormComponent
  },
  {
    path: ':courseId',
    component: CourseStandardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule { }

export const routedComponents = [
  CourseComponent
];

