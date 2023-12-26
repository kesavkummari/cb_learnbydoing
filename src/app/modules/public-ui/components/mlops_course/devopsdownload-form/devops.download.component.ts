import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for template-driven forms
// or
import { ReactiveFormsModule } from '@angular/forms'; // for reactive forms
import { DataService } from '../../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'devopsdownload-form',
  templateUrl: './devops.download.component.html',
  styleUrls: ['./devops.download.component.css']
})
export class DevopsDownloadComponent  { 
  popupform = false;
  name = 'Angular';
  formData: { name: string, email: string, phone: string } = { name: '', email: '', phone: '' };

  // Reference to the hidden link element
  @ViewChild('pdfDownloadLink', { static: false })
  pdfDownloadLink!: ElementRef;

  constructor
  (
    private elementRef: ElementRef,
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
      this.http.get('https://8amcloudbinary.s3.amazonaws.com/CloudBinary_AWS-Certified-DevOps-Engineer-20231223.pdf', { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'CB DevOps CourseCurriculum.pdf');
        // Show success message
        this.snackBar.open('Form submitted successfully!', 'Close', {
          duration: 5000
        });
        // Close the form
        this.popupform = false;
        });
    });

  }

  // Function to handle form submission
  handleSubmitForm() {
    if (this.formData.name && this.formData.email && this.formData.phone) {
      this.handleDownloadAndClose(); // Download the PDF and close the form
    } else {
      alert('Please fill in all the form fields before submitting.');
    }
  }
}