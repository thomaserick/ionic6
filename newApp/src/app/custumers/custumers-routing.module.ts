import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustumersPage } from './custumers.page';

const routes: Routes = [
  {
    path: '',
    component: CustumersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustumersPageRoutingModule {}
