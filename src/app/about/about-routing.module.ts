import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component:  AboutComponent,
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
export class AboutRoutingModule { }

export const routedComponents = [
  AboutComponent
];

