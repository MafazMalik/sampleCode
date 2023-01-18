import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './component/child/child.component';
import { New1Component } from './component/new1/new1.component';
import { New2Component } from './component/new2/new2.component';
import { ParentComponent } from './component/parent/parent.component';

const routes: Routes = [
  {
    path:'',
    component:New1Component
  },
  {
    path:'one',
    component:New2Component
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
