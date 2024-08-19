import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';
import { AdressPipe } from './adress.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    StatusPipe,
    AdressPipe,
    DashIfEmptyPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhonePipe,
    StatusPipe,
    AdressPipe,
    DashIfEmptyPipe
  ]
})
export class PipesModule { }
