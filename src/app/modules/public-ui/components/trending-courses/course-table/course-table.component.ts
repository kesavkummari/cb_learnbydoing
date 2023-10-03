import { Component } from '@angular/core';
const sections = document.querySelectorAll('.scroll-triggered');

@Component({
  selector: 'course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent {
    selectedTab: string = 'os'; // Default selected tab
    selectedModule: string = 'M1'; // Default selected module
  
    selectTab(tabName: string) {
      this.selectedTab = tabName;
      this.selectedModule = 'M1'; // Reset selected module when tab changes
    }
  
    selectModule(moduleName: string) {
      this.selectedModule = moduleName;
    }
  }