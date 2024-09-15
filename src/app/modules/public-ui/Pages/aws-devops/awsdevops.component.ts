import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'finops',
  templateUrl: './awsdevops.component.html',
  styleUrls: ['./awsdevops.component.css']
})
export class AwsDevopsComponent implements OnInit {
  isLoading = false;

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]);
  experience = new FormControl('', [Validators.required]);
  courseInterest = new FormControl('', [Validators.required]);

  registrationForm = new FormGroup({
    name: this.name,
    email: this.email,
    phone: this.phone,
    experience: this.experience,
    courseInterest: this.courseInterest,
  });

  constructor(private elementRef: ElementRef, private snackBar: MatSnackBar, private http: HttpClient, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  scrollToTrendingCourses() {
    const trendingCourses = this.elementRef.nativeElement.querySelector('#trending-courses');
    if (trendingCourses) {
      trendingCourses.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.isLoading = true; // Start loading
      this.dataService.submitForm(this.registrationForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.registrationForm.reset();
          this.router.navigate(['/thank-you']);
          const message = `Hi, I'm interested in your AWS & DevOps course. Can you provide me with more details?\n`;
          const whatsappURL = `https://api.whatsapp.com/send/?phone=919100073006&text=${encodeURIComponent(message)}`;
  
          // Redirect directly to WhatsApp API endpoint
          window.location.href = whatsappURL;
  
          this.isLoading = false; // Stop loading
        },
        (error: any) => {
          console.error('Error submitting form:', error);
          this.snackBar.open('Failed to submit the form. Please try again.', 'Close', {
            duration: 5000,
          });
          this.isLoading = false; // Stop loading on error
        }
      );
    }
  }
  
}
