import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule, routedComponents } from './blog-routing.module';
import { MaterialElevationDirective } from './material-elevation.directive';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
    MaterialElevationDirective,
    BlogViewComponent
  ],
  providers: [
  ]
})

export class BlogModule { }

