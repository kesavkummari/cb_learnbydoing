// feature-module1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { AWSDevOpsComponent } from './Pages/aws/aws.component';
import { MlOpsComponent } from './Pages/mlops/mlops.component';
import { ContactUsComponent } from './components/contactus/contact.component';
import { BlogsComponent } from './components/blogs/blog.component'
import { Blog1Component } from './components/blogs-pages/blog1/blog1';
import { Blog2Component } from './components/blogs-pages/blog2/frugalarchitect';
import { Blog3Component } from './components/blogs-pages/blog3/ec2';
import { Blog4Component } from './components/blogs-pages/blog4/route53';
import { Blog5Component } from './components/blogs-pages/blog5/dynamodb';
import { Blog6Component } from './components/blogs-pages/blog6/s3';
import { ThankyouComponent } from './components/thankyou/thankyou.component'


const routes: Routes = [
  {path:'aws', component: AWSDevOpsComponent},
  {path:'aws-devops', component: MlOpsComponent},
  {path:'blogs', component: BlogsComponent},
  {path:'home', component: IntroPageComponent},
  { path:'contactus', component: ContactUsComponent },
  { path: 'blog1' , component : Blog1Component },
  { path: 'frugalarchitect' , component : Blog2Component },
  { path: 'Amazon-EC2' , component : Blog3Component },
  { path: 'Route-53' , component : Blog4Component },
  { path: 'AWS-DynamoDB' , component : Blog5Component },
  { path: 'Amazon-S3' , component : Blog6Component },
  { path: 'thank-you' , component : ThankyouComponent },
  
  
  {
    path: '',
    component: IntroPageComponent,
    // Add guards and resolve as needed
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicUiRoutingModule { }
