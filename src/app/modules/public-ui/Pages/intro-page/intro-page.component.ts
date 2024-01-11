import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['intro-page.component.css']
})
export class IntroPageComponent { 
  public isPopupOpen: boolean = false; // Start with popup closed initially

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // You can adjust the scroll position at which you want to open the popup
    const scrollPosition = window.scrollY;
    const triggerScrollPosition = 200; // Adjust this value as needed

    // Check if the scroll position is beyond the trigger point
    if (scrollPosition > triggerScrollPosition) {
      this.isPopupOpen = true;
    } else {
      this.isPopupOpen = false;
    }
  }
}
