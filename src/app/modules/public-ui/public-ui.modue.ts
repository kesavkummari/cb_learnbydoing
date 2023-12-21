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
import { AWSDevOpsComponent } from './Pages/aws/aws.component';
import {MlOpsComponent} from './Pages/mlops/mlops.component'
import {MlOpsCoursesComponent} from './components/mlops_course/mlops-courses.component'
import {mlopsCourseTableComponent} from './components/mlops_course/mlops-table/mlopscourse-table.component'
import { ImagePopupComponent } from './components/app-image-popup/image-popup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {CourseContentMob} from './components/trending-courses/course-contentmob/course-contentmob'
import {RegisterFormComponent} from './components/trending-courses/registration-form/register.component'
import { FormsModule } from '@angular/forms';
import { DevopsDownloadComponent } from './components/mlops_course/devopsdownload-form/devops.download.component'
import { DevOpsCourseContentMob } from './components/mlops_course/devopscourse-contentmob/devopscourse-contentmob'
import { Blog1Component } from './components/blogs-pages/blog1/blog1';
import { FAQComponent } from './components/faqs/faq.component';
import { Blog2Component } from './components/blogs-pages/blog2/frugalarchitect';
import { ContactUsComponent } from './components/contactus/contact.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { SubHeaderComponent } from './components/subhead/subheader.component';
import { FeeStructureComponent } from './components/fee-structure/fee.structure.component';
import { ToolsComponent } from './components/tools/tools.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@NgModule({
  declarations: [CloudIntroComponent,  IntroCardsComponent, ProgramsComponent, TrendingCoursesComponent, HybridLearningComponent, KeyFeaturesComponent, CorporateTrainingComponent, DigitalLyncComponent, QuestionsColComponent, LocationsComponent, CourseTableComponent, IntroPageComponent,CourseIntenseTableComponent,AWSDevOpsComponent, MlOpsComponent, MlOpsCoursesComponent , mlopsCourseTableComponent, ImagePopupComponent, CourseContentMob, RegisterFormComponent, DevopsDownloadComponent, DevOpsCourseContentMob, Blog1Component, FAQComponent, Blog2Component,ContactUsComponent,  CertificateComponent, SubHeaderComponent, FeeStructureComponent , ToolsComponent, TestimonialsComponent ],
  imports: [RouterModule, PublicUiRoutingModule, SharedModule, CommonModule, FormsModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatSelectModule,MatTooltipModule,MatIconModule,MatSnackBarModule,HttpClientModule],
  providers: [],
})
export class PublicUiModule { }
