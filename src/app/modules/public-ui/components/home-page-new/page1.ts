import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page-new',
  templateUrl: './page1.html',
  styleUrls: ['./page1.css']
})
export class HomePageNewComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      option: ['option1', Validators.required]
    });
  }

  onSubmit() {
    const name = this.myForm!.get('name')!.value;
const phone = this.myForm!.get('phone')!.value;


    const message = `Hi, I have visited your website and I am excited to know about AWS & DevOps Course Details. Could you please help me?\nName: ${name}\nPhone: ${phone}`;
    const whatsappURL = `https://api.whatsapp.com/send/?phone=919100073006&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
  }
}
