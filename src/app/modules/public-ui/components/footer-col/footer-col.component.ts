import { Component } from '@angular/core';

@Component({
  selector: 'footer-col',
  templateUrl: './footer-col.component.html',
  styles: [`.col-md-3{
    display: flex;
    flex-direction: column;
    align-items: center;
  }`]
})
export class FooterComponent {
}
