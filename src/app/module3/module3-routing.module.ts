import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './Component/add-cart/add-cart.component';
import { SwitchstatementComponent } from './Component/switchstatement/switchstatement.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {
    path:'addCart',
    component:AddCartComponent
  },
  {
    path:'mobile',
    component:MobileComponent
  },
  {
    path:'switch',
    component:SwitchstatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
