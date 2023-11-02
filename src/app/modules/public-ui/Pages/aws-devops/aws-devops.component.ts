import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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



  constructor(private elementRef: ElementRef,private formBuilder: FormBuilder) {}

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
    if(this.registrationForm.valid) {
    console.log(this.registrationForm.value);
    }
  }
}
