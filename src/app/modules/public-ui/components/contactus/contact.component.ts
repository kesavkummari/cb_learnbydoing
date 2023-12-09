import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contactus',
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css']
})
export class ContactUsComponent {
  constructor(private router: Router) {}
onSubmit() {
  // Your form submission logic here

  // Assuming this is where you want to navigate after a successful submission
  this.router.navigate(['/thank-you']);
}
}