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
      title: 'AWS MLOps',
      modules: [
        // Course 2 modules and submodules
        // Module 1
        {
          title: 'Getting Started with Windows & Linux',
          submodules: [ 'Windows',
   'Linux & Unix Distributions',]
                              },
                                
{
  title: 'Cloud Computing with AWS',
  submodules: [
    'Machine Learning Services : 1. SageMaker Studio, 2. SageMaker Pipelines, 3. SageMaker Ground Truth, 4. SageMaker Model Monitor, 5. SageMaker Feature Store & 6. SageMaker Debugger',
    'Data Processing and Storage : 1. S3, 2. Redshift, 3. RDS, 4. Glue & 5. Athena',
    'Compute Services : 1. EC2, 2. Lambda, 3. ECS, 4. EKS',
    'Analytics and Monitoring : 1. CloudWatch, 2. CloudTrail, 3. Kinesis, 4. Glue DataBrew',
    'Security and Identity : 1. IAM, 2. KMS, 3. Secrets Manager',
    'Machine Learning Specific Services: 1. Comprehend, 2. Rekognition, 3. Lex, 4. Polly, 5. Translate & 6. Transcribe', 
  ]
},
{
  title: 'DevOps & CD/CD Pipelines',
  submodules: [
    'CodeCommit',
    'CodeDeploy',
    'CodePipeline',
    'CloudFormation',
  ]
},

{
  title: 'Python For Data Science & MLOps',
  submodules: [
    'Python For Data Science',
    'Python For MLOps'
  ]
},

{
  title: 'Docker & Kubernetes',
  submodules: [

    'Docker',
    'Kubernetes'
  ]
},

{
  title: 'Introduction to MLOps',
  submodules: [
    'Processes',
    'People',
    'Technology',
    'Security and governance',
    'MLOps maturity model'
  ]
},

          {
            title: 'Initial MLOps: Experimentation Environments in SageMaker Studio',
            submodules: [
'Bringing MLOps to experimentation',
'Setting up the ML experimentation environment',
'Demonstration: Creating and Updating a Lifecycle Configuration for SageMaker Studio',
'Hands-On Lab: Provisioning a SageMaker Studio Environment with the AWS Service Catalog',
'Workbook: Initial MLOps'
]
          },

          {
  title: 'Repeatable MLOps: Repositories',
  submodules: [
    'Managing data for MLOps',
    'Version control of ML models',
    'Code repositories in ML' 
  ]
},

{
  title: 'Repeatable MLOps: Orchestration',
  submodules: [
    'ML pipelines',
    'Demonstration: Using SageMaker Pipelines to Orchestrate Model Building Pipelines'
  ]
},

{
  title: 'Repeatable MLOps: Orchestration (continued)',
  submodules: [
    'End-to-end orchestration with AWS Step Functions', 
    'Hands-On Lab: Automating a Workflow with Step Functions', 
    'End-to-end orchestration with SageMaker Projects',
    'Demonstration: Standardizing an End-to-End ML Pipeline with SageMaker Projects',
    'Using third-party tools for repeatability',
    'Governance and security',
    'Demonstration: Exploring Security Best Practices for SageMaker',
    'Workbook: Repeatable MLOps',
    'Demonstration: Exploring Human-in-the-Loop During Inference'

  ]
},
           {
            title: 'Reliable MLOps: Scaling and Testing',
            submodules: ['Scaling and multi-account strategies',
'Testing and traffic-shifting',
'Demonstration: Using SageMaker Inference Recommender',
'Hands-On Lab: Testing Model Variants',
'Summary']
          },

          {
  title: 'Reliable MLOps: Scaling and Testing (continued)',
  submodules: [
'Hands-On Lab: Shifting Traffic',
'Workbook: Multi-account strategies'
]
},

          {
  title: 'Reliable MLOps: Monitoring',
  submodules: [
'The importance of monitoring in ML',
'Hands-On Lab: Monitoring a Model for Data Drift',
'Operations considerations for model monitoring',
'Remediating problems identified by monitoring ML solutions',
'Workbook: Reliable MLOps',
'Hands-On Lab: Building and Troubleshooting an ML Pipeline'
]
},

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
            title: 'Project Work ',
            submodules: ['Project-1 : ',
                                      'Project-2 : ',
                                      'Project-3 : ']
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