import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// External Modules
import { ChartsModule } from 'ng2-charts';

// Components
import { IncreasingComponent } from './increasing/increasing.component';
import { DonnusComponent } from './donnus/donnus.component';



@NgModule({
  declarations: [
    IncreasingComponent,
    DonnusComponent
  ],
  exports: [
    IncreasingComponent,
    DonnusComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
