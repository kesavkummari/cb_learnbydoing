import { Component } from '@angular/core';

@Component({
  selector: 'course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent {
  osModules = [
    { 
      name: 'OS Module 1', 
      content: ['Content for OS Module 1', '2', '3' ] } ,
    { name: 'OS Module 2', content: ['Content for OS Module 2'] },
    { name: 'OS Module 3', content: 'Content for OS Module 3' },
    { name: 'OS Module 4', content: 'Content for OS Module 4' },
    { name: 'OS Module 5', content: 'Content for OS Module 5' }
  ];

  awsModules = [
    { name: 'AWS Services - Compute ',
     content: [['Amazon EC2 -' , ' Images',
     '  EBS',
     ' Security Groups'],
     
      'Snapshots',
      'Creating Golden Images',
      'Amazon EC2 Auto Scaling',
      'EC2 Image Builder',
      'AWS Elastic Beanstalk'] },
    { name: 'AWS Services - Storage', content: 'Content for AWS Module 2' },
    { name: 'AWS Module 3', content: 'Content for AWS Module 3' },
    { name: 'AWS Module 4', content: 'Content for AWS Module 4' },
    { name: 'AWS Module 5', content: 'Content for AWS Module 5' },
    { name: 'AWS Module 6', content: 'Content for AWS Module 6' }
  ];

  devOpsModules = [
    { name: 'DevOps Module 1', content: 'Content for DevOps Module 1' },
    { name: 'DevOps Module 2', content: 'Content for DevOps Module 2' },
    { name: 'DevOps Module 3', content: 'Content for DevOps Module 3' },
    { name: 'DevOps Module 4', content: 'Content for DevOps Module 4' },
    { name: 'DevOps Module 5', content: 'Content for DevOps Module 5' }
  ];

  selectedModuleContent: string | null = null;
  activeModules: any[] = [];

  showModules(category: string) {
    switch (category) {
      case 'os':
        this.activeModules = this.osModules;
        break;
      case 'aws':
        this.activeModules = this.awsModules;
        break;
      case 'devops':
        this.activeModules = this.devOpsModules;
        break;
      default:
        this.activeModules = [];
        break;
    }
    this.selectedModuleContent = null;
  }

  showModuleContent(moduleContent: string) {
    this.selectedModuleContent = moduleContent;
    
  }
  
}