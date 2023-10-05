// feature-module1.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import components, services, guards, etc. from this module
import { PublicUiRoutingModule } from './public-ui-routing.module';
import { CloudIntroComponent } from './components/cloud-intro/cloud-intro.component';
import { SharedModule } from 'src/app/shared/shared-mod.module';
import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { IntroCardsComponent } from './components/Intro-cards/intro-cards.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { TrendingCoursesComponent } from './components/trending-courses/trending-courses.component';
import { HybridLearningComponent } from './components/hybrid-learning/hybrid-learning.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { CorporateTrainingComponent } from './components/corporate-training/corporate-training.component';
import { DigitalLyncComponent } from './components/digital-lync/digital-lync.component';
import { QuestionsColComponent } from './components/questions-col/questions-col.component';
import { LocationsComponent } from './components/locations/locations.component';
import { FooterComponent } from './components/footer-col/footer-col.component';
import { CourseTableComponent } from './components/trending-courses/course-table/course-table.component';

@NgModule({
  declarations: [CloudIntroComponent, IntroPageComponent, IntroCardsComponent, ProgramsComponent, TrendingCoursesComponent, HybridLearningComponent, KeyFeaturesComponent, CorporateTrainingComponent, DigitalLyncComponent, QuestionsColComponent, LocationsComponent, FooterComponent, IntroPageComponent, CourseTableComponent],
  imports: [RouterModule, PublicUiRoutingModule, SharedModule, CommonModule],
  providers: [],
})
export class PublicUiModule { }