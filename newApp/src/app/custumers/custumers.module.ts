import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustumersPageRoutingModule } from './custumers-routing.module';

import { CustumersPage } from './custumers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustumersPageRoutingModule
  ],
  declarations: [CustumersPage]
})
export class CustumersPageModule {}
