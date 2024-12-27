import { Component } from '@angular/core';

@Component({
  selector: 'course-contentmob',
  templateUrl: './course-contentmob.html',
  styleUrls: ['./course-contentmob.css']
})
export class CourseContentMob {
  courses = [
    {
      title: 'AWS Certified Cloud Practitioner',
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
            title: 'Compute',
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
            title: 'Storage',
              submodules: ['Amazon S3',
                'Amazon Elastic Block Store (Amazon EBS)',
                'Amazon Elastic File System (Amazon EFS)',
                'Amazon FSx for Windows File Server',
                'AWS Elastic Disaster Recovery (CloudEndure Disaster Recovery)']
                        },
          // Module 3
          {
            title: ' Database',
            submodules: ['Amazon RDS',
                            'Amazon DynamoDB',
                            'AWS Database Migration Service (AWS DMS)',
                            'Amazon Redshift']
                                    },
          // Module 4
          {
            title: 'Networking & Content',
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
            title: 'Containers',
            submodules: ['Amazon Elastic Container Registry (Amazon ECR)',
                    'Amazon Elastic Container Service (Amazon ECS)',
                    'Amazon Elastic Kubernetes Service (Amazon EKS)']
                            },
          // Module 6
          {
            title: 'Application Integration',
            submodules: ['Amazon EventBridge (Amazon CloudWatch Events)']
          },
          // Module 7
          {
            title: 'Developer Tools',
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
            title: 'Management and Governance',
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
            title: 'Serverless',
            submodules: ['AWS Lambda',
                    'Amazon Simple Email Service (SES)',
                    'Amazon Simple Notification Service (Amazon SNS)',
                    'AWS Step Functions']
                            },
          // Module 10
          {
            title: 'Security, Identity, and Compliance',
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