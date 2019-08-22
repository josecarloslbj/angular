import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Master1Component } from './master1.component';
import { Master2Component } from './master2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Master1Component,
    Master2Component
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [],
  providers: [],
})
export class MasterModule {}
