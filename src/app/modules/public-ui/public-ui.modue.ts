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
import { TrendingCoursesComponent } from './components/course-content-component/trending-courses/trending-courses.component';
import { HybridLearningComponent } from './components/hybrid-learning/hybrid-learning.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { CorporateTrainingComponent } from './components/corporate-training/corporate-training.component';
import { DigitalLyncComponent } from './components/digital-lync/digital-lync.component';
import { QuestionsColComponent } from './components/questions-col/questions-col.component';
import { CourseTableComponent } from './components/course-content-component/trending-courses/course-table/course-table.component';
import { CourseIntenseTableComponent } from './components/course-content-component/trending-courses/course-table-intense/course-table.component';
import {AwsDevopsComponent} from './Pages/aws-devops/awsdevops.component'
import {MlOpsCoursesComponent} from './components/course-content-component/aws-devops-course/mlops-courses.component'
import {AwsDevOpsCourseTableComponent} from './components/course-content-component/aws-devops-course/aws-devops-course-content/awsdevops-table.component'
import { ImagePopupComponent } from './components/app-image-popup/image-popup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {CourseContentMob} from './components/course-content-component/trending-courses/course-contentmob/course-contentmob'
import {RegisterFormComponent} from './components/course-content-component/trending-courses/registration-form/register.component'
import { FormsModule } from '@angular/forms';

import { DevOpsCourseContentMob } from './components/course-content-component/aws-devops-course/devopscourse-contentmob/devopscourse-contentmob'
import { Blog1Component } from './components/blogs-component/blogs-pages/blog1/blog1';
import { FAQComponent } from './components/faqs/faq.component';
import { Blog2Component } from './components/blogs-component/blogs-pages/blog2/frugalarchitect';
import { ContactUsComponent } from './components/contactus/contact.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { SubHeaderComponent } from './components/subhead/subheader.component';
import { FeeStructureComponent } from './components/fee-structure/fee.structure.component';
import { ToolsComponent } from './components/tools/tools.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blogs-component/blog/blog';
import { VideoComponent } from './components/video-demo/video.component';
import { CompanyComponent } from './components/companies/company.component';
import { BlogStartingComponent } from './components/blogs-component/blogstarting/blogstart';
import { BlogsComponent } from './components/blogs-component/blogs/blog.component';
import { AutoScalingComponent } from './components/blogs-component/blogs-pages/all-blogs/Amazon_Auto-Scalling/auto-scaling';
import { DeveopsdownloadformComponent } from './components/course-content-component/aws-devops-course/deveopsdownloadform/deveopsdownloadform.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { ReviewsColComponent } from './components/reviews/reviews.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GoogleReviewsColComponent } from './components/reviews/google-reviews/google-reviews';
import { RegularAWSCourseContent } from './components/course-content-component/aws-devops-course/regularawsmobilecc/regularaws';
import { RegulardownloadformComponent } from './components/course-content-component/aws-devops-course/regularCCdownload/regularcontent';
import { DevopsDownloadComponent } from './components/course-content-component/aws-devops-course/devopsdownload-form/devops.download.component';
import { JobReadyComponent } from './Pages/job-ready/jobready.component';
import { RegularFeeStructureComponent } from './components/fee-structure/regular-fee/fee.structure.component';
import { JobReadyFeeComponent } from './components/fee-structure/job-ready-fee/job.ready.component';
import { HomePageNewComponent } from './components/home-page-new/page1';
import { MatTabsModule } from '@angular/material/tabs';
import { LandingPageComponent } from './Pages/landing_page/landingpage';
import { WeOfferComponent } from './components/we-offer/we.offer';


@NgModule({
  declarations: [CloudIntroComponent, 
    JobReadyComponent, IntroCardsComponent, ProgramsComponent, RegularFeeStructureComponent,
    JobReadyFeeComponent,
    TrendingCoursesComponent, HybridLearningComponent, KeyFeaturesComponent, 
    CorporateTrainingComponent, DigitalLyncComponent, QuestionsColComponent, 
     CourseTableComponent, IntroPageComponent,CourseIntenseTableComponent,
    AwsDevopsComponent, MlOpsCoursesComponent , 
    AwsDevOpsCourseTableComponent, ImagePopupComponent, CourseContentMob, 
    RegisterFormComponent, DevopsDownloadComponent, DevOpsCourseContentMob, 
    Blog1Component, FAQComponent, Blog2Component,ContactUsComponent, 
     CertificateComponent, SubHeaderComponent, FeeStructureComponent , LandingPageComponent, WeOfferComponent,
     ToolsComponent, TestimonialsComponent, BlogComponent, VideoComponent,
     CompanyComponent, BlogStartingComponent, BlogsComponent, AutoScalingComponent,
     DeveopsdownloadformComponent,ReviewsColComponent, GoogleReviewsColComponent, 
     RegularAWSCourseContent, RegulardownloadformComponent,HomePageNewComponent],
  imports: [RouterModule, PublicUiRoutingModule,MatTabsModule, SharedModule, CommonModule, FormsModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatSelectModule,MatTooltipModule,MatIconModule,MatSnackBarModule,HttpClientModule, MatDialogModule, MatCardModule, MatProgressSpinnerModule],
  providers: [],
})
export class PublicUiModule { }
