import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveComponent } from './objective.component';
import { ReviewObjetiveModule } from '../review-objetive/review-objetive.module';
import { SliderModule } from '../slider/slider.module';
import { BannerModule } from '../banner/banner.module';

@NgModule({
  imports: [
    CommonModule,
    ReviewObjetiveModule,
    SliderModule,
    BannerModule
  ],
  declarations: [ObjectiveComponent],
  exports: [ObjectiveComponent]
})
export class ObjectiveModule { }
