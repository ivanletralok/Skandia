import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SliderComponent } from './slider.component';
import { SliderService } from './slider.service';
import { HighlightPercentagePipe } from 'src/app/pipes/highlight-percentage.pipe';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [SliderComponent, HighlightPercentagePipe],
  exports: [SliderComponent],
  providers: [SliderService]
})
export class SliderModule { }
