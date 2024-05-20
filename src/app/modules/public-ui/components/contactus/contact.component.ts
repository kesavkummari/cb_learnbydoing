import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'contactus',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactUsComponent {
  formData: { first_name: string, last_name: string, email: string, phone: string, user_message: string } = { first_name: '', last_name: '', email: '', phone: '', user_message: '' };

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private dataService: DataService,
    private router: Router // Inject Router
  ) { }

  // Function to handle the form submission and close
  handleFormSubmissionAndClose() {
    // Insert form data into API
    this.dataService.submitForm(this.formData).subscribe({
      next: () => {
        // PDF download is commented out for now
        // this.http.get('https://8amcloudbinary.s3.amazonaws.com/AWS_DevOps_Regular_CloudBinary_20240125.pdf', { responseType: 'blob' })
        // .subscribe((response: Blob) => {
        //   saveAs(response, 'CB DevOps CourseCurriculum.pdf');
          
          // Show success message
          this.snackBar.open('Form submitted successfully!', 'Close', {
            duration: 5000
          });

          // Navigate to the "/thank-you" page
          this.router.navigate(['/thank-you']);
          
          // Construct the WhatsApp message
          const message = `Hi, I have visited your website and I am excited to know about AWS & DevOps Course Details. Could you please help me?\nName: ${this.formData.first_name} ${this.formData.last_name}\nPhone: ${this.formData.phone}`;
          const whatsappURL = `https://api.whatsapp.com/send/?phone=919100073006&text=${encodeURIComponent(message)}`;
          
          // Redirect to WhatsApp
          window.open(whatsappURL, '_blank');
        // });
      },
      error: (err) => {
        console.error('Error submitting the form', err);
        this.snackBar.open('Failed to submit the form. Please try again.', 'Close', {
          duration: 5000
        });
      }
    });
  }

  // Function to handle form submission
  handleSubmitForm() {
    if (this.formData.first_name && this.formData.last_name && this.formData.email && this.formData.phone && this.formData.user_message) {
      // Show loading message
      this.snackBar.open('Submitting...', '', {
        duration: 3000
      });

      this.handleFormSubmissionAndClose(); // Submit the form and close
    } else {
      alert('Please fill in all the form fields before submitting.');
    }
  }

  validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
