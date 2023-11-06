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

import { CourseTableComponent } from './components/trending-courses/course-table/course-table.component';
import { CourseIntenseTableComponent } from './components/trending-courses/course-table-intense/course-table.component';
import { AWSDevOpsComponent } from './Pages/aws-devops/aws-devops.component';
import {MlOpsComponent} from './Pages/mlops/mlops.component'
import {MlOpsCoursesComponent} from './components/mlops_course/mlops-courses.component'
import {mlopsCourseTableComponent} from './components/mlops_course/mlops-table/mlopscourse-table.component'
import { ImagePopupComponent } from './components/app-image-popup/image-popup.component'
import {CourseContentMob} from './components/trending-courses/course-contentmob/course-contentmob'

@NgModule({
  declarations: [CloudIntroComponent,  IntroCardsComponent, ProgramsComponent, TrendingCoursesComponent, HybridLearningComponent, KeyFeaturesComponent, CorporateTrainingComponent, DigitalLyncComponent, QuestionsColComponent, LocationsComponent, CourseTableComponent, IntroPageComponent,CourseIntenseTableComponent,AWSDevOpsComponent, MlOpsComponent, MlOpsCoursesComponent , mlopsCourseTableComponent, ImagePopupComponent, CourseContentMob ],
  imports: [RouterModule, PublicUiRoutingModule, SharedModule, CommonModule],
  providers: [],
})
export class PublicUiModule { }
