import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponent } from './component-new/first/first.component';
import { SecondComponent } from './component-new/second/second.component';
import { ThirdArrayComponent } from './component-new/third-array/third-array.component';

const routes: Routes = [
  {
    path:'two',
    component:FirstComponent
  },
  {
    path:'three',
    component:SecondComponent
  },
  {
    path:'four',
    component:ThirdArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
