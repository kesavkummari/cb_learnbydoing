import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { saveAs } from 'file-saver';

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
    private dataService: DataService
  ) {}

  // Function to handle the download and close
  handleDownloadAndClose() {
    // // Trigger the download by simulating a click on the hidden link
    // this.pdfDownloadLink.nativeElement.click();
    // Insert form data into API
    this.dataService.submitForm(this.formData).subscribe((res: any) => {
      // console.log(res);
      this.http.get('https://8amcloudbinary.s3.amazonaws.com/AWS_DevOps.pdf', { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'CB DevOps CourseCurriculum.pdf');
        // Show success message
        this.snackBar.open('Form submitted successfully!', 'Close', {
          duration: 5000
        });
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
}
