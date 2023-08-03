import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  abc() {
    throw new Error('Method not implemented.');
  }
  title = 'cloudbinary';
}
