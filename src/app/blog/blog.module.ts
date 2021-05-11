import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule, routedComponents } from './blog-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
  ]
})

export class BlogModule { }

