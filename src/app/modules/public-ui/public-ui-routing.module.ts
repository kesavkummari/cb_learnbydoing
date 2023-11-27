// feature-module1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { AWSDevOpsComponent } from './Pages/aws/aws.component';
import { MlOpsComponent } from './Pages/mlops/mlops.component';
import { ContactUsComponent } from './components/contactus/contact.component';
import  { BlogsComponent } from './components/blogs/blog.component'


const routes: Routes = [
  {path:'aws', component: AWSDevOpsComponent},
  {path:'devops', component: MlOpsComponent},
  {path:'blogs', component: BlogsComponent},
  {path:'home', component: IntroPageComponent},
  { path:'contactus', component: ContactUsComponent },
  
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
