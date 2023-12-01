import { Component } from '@angular/core';

@Component({
  selector: 'mlops-table',
  templateUrl: './mlopscourse-table.component.html',
  styleUrls: ['./mlopscourse-table.component.css']
})
export class mlopsCourseTableComponent {
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
