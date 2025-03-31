import { Component } from '@angular/core';
import { DeveopsdownloadformComponent } from '../../finops/deveopsdownloadform/deveopsdownloadform.component';
import { MatDialog } from '@angular/material/dialog';
// import { RegulardownloadformComponent } from '../../finops/regularCCdownload/regularcontent';

@Component({
  selector: 'awsmobilecc',
  templateUrl: './awsmobilecc.html',
  styleUrls: ['./awsmobilecc.css']
})
export class AWSMobileCourseContent {

  courses = [
    {
      title: 'AWS DevOps',
      modules: [
        // Course 2 modules and submodules
        // Module 1
        {
          title:'OS - Windows & Unix/Linux',
          submodules:['Unix & Linux History & Distributions',
            'Basic & Advanced Commands',
            'Run Levels',
            'Boot Process',
            'File System',
            'File & Directory Management',
            'Text Editors',
            'Permissions',
            'User & Group Management',
            'Package Management',
            'Controlling Services & Daemons',
            'Process Management',
            'Log Management',
            'WebServer - Windows IIS, Apache2, Nginx & Httpd',
            'Database Servers - MySQL, Mariadb & PostgreSQL'
          ]
        },
        {
          title:'AWS - Analytics Services',
          submodules:['Amazon Athena',
            'Amazon OpenSearch Service',
            'Amazon QuickSight',
            'Amazon EMR',
            'Amazon Kinesis Data Firehose',
            'Amazon Kinesis Data Streams'
          ]
        },
        {
          title:'AWS - Application Integration',
          submodules:['Amazon EventBridge (Amazon CloudWatch Events)',
            'Amazon AppFlow'
          ]
        },
        {
          title:'AWS - Compute',
          submodules:['AWS App Runner',
            'Amazon EC2',
            'Amazon EC2 Auto Scaling',
            'EC2 Image Builder',
            'AWS Elastic Beanstalk',
            'AWS Serverless Application Repository'
          ]
        },
        {
          title:'AWS - Container Services',
          submodules:['AWS App2Container',
            'AWS Copilot',
            'Amazon EKS Distro',
            'Amazon Elastic Container Registry (Amazon ECR)',
            'Amazon Elastic Container Service (Amazon ECS)',
            'Amazon Elastic Kubernetes Service (Amazon EKS)',
            'AWS Fargate',
            'Red Hat OpenShift Service on AWS (ROSA)'
          ]
        },
        {
          title:'AWS - Database Services',
          submodules:['Amazon Aurora',
            'Amazon Aurora Serverless v2',
            'AWS Database Migration Service (AWS DMS)',
            'Amazon DocumentDB (with MongoDB compatibility)',
            'Amazon DynamoDB',
            'Amazon ElastiCache',
            'Amazon MemoryDB for Redis',
            'Amazon RDS',
            'Amazon Redshift'
          ]
        },
        {
          title:'AWS - Storage Services',
          submodules:[
            'AWS Backup',
            'Amazon Elastic Block Store (Amazon EBS)',
            'AWS Elastic Disaster Recovery (CloudEndure Disaster Recovery)',
            'Amazon Elastic File System (Amazon EFS)',
            'Amazon FSx',
            'Amazon S3',
            'Amazon S3 Glacier',
            'AWS Storage Gateway'
          ]
        },
        {
          title:'AWS - Developer Tools',
          submodules:[
            'AWS Cloud Development Kit (AWS CDK)',
            'AWS CloudShell',
            'AWS CodeArtifact',
            'AWS CodeBuild',
            'AWS CodeCommit',
            'AWS CodeDeploy',
            'Amazon CodeGuru',
            'AWS CodePipeline',
            'AWS CodeStar',
            'AWS Command Line Interface (AWS CLI)',
            'AWS SDKs and Tools',
            'AWS X-Ray'
          ]
        },
        {
          title:'AWS - Management and Governance',
          submodules:[
            'AWS Auto Scaling',
            'AWS CloudFormation',
            'AWS CloudTrail',
            'Amazon CloudWatch',
            'Amazon CloudWatch Logs',
            'AWS Compute Optimizer',
            'AWS Config',
            'AWS Control Tower',
            'AWS Health',
            'AWS License Manager',
            'AWS OpsWorks',
            'AWS Organizations',
            'AWS Personal Health Dashboard',
            'AWS Resilience Hub',
            'AWS Systems Manager',
            'AWS Trusted Advisor'
          ]
        },
        {
          title:'AWS - Networking and Content Delivery',
          submodules:[
            'Amazon API Gateway',
            'AWS Client VPN',
            'Amazon CloudFront',
            'Elastic Load Balancing (ELB)',
            'AWS PrivateLink',
            'Amazon Route 53',
            'AWS Site-to-Site VPN',
            'AWS Transit Gateway',
            'Amazon VPC'
          ]
        },
        {
          title:'AWS - Security, Identity, and Compliance',
          submodules:[
            'AWS Certificate Manager (ACM)',
            'AWS CloudHSM',
            'Amazon Cognito',
            'Amazon Detective',
            'AWS Directory Service',
            'Amazon GuardDuty',
            'AWS Identity and Access Management (IAM)',
            'Amazon Inspector',
            'AWS Key Management Service (AWS KMS)',
            'Amazon Macie',
            'AWS Network Firewall',
            'AWS Resource Access Manager (AWS RAM)',
            'AWS Secrets Manager',
            'AWS Security Hub',
            'AWS Security Token Service (AWS STS)',
            'AWS Shield',
            'AWS Single Sign-On',
            'AWS WAF'
          ]
        },
        {
          title:'AWS - Serverless',
          submodules:[
            'AWS Lambda',
            'Amazon API Gateway',
            'AWS Step Functions',
            'Amazon Simple Email Service (SES)',
            'Amazon Simple Notification Service (Amazon SNS)',
            'Amazon Simple Queue Service (Amazon SQS)'
          ]
        },
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
          title: ' Build Tool: Apache Maven & Python Pip',
          submodules: ['Overview of Build Tools : Maven, Gradle, Ant,Pip',
            'Getting Started with Build Tools i.e. Maven',
            'Maven Lifecycles & Phases',
            'Maven Plugins & Repository',
            'Understanding the pom.xml & Settings.xml files',
            'Build Java Code using Maven Lifecycles',
            'Working with Branches',
            'Jfrog Integration with pom.xml',
            'SonarQube Integration with pom.xml',
            'Summary']
        },

        {
          title: 'Version Control System / Source Code Management: Git',
          submodules: ['Getting Started with VCS/SCM',
            'What is Git, AWS CodeCommit and GitHub?',
            'About Version Control System and types',
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
          title: 'Application Servers - Apache Tomcat',
          submodules: ['Overview of Application Servers',
            'Getting Started with Apache Tomcat',
            'Download, Installing and Configuring Apache Tomcat',
            'Enable Tomcat Pages Globally',
            'Configure Roles, Users, & Password in Apache Tomcat',
            'Deploy Code in Apache Tomcat using GUI',
            'Deploy Code in Apache Tomcat using Jenkins Pipeline',
            'Summary']
        },
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
          title: 'Continuous Monitoring : New Relic',
          submodules: ['Getting Started with Observability',
            'What is Observability/Monitoring?',
            'Types of Continuous Monitoring:',
            'Application Monitoring',
            'Infrastructure Monitoring',
            'Kubernetes Monitoring',
            'Log Management',
            'Errors inbox',
            'Synthetics Monitoring',
            'Browser Monitoring',
            'Mobile Monitoring',
            'Network Monitoring',
            'List of Continuous Monitoring Tools',
            'Configure Jobs',
            'Ping Monitoring in New Relic',
            'Simple Browser Monitoring in New Relic',
            'Scripted Monitoring in New Relic',
            'Getting Started with APM in NewRelic',
            'Configure APM in NewRelic',
            'Configure Infrastructure in NewRelic',
            'Creating Dashboard in NewRelic',
            'Summary']
        },
        {
          title: 'Migration Strategies',
          submodules: ['What is Migration?',
            'Different Types Of Migration Strategies:',
            'Rehosting',
            'Replatforming',
            'Repurchasing',
            'Refactoring',
            'Retiring',
            'Retaining',
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