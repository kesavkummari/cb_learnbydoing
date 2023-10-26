import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'aws-devops',
  templateUrl: './aws-devops.component.html',
  styleUrls: ['./aws-devops.component.css']
})
export class AWSDevOpsComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  scrollToTrendingCourses() {
    const trendingCourses = this.elementRef.nativeElement.querySelector('#trending-courses');

    if (trendingCourses) {
      trendingCourses.scrollIntoView({ behavior: 'smooth' });
    }
  }
  formData: any = {}; 

  onSubmit() {
    console.log(this.formData);

    
  }

}
