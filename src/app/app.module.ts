import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { ObjectiveModule } from './components/objective/objective.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FooterModule,
    HeaderModule,
    ObjectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
