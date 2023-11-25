import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['intro-page.component.css']
})
export class IntroPageComponent { 
  public isPopupOpen: boolean = true;
}


