import { Component } from '@angular/core';

@Component({
  selector: 'course-contentmob',
  templateUrl: './course-contentmob.html',
  styleUrls: ['./course-contentmob.css']
})
export class CourseContentMob {
   
    courses = [
      {
        title: 'OS [Windows & Linux]',
        modules: [
          {
            title: 'Getting Started with OS',
             submodules: [
      'Unix & Linux History & Distributions',
      'Basic & Advanced Commands',
      'Run Levels',
      'Boot Process'
    ]
          },
          {
            title: 'Linux File System',
            submodules: ['File system Hierarchy',
            'Top level directory',
            'Configuration, home, root directories',
            'Directories and functions']
          },
          // Add more modules with submodules
          // Module 3
          {
            title: 'Text Editors',
            submodules: ['GUI vs CLI Text editors',
                  'Vi/Vim',
                  'Create, Save, and Delete a file in Vi/Vim',
                  'Create, Save, and Delete a file in Vi/Vim',
                  'Operation Modes in Vi/Vim',
                  'Insert-mode commands',
                  'Execute mode shortcuts']
          },
          // Module 4
          {
            title: 'File permissions',
            submodules: ['File Permission levels',
                  'Different modes of file permissions',
                  'Ownership']
          },
          // Module 5
          {
            title: 'User Administration',
            submodules: ['Creating User',
              'Creating groups',
              'Managing the users and groups']
          },
          // Module 6
          {
            title: 'Package Management',
            submodules: ['Distribution and Package Management',
              'Package repositories',
              'Yum and Apt-get']
                      },
          // Module 7
          {
            title: 'Controlling Services & Daemons',
            submodules: ['Understating Deamons and services',
                'Controlling the Deamons',
                'Controlling services and Deamon commands']
          },
          // Module 8
          {
            title: 'Process Management',
            submodules: ['Foreground and background process',
              'Parent and Child process',
              'Deamon and zombie process',
              'Process management commands']
                      },
          // Module 9
          {
            title: 'Log Management',
            submodules: ['Logs directory',
                            'Syslogs',
                            'Follow tag',
                            'Logs with journalctl']
                           },
          // Module 10
          {
            title: 'Webserver',
            submodules: ['Windows IIS',
                'Apache2',
                'Nginx',
                'Httpd']
          },
           {
            title: 'Application Server',
            submodules: ['Apache Tomcat']
          },
           {
            title: 'Database',
            submodules: ['RDBMS (MySQL)',
            'PostgreSQL']
          },
           {
            title: 'Scripting',
            submodules: ['Different types of Shells',
                          '/bin/bash and switching between shells',
                         'Basics of Power-shell & Shell',
                         'Executing shell script']
          }
        ]
      },
      {
        title: 'AWS DOP - CO2',
        modules: [
          // Course 2 modules and submodules
          // Module 1
          {
            title: 'AWS Services - Compute',
            submodules: ['Amazon EC2',
                        'Images',
                        'EBS',
                        'Security Groups',
                        'Snapshots',
                        'Creating Golden Images',
                        'Amazon EC2 Auto Scaling',
                        'EC2 Image Builder',
                        'AWS Elastic Beanstalk']
                                },
          // Module 2
          {
            title: 'AWS Services - Storage',
              submodules: ['Amazon S3',
                'Amazon Elastic Block Store (Amazon EBS)',
                'Amazon Elastic File System (Amazon EFS)',
                'Amazon FSx for Windows File Server',
                'AWS Elastic Disaster Recovery (CloudEndure Disaster Recovery)']
                        },
          // Module 3
          {
            title: ' AWS Services - Database',
            submodules: ['Amazon RDS',
                            'Amazon DynamoDB',
                            'AWS Database Migration Service (AWS DMS)',
                            'Amazon Redshift']
                                    },
          // Module 4
          {
            title: 'AWS Services - Networking & Content',
            submodules: ['Amazon API Gateway',
                          'AWS Client VPN',
                          'Amazon CloudFront',
                          'Elastic Load Balancing (ELB)',
                          'AWS PrivateLink',
                          'Amazon Route 53',
                          'AWS Site-to-Site VPN',
                          'AWS Transit Gateway',
                          'Amazon VPC',
                          'Amazon VPC Peering']
                                  },
          // Module 5
          {
            title: 'AWS Services - Containers',
            submodules: ['Amazon Elastic Container Registry (Amazon ECR)',
                    'Amazon Elastic Container Service (Amazon ECS)',
                    'Amazon Elastic Kubernetes Service (Amazon EKS)']
                            },
          // Module 6
          {
            title: 'AWS Services - Application Integration',
            submodules: ['Amazon EventBridge (Amazon CloudWatch Events)']
          },
          // Module 7
          {
            title: 'AWS Services - Developer Tools',
            submodules: ['AWS CLI',
                            'AWS Cloud Development Kit (AWS CDK)',
                            'AWS CloudShell',
                            'AWS CodeArtifact',
                            'AWS CodeBuild',
                            'AWS CodeCommit',
                            'AWS CodeDeploy',
                            'AWS CodePipeline',
                            'AWS CodeStar',
                            'End To End Java Project CI/CD Pipeline']
                                    },
          // Module 8
          {
            title: 'AWS Services - Management & Governance',
            submodules: ['AWS CloudFormation',
                        'AWS CloudTrail',
                        'Amazon CloudWatch & Logs',
                        'AWS Compute Optimiser',
                        'AWS Health',
                        'AWS OpsWorks',
                        'AWS Organisations',
                        'AWS Systems Manager',
                        'AWS Trusted Advisor']
                                },
          // Module 9
          {
            title: 'AWS Services - Serverless',
            submodules: ['AWS Lambda',
                    'Amazon Simple Email Service (SES)',
                    'Amazon Simple Notification Service (Amazon SNS)',
                    'AWS Step Functions']
                            },
          // Module 10
          {
            title: 'AWS Services - Security, Identity, and Compliance',
            submodules: ['AWS Certificate Manager (ACM)',
                              'AWS CloudHSM',
                              'Amazon Cognito',
                              'Amazon Detective',
                              'AWS Directory Service',
                              'Amazon GuardDuty',
                              'AWS IAM Identity Center (AWS Single Sign-On)',
                              'AWS Identity and Access Management (IAM)',
                              'Amazon Inspector',
                              'AWS Key Management Service (AWS KMS)',
                              'AWS Security Token Service (AWS STS)',
                              'AWS Shield',
                              'AWS WAF']
          }
        ]
      },
      {
        title: 'DevOps',
        modules: [
          // Course 3 modules and submodules
          // Module 1
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
          }
        ]
      }
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