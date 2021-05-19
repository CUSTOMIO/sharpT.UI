import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { TestimonialsComponent } from './testimonials.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialsComponent,
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
export class TestimonialsRoutingModule { }

export const routedComponents = [
  TestimonialsComponent,
];

