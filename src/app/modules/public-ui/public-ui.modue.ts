// feature-module1.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// Import components, services, guards, etc. from this module
import { PublicUiRoutingModule } from './public-ui-routing.module';
import { CloudIntroComponent } from './components/cloud-intro/cloud-intro.component';
import { SharedModule } from 'src/app/shared/shared-mod.module';
import { IntroPageComponent } from './Pages/intro-page/intro-page.component';

@NgModule({
  declarations: [CloudIntroComponent, IntroPageComponent],
  imports: [RouterModule, PublicUiRoutingModule, SharedModule],
  providers: [],
})
export class PublicUiModule { }
