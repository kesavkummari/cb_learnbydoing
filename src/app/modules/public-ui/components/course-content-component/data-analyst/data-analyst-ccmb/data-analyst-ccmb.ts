import { Component } from '@angular/core';
import { DeveopsdownloadformComponent } from '../../aws-devops-course/deveopsdownloadform/deveopsdownloadform.component';
import { MatDialog } from '@angular/material/dialog';
import { RegulardownloadformComponent } from '../../aws-devops-course/regularCCdownload/regularcontent';

@Component({
  selector: 'data-analyst-ccmb', //ccmb course content mobile view
  templateUrl: './data-analyst-ccmb.html',
  styleUrls: ['./data-analyst-ccmb.css']
})
export class DataAnalystCCMBComponent {

  courses = [
    {
      title: 'Data Analyst',
      modules: [
        // data-analyst modules and submodules
        // Module 1
        {
          title: 'Getting Started With Data Analytics',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'Data Analysis Concepts using Ai Tools',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'AWS - Application Integration',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'Business Statistics',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'RDBMS - SQL & NoSQL',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'Data Visualisation: Tableau & Power BI',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'Programming : Basic & Advanced Python',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
        {
          'title': 'What Next? - Data Engineer, Data Science & MLOps',
          'submodules': [
            'Python OOP',
            'Python Class',
            'Summary'
          ]
        },
      ]
    }

    // You can add more courses here if needed
  ];

  isCourseVisible: boolean[] = new Array(this.courses.length).fill(false);
  isModuleVisible: boolean[][] = [];

  constructor(public dialog: MatDialog) {
    this.courses.forEach((course) => {
      this.isModuleVisible.push(new Array(course.modules.length).fill(false));
    });
  }

  toggleCourseModules(courseNumber: number): void {
    this.isCourseVisible[courseNumber] = !this.isCourseVisible[courseNumber];
  }

  toggleModuleSubmodules(courseNumber: number, moduleNumber: number): void {
    this.isModuleVisible[courseNumber][moduleNumber] = !this.isModuleVisible[courseNumber][moduleNumber];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeveopsdownloadformComponent, {
      data: { /* optional data to pass to the dialog component */ },
      disableClose: true // Prevent closing on backdrop click
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Perform any necessary actions after the dialog is closed
    });
  }

}