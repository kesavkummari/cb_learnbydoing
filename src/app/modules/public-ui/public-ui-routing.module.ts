// feature-module1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroPageComponent } from './Pages/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroPageComponent,
    // Add guards and resolve as needed
  },
  // More routes can be added here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicUiRoutingModule { }
