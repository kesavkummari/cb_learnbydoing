import { Component, ElementRef, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';



@Component({
  selector: 'job-ready',
  templateUrl: './jobready.component.html',
  styleUrls: ['./jobready.component.css']
})
export class JobReadyComponent implements OnInit {

  // registrationForm!: FormGroup
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



  constructor(private elementRef: ElementRef,private snackBar: MatSnackBar,private http: HttpClient, private dataService: DataService , private router: Router) {}

  ngOnInit(): void {
  }
  scrollToTrendingCourses() {
    const trendingCourses = this.elementRef.nativeElement.querySelector('#trending-courses');

    if (trendingCourses) {
      trendingCourses.scrollIntoView({ behavior: 'smooth' });
    }
  }
  formData: any = {};

  onSubmit() {
    if (this.registrationForm.valid) {

      // console.log(this.registrationForm.value);
      // Insert form data into API
      this.dataService.submitForm(this.registrationForm.value).subscribe((res: any) => {
        console.log(res);
        // this.http.get('https://8amcloudbinary.s3.amazonaws.com/Latest_JobReadyWith6MonthsInternshipProgram_CloudBinary.pdf', { responseType: 'blob' })
        // .subscribe((response: Blob) => {
        //   saveAs(response, 'CB DevOps CourseCurriculum.pdf');
        //   // Show success message
        //   this.snackBar.open('Form submitted successfully!', 'Close', {
        //     duration: 5000
        //   });
        //   });
        this.registrationForm.reset();
        this.router.navigate(['/thank-you']);
        const message = `Hi, I'm interested in your AWS & DevOps course. Can you provide me with more details?\nName: ${this.registrationForm.value.name}\nPhone: ${this.registrationForm.value.phone}`;
        const whatsappURL = `https://api.whatsapp.com/send/?phone=919100073006&text=${encodeURIComponent(message)}`;

        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
      });

    }
  }
 
}
