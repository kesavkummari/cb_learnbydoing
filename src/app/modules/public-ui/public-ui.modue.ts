// feature-module1.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// Import components, services, guards, etc. from this module
import { PublicUiRoutingModule } from './public-ui-routing.module';
import { CloudIntroComponent } from './components/cloud-intro/cloud-intro.component';
import { SharedModule } from 'src/app/shared/shared-mod.module';
import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { IntroCardsComponent } from './components/Intro-cards/intro-cards.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { TrendingCoursesComponent } from './components/trending-courses/trending-courses.component';

@NgModule({
  declarations: [CloudIntroComponent, IntroPageComponent, IntroCardsComponent, ProgramsComponent, TrendingCoursesComponent],
  imports: [RouterModule, PublicUiRoutingModule, SharedModule],
  providers: [],
})
export class PublicUiModule { }
