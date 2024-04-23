import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'contactus',
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css']
})
export class ContactUsComponent {
  formData: { first_name: string, last_name:string, email: string, phone: string, user_message:string} = { first_name: '',last_name:'', email: '', phone: '' ,user_message:''};

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private dataService: DataService,
    private router: Router // Inject Router
  ) {}

  // Function to handle form submission
  handleSubmitForm() {
    if (this.formData.first_name && this.formData.last_name && this.formData.email && this.formData.phone && this.formData.user_message) {
      // Submit form data to API
      this.dataService.submitForm(this.formData).subscribe(() => {
        // Show success message
        this.snackBar.open('Form submitted successfully!', 'Close', {
          duration: 5000
        });
        
        // Navigate to the "/thank-you" page
        this.router.navigate(['/thank-you']);
      });
    } else {
      alert('Please fill in all the form fields before submitting.');
    }
  }

  validateEmail(email:string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
