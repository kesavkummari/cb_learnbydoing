import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'mlops',
  templateUrl: './mlops.component.html',
  styleUrls: ['./mlops.component.css']
})
export class MlOpsComponent implements OnInit {
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
