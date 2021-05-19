import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ContactusRoutingModule, routedComponents } from './contactus-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ContactusRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
  ]
})

export class ContactusModule { }

