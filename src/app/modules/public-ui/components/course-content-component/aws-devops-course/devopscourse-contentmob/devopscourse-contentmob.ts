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
      title: 'DEVOPS',
      modules: [
        // Course 2 modules and submodules
        // Module 1
//         {
//           title: 'Getting Started with OS',
//           submodules: [ 'Unix & Linux History & Distributions',
//    'Basic & Advanced Commands',
//    'Run Levels',
//    'Boot Process',
//    'File System',
//    'File & Directory Management',
//    'Text Editors',
//    'Permissions',
//    'User & Group Management',
//    'Package Management',
//    'Controlling Services & Daemons',
//    'Process Management',
//    'Log Management',
//    'Web Servers - Windows IIS, Apache2, Nginx & Httpd',
//    'Database Servers - MySQL, Mariadb & PostgreSQL']
//                               },
                                
// {
//   title: 'AWS Services - Application Integration',
//   submodules: [
//     'Amazon EventBridge (Amazon CloudWatch Events)' 
//   ]
// },
// {
//   title: 'AWS Services - Compute',
//   submodules: [
//     'Amazon EC2',
//     'Amazon EC2 Auto Scaling',
//     'AWS Elastic Beanstalk'
//   ]
// },

// {
//   title: 'AWS Services - Database',
//   submodules: [
//     'AWS Database Migration Service (AWS DMS)',
//     'Amazon DynamoDB',
//     'Amazon RDS',
//     'Amazon Redshift'
//   ]
// },

// {
//   title: 'AWS Services - Storage',
//   submodules: [

//     'Amazon Elastic Block Store (Amazon EBS)',
//     'Amazon Elastic File System (Amazon EFS)',
//     'Amazon S3'
//   ]
// },

// {
//   title: 'AWS Services - Developer Tools',
//   submodules: [
//     'AWS Cloud Development Kit (AWS CDK)',
//     'AWS CloudShell',
//     'AWS CodeArtifact',
//     'AWS CodeBuild',
//     'AWS CodeCommit',
//     'AWS CodeDeploy',
//     'AWS CodePipeline',
//     'AWS CodeStar',
//     'AWS Command Line Interface (AWS CLI)',
//     'AWS SDKs and Tools'
//   ]
// },

//           {
//             title: 'AWS Services - Serverless',
//             submodules: ['AWS Lambda',
// 'Amazon API Gateway',
// 'AWS Step Functions',
// 'Amazon Simple Email Service (SES)',
// 'Amazon Simple Notification Service (Amazon SNS)'
// ]
//           },

//           {
//   title: 'AWS Services - Management & Governance',
//   submodules: [
//     'AWS Auto Scaling',
//     'AWS CloudTrail',
//     'Amazon CloudWatch',
//     'Amazon CloudWatch Logs',
//     'AWS Compute Optimizer',
//     'AWS Health',
//     'AWS Organizations',
//     'AWS Personal Health Dashboard',
//     'AWS Systems Manager',
//     'AWS Trusted Advisor'   
//   ]
// },

// {
//   title: 'AWS Services - Networking and Content Delivery',
//   submodules: [
//     'Amazon CloudFront',
//     'Amazon Route 53',
//     'Amazon VPC',
//     'Amazon VPC Peering',
//     'Elastic Load Balancing (ELB)'
//   ]
// },

// {
//   title: 'AWS Services - Security, Identity, and Compliance ',
//   submodules: [
//     'AWS Certificate Manager (ACM)', 
//     'AWS Identity and Access Management (IAM)', 
//     'AWS Single Sign-On',
//     'AWS Key Management Service (AWS KMS)',
//     'AWS Secrets Manager',
//     'AWS Security Token Service (AWS STS)'

//   ]
// },
           {
            title: 'Software Development Life Cycle : Agile - Scrum',
            submodules: ['Getting Started with SDLC',
'What is Agile?',
'Agile Manifesto(4 Values & 12 Principles)',
'What is Scrum?',
'Agile Scrum Roles',
'Agile Scrum Ceremonies:',
 'Sprint Planning',
 'Daily Standup',
 'Sprint Backlog Refinement',
 'Sprint Review',
 'Sprint Retrospective',
 'Product Backlog Grooming',
'Agile Scrum Artefacts',
 'Agile Scrum Board',
'Create a Sprint using Jira/Azure Boards:',
 '- Create Epic',
 '- Create Story',
 '- Create a Task',
'Summary']
          },

          {
  title: 'Build Tool: Apache Maven & Python Pip',
  submodules: [
'Overview of Build Tools : Maven, Gradle, Ant, Pip',
'Getting Started with Build Tools i.e. Maven',
'Maven Lifecycles & Phases',
'Maven Plugins & Repository',
'Understanding the pom.xml & Settings.xml files',
'Build Java Code using Maven Lifecycles',
'Jfrog Integration with pom.xml',
'SonarQube Integration with pom.xml',
'Summary']
},

          {
  title: 'Application Servers - Apache Tomcat',
  submodules: [
'Overview of Application Servers',
'Getting Started with Apache Tomcat',
'Download, Installing and Configuring Apache Tomcat',
'Enable Tomcat Pages Globally',
'Configure Roles, Users, & Password in Apache Tomcat',
'Deploy Code in Apache Tomcat using GUI',
'Deploy Code in Apache Tomcat using Jenkins Pipeline',
'Summary']
},

          // Module 2
          {
            title: 'Version Control System / Source Code Management: Git',
            submodules: ['Getting Started with VCS/SCM',
  'What is Git, AWS CodeCommit and GitHub?',
  'About Version Control System and types',
  'Git Workflow',
  'Installing on Windows & Linux',
  'Getting Started with Git Commands',
  'Working with Branches',
  'Merging Branches',
  'Creating and Committing a Pull Request',
  'Working with Stash']
          },
          // Module 3
          {
            title: 'Continuous Integration : Jenkins',
            submodules: ['Overview of Continuous Integration',
                          'Getting Started with Jenkins',
                          'Jenkins Architecture',
                          'Download, Installing, and Configuring Jenkins',
                          'Jenkins Management',
                          'Installing Jenkins Plugins',
                          'Creating Jenkins Jobs',
                          'Creating Jenkins Pipeline Jobs',
                          'Summary']
          },
          // Module 4
          {
            title: 'Continuous Static Code Analysis : SonarQube',
            submodules: ['Getting Started with SonarQube',
  'Integrate SonarQube with Pipeline Jenkins & CodeBuild/CodePipeline',
  'Integrate SonarQube with GitHub',
  'Execute Code Quality using SonarQube',
  'Reliability',
  'Security',
  'Maintainability',
  'Security Review',
  'Coverage & Duplications',
  'Summary']
          },
          // Module 5
          {
            title: 'Continuous Binary Code Repository using JFrog',
            submodules: ['Getting Started',
                      'Download, Installing, and Configuring JFrog',
                      'Integrate JFrog with VCS/SCM i.e. POM.xml',
                      'Integrate JFrog with Maven',
                      'Creating Jenkins Jobs & Publish artifact to JFrog repository',
                      'Creating Jenkins Pipeline Jobs & Publish artifact to JFrog repository',
                      'Summary']
                              },
                              
           {
            title: 'Continuous Infrastructure As A Code: Terraform',
            submodules: ['Getting Started with IaC',
                        'Different Vendors Of IaC tools?',
                        'What is Terraform?',
                        'Core Concepts of Terraform',
                        'Variables',
                        'Modules',
                        'State Files',
                        'Create Virtual Machines using Terraform',
                        'Create Create 3 Tier Architecture using',
                        'Terraform',
                        'Summary']
          },
           {
          title: 'Creating Machine Images : Packer',
            submodules: ['Getting Started with packer',
                       'Install Packer on Windows & Linux',
                      'Build an Image',
                        'Variables',
                         'Builders',
                         'Provisioners',
                         'Post-Provisioners',
                        'Executing Shell Scripts',
                         'Shell Script',
                       'PowerShell Script',
                        'Executing Ansible PlayBooks',
                        'Summary']
           },
          {
            title: 'Continuous Configuration Management : Ansible',
            submodules: ['What is Configuration Management?',
                        'Different Types of Configuration Management',
                        'Tools for Configuration Management',
                        'What is Ansible? ',
                        'History of Ansible',
                        'Important Terms Used in Ansible',
                        'Ansible Installation in Linux',
                        'Ansible Ad-hoc Commands',
                        'Ansible Playbooks',
                        'Ansible Roles',
                        'Summary']
          },
          // Module 7
          {
            title: 'Containerisation : Docker',
            submodules: ['Getting Started with Containers',
                      'What is a Container? ',
                      'List of Container Vendors',
                      'Getting Started with Docker',
                      'Docker Product',
                      'Docker Architecture',
                      'Docker Installation',
                      'Docker Hub',
                      'Docker Images',
                      'Docker Networking',
                      'Docker Compose',
                      'Summary']
                              },
          // Module 8
          {
            title: 'Container Orchestration : Kubernates',
            submodules: ['What is Cluster Orchestration or Container Orchestration?',
                      'Different Types of Container Orchestration Vendors',
                      'What is Kubernetes?',
                      'Kubernetes Cluster Orchestration Architecture',
                      'Kubernetes Components (Pods, Nodes, Service, Volume & Namespace)',
                      'Create a 3-Node Cluster & Deploy a Simple Web Server (Nginx):',
                      'Creating Cluster',
                      'Adding Nodes to Cluster',
                      'Create Nginx Deployment',
                      'Create Nginx Service',
                      'Describe Nginx Deployment',
                      'Validate Nginx Deployment',
                      'Access Website using Cluster IP and Node IP',
                      'Summary']
          },
          // Module 9
          {
            title: 'Continuous Monitoring : New Relic',
            submodules: ['Getting Started with Observability',
                                      'What is Observability/Monitoring?',
                                      'Types of Continuous Monitoring:',
                                      'Application Monitoring',
                                      'Infrastructure Monitoring',
                                      'Kubernetes Monitoring',
                                      'Log Management',
                                      'Errors inbox',
                                      'Browser Monitoring',
                                      'Mobile Monitoring',
                                      'Synthetics Monitoring',
                                      'Network Monitoring',
                                      'List of Continuous Monitoring Tools',
                                      'Configure Jobs',
                                      'Ping Monitoring in New Relic',
                                      'Simple Browser Monitoring in New Relic',
                                      'Scripted Monitoring in New Relic',
                                      'Summary']
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