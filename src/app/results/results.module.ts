import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ResultsRoutingModule, routedComponents } from './results-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
  ]
})

export class ResultsModule { }

