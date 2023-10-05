import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './shared/directives/boxes/row-col-flex/rowcol-flexbox.directive.css','../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class AppComponent {
  abc() {
    throw new Error('Method not implemented.');
  }
  title = 'cloudbinary';

  isScreenSmall = window.innerWidth <= 720;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isScreenSmall = event.target.innerWidth <= 720;
    console.log("isScreenSmall===>",event.target.innerWidth)
  }

  sidenavOpen = false;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
