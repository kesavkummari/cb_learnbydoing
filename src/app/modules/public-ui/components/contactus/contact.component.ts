import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'contactus',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactUsComponent {
  formData: { first_name: string, last_name: string, email: string, phone: string, user_message: string } = { first_name: '', last_name: '', email: '', phone: '', user_message: '' };
  isLoading = false; // Loading state for spinner

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private dataService: DataService
  ) { }

  // Function to handle the form submission, reset, and redirect to WhatsApp
  handleFormSubmissionResetAndRedirect() {
    // Insert form data into API
    this.dataService.submitForm(this.formData).subscribe({
      next: () => {
        // Show success message
        this.snackBar.open('Form submitted successfully!', 'Close', {
          duration: 5000
        });

        // Construct the WhatsApp message
        const message = `Hi, I have visited your website and I am excited to know about AWS & DevOps Course Details. Could you please help me?\nName: ${this.formData.first_name} ${this.formData.last_name}\nPhone: ${this.formData.phone}`;
        const whatsappURL = `https://api.whatsapp.com/send/?phone=919100073006&text=${encodeURIComponent(message)}`;

        // Reset the form
        this.resetForm();

        // Redirect to WhatsApp
        window.location.href = whatsappURL;
      },
      error: (err) => {
        console.error('Error submitting the form', err);
        this.snackBar.open('Failed to submit the form. Please try again.', 'Close', {
          duration: 5000
        });
      },
      complete: () => {
        this.isLoading = false; // Stop loading spinner
      }
    });
  }

  // Function to handle form submission
  handleSubmitForm() {
    if (this.formData.first_name && this.formData.last_name && this.formData.email && this.formData.phone && this.formData.user_message) {
      // Start loading spinner
      this.isLoading = true;

      this.handleFormSubmissionResetAndRedirect(); // Submit the form, reset, and redirect to WhatsApp
    } else {
      alert('Please fill in all the form fields before submitting.');
    }
  }

  // Function to reset the form
  resetForm() {
    this.formData = { first_name: '', last_name: '', email: '', phone: '', user_message: '' };
  }
}
