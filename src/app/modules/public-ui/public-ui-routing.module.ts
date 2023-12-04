// feature-module1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { AWSDevOpsComponent } from './Pages/aws/aws.component';
import { MlOpsComponent } from './Pages/mlops/mlops.component';
import { ContactUsComponent } from './components/contactus/contact.component';
import  { BlogsComponent } from './components/blogs/blog.component'
import { Blog1Component } from './components/blogs-pages/blog1/blog1';
import { Blog2Component } from './components/blogs-pages/blog2/frugalarchitect';

const routes: Routes = [
  {path:'aws', component: AWSDevOpsComponent},
  {path:'aws-devops', component: MlOpsComponent},
  {path:'blogs', component: BlogsComponent},
  {path:'home', component: IntroPageComponent},
  { path:'contactus', component: ContactUsComponent },
  { path: 'blog1' , component : Blog1Component },
  { path: 'frugalarchitect' , component : Blog2Component },
  
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
