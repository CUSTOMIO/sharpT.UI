import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }]
  },
  {
    path: 'about',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }]
  },
  {
    path: 'course',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) }]
  },
  {
    path: 'testimonials',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule) }]
  },
  {
    path: 'results',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) }]
  },
  {
    path: 'blog',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }]
  },
  {
    path: 'contactus',
    component: LayoutComponent,
    children: [{ path: '', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
