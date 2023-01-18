import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { FirstComponent } from './component-new/first/first.component';
import { SecondComponent } from './component-new/second/second.component';
import { ThirdArrayComponent } from './component-new/third-array/third-array.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdArrayComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
