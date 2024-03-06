import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home-page-new',
  templateUrl: './page1.html',
  styleUrls: ['./page1.css']
})
export class HomePageNewComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      option: ['', Validators.required] // Added Validators.required for the 'option' field
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const name = this.myForm.get('name')!.value;
      const phone = this.myForm.get('phone')!.value;
      const option = this.myForm.get('option')!.value;

      const formData = {
        name: name,
        mobile: phone,
        looking_for: option
      };

      this.http.post('https://irt3364303.execute-api.us-east-1.amazonaws.com/dev_portal/OneStepAway_Form', formData)
        .subscribe(response => {
          console.log('Form data submitted successfully', response);

          const message = `Hi, I have visited your website and I am excited to know about AWS & DevOps Course Details. Could you please help me?\nName: ${name}\nPhone: ${phone}`;
          const whatsappURL = `https://api.whatsapp.com/send/?phone=919100073006&text=${encodeURIComponent(message)}`;

          window.location.href = whatsappURL;

          this.myForm.reset();
        }, error => {
          console.error('Error submitting form data', error);
        });
    } else {
      console.error('Form is not valid. Please check the fields.');
      
      Object.keys(this.myForm.controls).forEach(key => {
        const control = this.myForm.get(key)!;
        console.log(`Control '${key}':`);
        console.log('  Status:', control.status);
        console.log('  Errors:', control.errors);
      });
    }
  }
}
