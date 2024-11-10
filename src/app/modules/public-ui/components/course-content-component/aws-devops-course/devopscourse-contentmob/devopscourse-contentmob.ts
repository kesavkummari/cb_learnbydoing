import { Component } from '@angular/core';
import { DeveopsdownloadformComponent } from '../deveopsdownloadform/deveopsdownloadform.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'devopscourse-contentmob',
  templateUrl: './devopscourse-contentmob.html',
  styleUrls: ['./devopscourse-contentmob.css']
})
export class DevOpsCourseContentMob {

  courses = [
    {
      title: 'Python Full Stack on AWS',
      modules: [
        // Course 2 modules and submodules
        // Module 1
        {
          title: 'Module 1 : Introduction to Full Stack Development',
          submodules: [ 
            'Overview of Full Stack Developmen',
'Frontend vs Backend vs Full Stack',
'Key technologies in Full Stack Development'
]
},
                                
{
  title: 'Module 2 : Core Python Programming',
  submodules: [
    'Python Basics: Data Types, Variables, and Operators',
    'Control Structures: Loops, Conditional Statements',
    'Functions and Modules in Python',
    'Object-Oriented Programming (OOP) in Python',
    'Exception Handling and File Operations'
  ]
},
{
  title: 'Module 3 : Frontend Development',
  submodules: [
    'HTML, CSS, and JavaScript Essentials',
'Responsive Web Design with Bootstrap',
'Advanced JavaScript: ES6+ Features, DOM Manipulation',
'Frontend Framework: ReactJS or Vue.js',
'Integrating Frontend with Backend APIs'
  ]
},

{
  title: 'Module 4 : Backend Development with Python',
  submodules: [
    'Introduction to Web Frameworks: Django or Flask',
'Building RESTful APIs',
'Database Integration with Python (PostgreSQL/MySQL)',
'Authentication and Authorization',
'Error Handling and Logging in Backend'
  ]
},

{
  title: 'Module 5 : Database Management',
  submodules: [
    'Introduction to SQL Databases',
'Database Design and Relationships',
'Working with ORM (Django ORM/SQLAlchemy)',
'Data Querying and Manipulation',
'Database Migration and Versioning'

  ]
},

{
  title: 'Module 6 : Deploying Web Applications on AWS',
  submodules: [
    'Introduction to AWS Cloud Services',
    'Setting Up AWS EC2 Instances',
    'Hosting Web Applications on AWS',
    'Using AWS RDS for Database Management',
    'AWS S3 for Static File Hosting'
  ]
},

          {
            title: 'Module 7 : Serverless Architectures with AWS',
            submodules: [
'Introduction to AWS Lambda and Serverless Concepts',
'API Gateway for Serverless APIs',
'AWS DynamoDB for Serverless Database Solutions',
'Deploying and Managing Serverless Applications'
]
          },

          {
  title: 'Module 8: Infrastructure as Code with AWS',
  submodules: [
    'Introduction to Infrastructure as Code (IaC)',
    'Boto3 Basics and Configuration',
    'Automating AWS Infrastructure with Boto3',
    'Best Practices for Infrastructure Management' 
  ]
},

{
  title: 'Module 9: CI/CD Pipelines on AWS',
  submodules: [
'Introduction to CI/CD Concepts',
'Setting Up GitHub/GitLab CI/CD Pipelines for AWS',
'Continuous Deployment on AWS using CodePipeline',
'Automated Testing and Quality Checks'
  ]
},

{
  title: 'Module 10: Security and Performance Optimization',
  submodules: [
    'Security Best Practices on AWS', 
    'Identity and Access Management (IAM)', 
    'Performance Optimization Techniques for Python Apps',
    'Monitoring with AWS CloudWatch',
    'Scaling Applications with AWS Elastic Load Balancing (ELB) and Auto Scaling'
  ]
},
{
  title: 'Module 11: Capstone Project',
  submodules: [
    'Building a Full Stack Web Application', 
    'Deploying and Managing the App on AWS Cloud', 
    'Using CI/CD for Automated Deployment',
    'Implementing Security and Monitoring Solutions'



  ]
},
{
  title: 'Job Opportunities',
  submodules: [
'1. Cloud Solutions Architect',
'2. Cloud Infrastructure Engineer',
'3. Cloud Security Engineer',
'4. Cloud Network Engineer',
'5. Cloud Automation Engineer',
'6. Cloud Support Engineer',
'7. Cloud Data Engineer',
'8. Cloud Migration Engineer',
'9. FinOps Engineer'



  ]
},
{
  title: 'Certifications & Cost Details',
  submodules: [
    'AWS Certified Cloud Practitioner - Exam Cost: 100 USD', 
    'GCP Cloud Digital Leader - Exam Cost: 99 USD', 
    'Microsoft Azure AZ-900 - Exam Cost: 99 USD'
  ]
},
//            {
//             title: 'Reliable MLOps: Scaling and Testing',
//             submodules: ['Scaling and multi-account strategies',
// 'Testing and traffic-shifting',
// 'Demonstration: Using SageMaker Inference Recommender',
// 'Hands-On Lab: Testing Model Variants',
// 'Summary']
//           },

//           {
//   title: 'Reliable MLOps: Scaling and Testing (continued)',
//   submodules: [
// 'Hands-On Lab: Shifting Traffic',
// 'Workbook: Multi-account strategies'
// ]
// },

//           {
//   title: 'Reliable MLOps: Monitoring',
//   submodules: [
// 'The importance of monitoring in ML',
// 'Hands-On Lab: Monitoring a Model for Data Drift',
// 'Operations considerations for model monitoring',
// 'Remediating problems identified by monitoring ML solutions',
// 'Workbook: Reliable MLOps',
// 'Hands-On Lab: Building and Troubleshooting an ML Pipeline'
// ]
// },

          // Module 2
  //         {
  //           title: 'Version Control System / Source Code Management: Git',
  //           submodules: ['Getting Started with VCS/SCM',
  // 'What is Git, AWS CodeCommit and GitHub?',
  // 'About Version Control System and types',
  // 'Git Workflow',
  // 'Installing on Windows & Linux',
  // 'Getting Started with Git Commands',
  // 'Working with Branches',
  // 'Merging Branches',
  // 'Creating and Committing a Pull Request',
  // 'Working with Stash']
  //         },
          // Module 3
          // {
          //   title: 'Continuous Integration : Jenkins',
          //   submodules: ['Overview of Continuous Integration',
          //                 'Getting Started with Jenkins',
          //                 'Jenkins Architecture',
          //                 'Download, Installing, and Configuring Jenkins',
          //                 'Jenkins Management',
          //                 'Installing Jenkins Plugins',
          //                 'Creating Jenkins Jobs',
          //                 'Creating Jenkins Pipeline Jobs',
          //                 'Summary']
          // },
          // Module 4
  //         {
  //           title: 'Continuous Static Code Analysis : SonarQube',
  //           submodules: ['Getting Started with SonarQube',
  // 'Integrate SonarQube with Pipeline Jenkins & CodeBuild/CodePipeline',
  // 'Integrate SonarQube with GitHub',
  // 'Execute Code Quality using SonarQube',
  // 'Reliability',
  // 'Security',
  // 'Maintainability',
  // 'Security Review',
  // 'Coverage & Duplications',
  // 'Summary']
  //         },
          // Module 5
          // {
          //   title: 'Continuous Binary Code Repository using JFrog',
          //   submodules: ['Getting Started',
          //             'Download, Installing, and Configuring JFrog',
          //             'Integrate JFrog with VCS/SCM i.e. POM.xml',
          //             'Integrate JFrog with Maven',
          //             'Creating Jenkins Jobs & Publish artifact to JFrog repository',
          //             'Creating Jenkins Pipeline Jobs & Publish artifact to JFrog repository',
          //             'Summary']
          //                     },
                              
          //  {
          //   title: 'Continuous Infrastructure As A Code: Terraform',
          //   submodules: ['Getting Started with IaC',
          //               'Different Vendors Of IaC tools?',
          //               'What is Terraform?',
          //               'Core Concepts of Terraform',
          //               'Variables',
          //               'Modules',
          //               'State Files',
          //               'Create Virtual Machines using Terraform',
          //               'Create Create 3 Tier Architecture using',
          //               'Terraform',
          //               'Summary']
          // },
          //  {
          // title: 'Creating Machine Images : Packer',
          //   submodules: ['Getting Started with packer',
          //              'Install Packer on Windows & Linux',
          //             'Build an Image',
          //               'Variables',
          //                'Builders',
          //                'Provisioners',
          //                'Post-Provisioners',
          //               'Executing Shell Scripts',
          //                'Shell Script',
          //              'PowerShell Script',
          //               'Executing Ansible PlayBooks',
          //               'Summary']
          //  },
          // {
          //   title: 'Continuous Configuration Management : Ansible',
          //   submodules: ['What is Configuration Management?',
          //               'Different Types of Configuration Management',
          //               'Tools for Configuration Management',
          //               'What is Ansible? ',
          //               'History of Ansible',
          //               'Important Terms Used in Ansible',
          //               'Ansible Installation in Linux',
          //               'Ansible Ad-hoc Commands',
          //               'Ansible Playbooks',
          //               'Ansible Roles',
          //               'Summary']
          // },
          // Module 7
          // {
          //   title: 'Containerisation : Docker',
          //   submodules: ['Getting Started with Containers',
          //             'What is a Container? ',
          //             'List of Container Vendors',
          //             'Getting Started with Docker',
          //             'Docker Product',
          //             'Docker Architecture',
          //             'Docker Installation',
          //             'Docker Hub',
          //             'Docker Images',
          //             'Docker Networking',
          //             'Docker Compose',
          //             'Summary']
          //                     },
          // Module 8
          // {
          //   title: 'Container Orchestration : Kubernates',
          //   submodules: ['What is Cluster Orchestration or Container Orchestration?',
          //             'Different Types of Container Orchestration Vendors',
          //             'What is Kubernetes?',
          //             'Kubernetes Cluster Orchestration Architecture',
          //             'Kubernetes Components (Pods, Nodes, Service, Volume & Namespace)',
          //             'Create a 3-Node Cluster & Deploy a Simple Web Server (Nginx):',
          //             'Creating Cluster',
          //             'Adding Nodes to Cluster',
          //             'Create Nginx Deployment',
          //             'Create Nginx Service',
          //             'Describe Nginx Deployment',
          //             'Validate Nginx Deployment',
          //             'Access Website using Cluster IP and Node IP',
          //             'Summary']
          // },
          // Module 9
          {
            title: 'Project Works',
            submodules: ['AWS ',
                                      'AZURE ',
                                      'GCP ']
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