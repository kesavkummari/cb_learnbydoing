import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'contactus',
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css']
})
export class ContactUsComponent {
  formData: { first_name: string, last_name:string, email: string, phone: string, user_message:string} = { first_name: '',last_name:'', email: '', phone: '' ,user_message:''};

  constructor
  (
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private dataService: DataService,
    private router: Router // Inject Router
  ) {}

  // Function to handle the download and close
  handleDownloadAndClose() {
    // Insert form data into API
    this.dataService.submitForm(this.formData).subscribe((res: any) => {
      this.http.get('https://8amcloudbinary.s3.amazonaws.com/20240124_Latest_Regular_CloudBinary.pdf', { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'CB DevOps CourseCurriculum.pdf');
        // Show success message
        this.snackBar.open('Form submitted successfully!', 'Close', {
          duration: 5000
        });

        // Navigate to the "/thank-you" page
        this.router.navigate(['/thank-you']);
      });
    });
  }

  // Function to handle form submission
  handleSubmitForm() {
    if (this.formData.first_name && this.formData.last_name && this.formData.email && this.formData.phone && this.formData.user_message) {
      this.handleDownloadAndClose(); // Download the PDF and close the form
    } else {
      alert('Please fill in all the form fields before submitting.');
    }
  }

  validateEmail(email:string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
