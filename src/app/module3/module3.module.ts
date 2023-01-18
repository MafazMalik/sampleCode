import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { AddCartComponent } from './Component/add-cart/add-cart.component';
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule } from '@angular/forms';
import { SwitchstatementComponent } from './Component/switchstatement/switchstatement.component';


@NgModule({
  declarations: [
    AddCartComponent,
    MobileComponent,
    SwitchstatementComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule,
    FormsModule
  ]
})
export class Module3Module { }
