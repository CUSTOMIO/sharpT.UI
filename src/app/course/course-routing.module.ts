import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
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

