import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { CourseComponent } from './course.component';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { CollegeComponent } from './college/college.component';
import { SchoolComponent } from './school/school.component';
import { DegreeComponent } from './degree/degree.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: 'enroll',
    component: ApplicationFormComponent,
  },
  {
    path: 'college',
    component: CollegeComponent,
  }, {
    path: 'school',
    component: SchoolComponent,
  }, {
    path: 'degree',
    component: DegreeComponent,
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

