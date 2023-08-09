import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  template: `
    <div class="card-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    .card-wrapper {
      background-color:#1b1834;
      /* border: 1px solid #1b1834; */
      padding: 30px 15px;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin:50px 15px;
    }
    `
  ]
})
export class CardWrapperComponent { }
