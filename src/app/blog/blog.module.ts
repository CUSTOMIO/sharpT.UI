import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule, routedComponents } from './blog-routing.module';
import { MaterialElevationDirective } from './material-elevation.directive';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
    MaterialElevationDirective
  ],
  providers: [
  ]
})

export class BlogModule { }

