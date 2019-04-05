import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';
const sharedItems = [MatButtonModule, MatListModule, MatToolbarModule, MatCardModule];
@NgModule({
  declarations: [],
  imports: [].concat(CommonModule, sharedItems),
  exports: sharedItems
})
export class SharedModule {}
