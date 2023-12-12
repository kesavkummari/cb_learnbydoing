import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'aws-devops',
  templateUrl: './aws-devops.component.html',
  styleUrls: ['./aws-devops.component.css']
})
export class AWSDevOpsComponent implements OnInit {
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



  constructor(private elementRef: ElementRef,private snackBar: MatSnackBar,private http: HttpClient, private dataService: DataService) {}

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
      // Show success message
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 5000
      });
      // this.registrationForm.value);
      
      
      // Insert form data into API
      // this.dataService.submitForm(this.registrationForm.value).subscribe((res: any) => {
        // res);
        // Download the PDF
        this.http.get('https://8amcloudbinary.s3.amazonaws.com/AWS_DevOps.pdf', { responseType: 'blob' })
          .subscribe((response: Blob) => {
            saveAs(response, 'CB DevOps CourseCurriculum.pdf');
          });
      // });

      // Reset form
      this.registrationForm.reset();
    }
  }
}