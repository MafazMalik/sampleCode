import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { New1Component } from './component/new1/new1.component';
import { New2Component } from './component/new2/new2.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';


@NgModule({
  declarations: [
    New1Component,
    New2Component,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
