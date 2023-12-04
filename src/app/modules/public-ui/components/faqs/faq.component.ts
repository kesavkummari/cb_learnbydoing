import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'faqs',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngAfterViewInit() {
      const faqQuestions = this.el.nativeElement.querySelectorAll('.faq-question');
  
      faqQuestions.forEach((question: { parentNode: any; }) => {
        this.renderer.listen(question, 'click', () => {
          const faqItem = question.parentNode;
          faqItem.classList.toggle('active');
        });
      });
    }
}

