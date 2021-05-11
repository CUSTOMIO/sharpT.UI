import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
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
export class BlogRoutingModule { }

export const routedComponents = [
  BlogComponent,
];
