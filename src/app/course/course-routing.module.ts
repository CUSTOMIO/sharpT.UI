import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { CourseComponent } from './course.component';
import { ApplicationFormComponent } from './application-form/application-form.component'

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: 'enroll',
    component: ApplicationFormComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule { }

export const routedComponents = [
  CourseComponent
];

