import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ButtonChooserComponent } from './shared/components/buttons/button.component';
import { RowColFlexboxDirective } from './shared/directives/boxes/row-col-flex/rowcol-flexbox.directive'
import { CardWrapperComponent } from './shared/components/card-wrapper/card-wrapper.component';
import { ImgBlockDirective } from './shared/directives/boxes/img-block/img-block.directive';
import { SetChildStyleDirective } from './shared/directives/boxes/set-child-style.directive';
import { HoverLinkImageComponent } from './shared/components/hover-link-image/hover-link-image.component';
import { VerticalMenuComponent } from './shared/components/vertical-menu/vertical-menu.component';
import { VerticalMenuComponent2 } from './shared/components/vertical-menu-app/vertical-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonChooserComponent,
    RowColFlexboxDirective,
    CardWrapperComponent,
    ImgBlockDirective,
    SetChildStyleDirective,
    HoverLinkImageComponent,
    VerticalMenuComponent,
    VerticalMenuComponent2
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
