import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'finops',
  templateUrl: './finops.component.html',
  styleUrls: ['./finops.component.css']
})
export class FinOpsComponent implements OnInit {
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

  constructor(private elementRef: ElementRef, private snackBar: MatSnackBar, private router: Router) {}

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
      
      // Clear the form after submission
      this.registrationForm.reset();
      this.router.navigate(['/thank-you']);
      
      const message = `Hi, I'm interested in your course. Can you provide me with more details?\n`;
      const whatsappURL = `https://api.whatsapp.com/send/?phone=919392743006&text=${encodeURIComponent(message)}`;
  
      // Redirect directly to WhatsApp API endpoint
      window.location.href = whatsappURL;
  
      this.isLoading = false; // Stop loading
    }
  }
}
