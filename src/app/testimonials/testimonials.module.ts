import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TestimonialsRoutingModule, routedComponents } from './testimonials-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
  ]
})

export class TestimonialsModule { }

