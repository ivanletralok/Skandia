import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
