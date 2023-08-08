import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ButtonChooserComponent } from './shared/components/buttons/button.component';
import { RowColFlexboxDirective } from './shared/directives/boxes/row-col-flex/rowcol-flexbox.directive'
import { CardWrapperComponent } from './shared/components/card-wrapper/card-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonChooserComponent,
    RowColFlexboxDirective,
    CardWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
