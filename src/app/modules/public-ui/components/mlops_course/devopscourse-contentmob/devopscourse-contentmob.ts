import { Component } from '@angular/core';

@Component({
  selector: 'devopscourse-contentmob',
  templateUrl: './devopscourse-contentmob.html',
  styleUrls: ['./devopscourse-contentmob.css']
})
export class DevOpsCourseContentMob {
  courses = [
    {
      title: 'AWS DEVOPS',
      modules: [
        // Course 2 modules and submodules
        // Module 1
        {
            title: 'OS Modules',
            submodules: ['Getting Started with OS',
                        'Linux File System',
                        'Text Editors',
                        'File permissions',
                        'User Administration',
                        'Package Management',
                        'Controlling Services & Daemons',
                          'Process Management',
                          'Log Management',
                          'Webserver',
                          'Application Server',
                          'Database']
                                },
          {
            title: 'Software Development Life Cycle : Agile - Scrum',
            submodules: ['What is Agile?',
                                'Agile Manifesto (4 Values & 12 Principles)',
                                'What is Scrum?',
                                'Agile Scrum Roles',
                                'Agile Scrum Ceremonies',
                                'Sprint Planning',
                                'Daily Standup',
                                'Sprint Backlog Refinement',
                                'Sprint Review',
                                'Sprint Retrospective',
                                'Product Backlog Grooming',
                                'Agile Scrum Artefacts',
                                'Agile Scrum Board',
                                'Create a Sprint using Jira/Azure Boards',
                                'Create Epic',
                                'Create Story',
                                'Create a Task',
                                'Summary']
          },
          // Module 2
          {
            title: 'Version Control System / Source Code Management: Git',
            submodules: ['What is Git, AWS CodeCommit, and GitHub?',
  'About Version Control Systems and Types',
  'Git Workflow',
  'Installing Git on Windows & Linux',
  'Getting Started with Git Commands',
  'Working with Branches',
  'Merging Branches',
  'Creating and Committing a Pull Request',
  'Working with Stash',
  'Summary']
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
                          'Creating Jenkins Declarative & Scripted Pipelines',
                          'End To End Java Project CI/CD Pipeline',
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
            submodules: ['Getting Started with Continuous Binary Code',
                      'Repository i.e. JFrog',
                      'JFrog Architecture',
                      'Download, Installing, and Configuring JFrog',
                      'Integrate JFrog with VCS/SCM i.e. POM.xml',
                      'Integrate JFrog with Maven',
                      'Creating Jenkins Jobs & Publish artifact to JFrog repository',
                      'Creating Jenkins Pipeline Jobs & Publish artifact to JFrog repository',
                      'Summary']
                              },
          // Module 6
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
            submodules: ['What is a Container? ',
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
            title: 'Continuous Monitoring : CloudWatch, New Relic & Nagios',
            submodules: ['Getting Started with Observability',
                                      'What is Observability/Monitoring?',
                                      'Types of Continuous Monitoring:',
                                      'Application Monitoring',
                                      'Infrastructure Monitoring',
                                      'Kubernetes Monitoring',
                                      'Log Management',
                                      'Browser Monitoring',
                                      'Mobile Monitoring',
                                      'Synthetics Monitoring',
                                      'Network Monitoring',
                                      'List of Continuous Monitoring Tools',
                                      'Configure Jobs',
                                      'Ping Monitoring in New Relic',
                                      'Simple Browser Monitoring in New Relic',
                                      'Scripted Monitoring in New Relic',
                                      'Getting Started with APM (Application Performance Monitoring) in New Relic',
                                      'Configure APM in New Relic',
                                      'Configure Infrastructure in New Relic',
                                      'Creating Dashboard in New Relic',
                                      'Summary']
                                              },
          // Module 10
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
            title: 'Migration Strategies',
            submodules: ['What is Migration?',
                    'Different Types Of Migration Strategies:',
                    'Rehosting, Replatforming',
                    'Repurchasing, Refactoring, Retiring & Retaining',
                    'Summary']
                            },
           {
            title: 'Deployment Strategies',
            submodules: ['What is Deployment?',
                'Different Types of Deployment Strategies:',
                'Recreate Deployment',
                'Ramped Deployment',
                'Blue/Green Deployment',
                'Canary Deployment',
                'A/B Testing Deployment',
                'Shadow Deployment',
                'Summary']
          },
          {
  title: 'AWS Services - Compute',
  submodules: [
    'Images',
    'EBS',
    'Security Groups',
    'Snapshots',
    'Creating Golden Images',
    'Amazon EC2'
  ]
},
{
  title: 'AWS Services - Storage',
  submodules: [
    'Amazon Elastic Block Store (Amazon EBS)',
    'Amazon Elastic File System (Amazon EFS)',
    'Amazon S3',
    
  ]
},
{
  title: 'AWS Services - Security, Identity, and Compliance',
  submodules: [
    'AWS Certificate Manager (ACM)',
    'AWS Identity and Access Management (IAM)',
    'AWS IAM Identity Center (AWS Single Sign-On)'
  ]
},
{
  title: 'AWS Services - Management & Governance',
  submodules: [
    'AWS Auto Scaling',
    'AWS CloudTrail',
    'Amazon CloudWatch',
    'AWS Compute Optimizer',
    'AWS Health Dashboard',
    'AWS Management Console',
    'AWS Organizations',
    'AWS Systems Manager',
    'AWS Trusted Advisor',
    'AWS Well-Architected Tool'
  ]
},
{
  title: 'AWS Services - Developer Tools',
  submodules: [
    'AWS CLI',
    'AWS Cloud Development Kit (AWS CDK)',
    'AWS CloudShell',
    'AWS CodeArtifact',
    'AWS CodeBuild',
    'AWS CodeCommit',
    'AWS CodeDeploy',
    'AWS CodePipeline',
    'AWS CodeStar',
    'End To End Java Project CI/CD Pipeline'
  ]
},
{
  title: 'AWS Services - Migration and Transfer',
  submodules: [
    'AWS Database Migration Service (AWS DMS)'
  ]
},
{
  title: 'AWS Services - Database',
  submodules: [
    'Amazon RDS',
    'Amazon DynamoDB'
  ]
},
{
  title: 'AWS Services - Networking and Content Delivery',
  submodules: [
    'Amazon CloudFront',
    'Amazon Route 53',
    'Amazon VPC',
    'Amazon VPC Peering'
  ]
},
{
  title: 'AWS Services - Serverless API Gateway, AWS Lambda, SES & SNS',
  submodules: [
    'API Gateway',
    'AWS Lambda',
    'Amazon SES (Simple Email Service)',
    'Amazon SNS (Simple Notification Service)'
  ]
}
        ]
      }
    // You can add more courses here if needed
  ];

  isCourseVisible: boolean[] = new Array(this.courses.length).fill(false);
  isModuleVisible: boolean[][] = [];

  constructor() {
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

}