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
      title: 'Cloud Engineer on Multi-Cloud',
      modules: [
        // Course 2 modules and submodules
        // Module 1
        {
          title: 'Module 1 : Analytics',
          submodules: [ 
            'AWS: Amazon EMR, AWS Glue, Amazon Kinesis, Amazon QuickSight, AWS Lake Formation',
'AZURE: Azure Synapse Analytics, Azure HDInsight, Azure Databricks, Power BI',
'GCP: BigQuery, Cloud Dataflow, Cloud Dataproc, Cloud Datalab'
]
},
                                
{
  title: 'Module 2 : Application Integration',
  submodules: [
    'AWS: Amazon SQS, Amazon SNS, Amazon MQ, AWS Step Functions, Amazon EventBridge',
    'AZURE: Azure Service Bus, Event Grid, Logic Apps, API Management',
    'GCP: Pub/Sub, Cloud Tasks, Cloud Endpoints, Cloud Scheduler'
  ]
},
{
  title: 'Module 3 : Compute',
  submodules: [
    'AWS: EC2, Lambda, Elastic Beanstalk, AWS Fargate',
'AZURE: Azure Virtual Machines, Azure Functions, Azure App Service, Azure Batch',
'GCP: Compute Engine, Cloud Functions, App Engine, GKE Autopilot'
  ]
},

{
  title: 'Module 4 : Containers',
  submodules: [
    'AWS: Amazon EKS, Amazon ECS, AWS Fargate',
'AZURE: Azure Kubernetes Service (AKS), Azure Container Instances, Azure Red Hat OpenShift',
'GCP: Google Kubernetes Engine (GKE), Cloud Run, Artifact Registry',
  ]
},

{
  title: 'Module 5 : Database',
  submodules: [
    'AWS: Amazon RDS, Amazon DynamoDB, Amazon Aurora, Amazon Redshift',
'AZURE: Azure SQL Database, Cosmos DB, Azure Database for MySQL/PostgreSQL',
'GCP: Cloud SQL, Firestore, Cloud Spanner, Bigtable',
  ]
},

{
  title: 'Module 6 : Developer Tools',
  submodules: [
    'AWS: AWS CodeCommit, CodeBuild, CodeDeploy, CodePipeline, Cloud9',
    'AZURE: Azure DevOps, Visual Studio App Center, GitHub Actions',
    'GCP: Cloud Build, Cloud Source Repositories, Artifact Registry'
  ]
},

          {
            title: 'Module 7 : Management & Governance',
            submodules: [
'AWS: CloudWatch, CloudTrail, AWS Config, AWS Systems Manager, AWS Trusted Advisor',
'AZURE: Azure Monitor, Azure Policy, Azure Automation, Azure Cost Management',
'GCP: Cloud Monitoring, Cloud Logging, Resource Manager, Cloud Console'
]
          },

          {
  title: 'Module 8: Migration & Transfer',
  submodules: [
    'AWS: AWS DMS, AWS Snowball, AWS Transfer Family',
    'AZURE: Azure Migrate, Azure Site Recovery, Data Box',
    'GCP: Transfer Appliance, Migrate for Compute Engine, BigQuery Data Transfer Service' 
  ]
},

{
  title: 'Module 9: Networking & Content Delivery',
  submodules: [
'AWS: Amazon VPC, Amazon CloudFront, Elastic Load Balancing (ELB), Route 53',
'AZURE: Azure Virtual Network, Azure Front Door, Azure Load Balancer, Traffic Manager',
'Virtual Private Cloud (VPC), Cloud CDN, Cloud Load Balancing, Cloud DNS'
  ]
},

{
  title: 'Module 10: Security, Identity, & Compliance',
  submodules: [
    'AWS: AWS IAM, AWS KMS, AWS Shield, AWS WAF, AWS Secrets Manager', 
    'AZURE: Azure Active Directory, Azure Security Center, Azure Key Vault, Azure DDoS Protection', 
    'GCP: Cloud IAM, Cloud KMS, Cloud Armor, Cloud Identity, Secret Manager'
  ]
},
{
  title: 'Module 11: Storage',
  submodules: [
    'AWS: Amazon S3, Amazon EBS, Amazon EFS, AWS Backup', 
    'AZURE: Azure Blob Storage, Azure Files, Azure Disk Storage, Azure Backup', 
    'GCP: Cloud Storage, Persistent Disk, Filestore, Backup and DR'



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