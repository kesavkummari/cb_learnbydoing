import { Component } from '@angular/core';

@Component({
  selector: 'app-devops-course',
  templateUrl: './devops-course.component.html',
  styleUrls: ['./devops-course.component.css']
})
export class DevOpsCourseComponent {
  cloudServices = [
    {
      category: '1. Compute',
      aws: 'EC2, Elastic Beanstalk, Lambda, API Gateway',
      azure: 'VM, VM Scale Sets, Azure Functions, API gateway'
    },
    {
      category: '2. Storage',
      aws: 'S3, EBS, EFS',
      azure: 'Blob Storage, Disk Storage, File Share'
    },
    {
      category: '3. Networking',
      aws: 'VPC, ELB, Route 53, CloudFront',
      azure: 'VNet, Load Balancer, DNS Zone, Azure Front Door'
    },
    {
      category: '4. CI/CD',
      aws: 'CodeBuild, CodeDeploy, CodePipeline, Jenkins',
      azure: 'Azure Repos, Pipelines, Artifacts, Jenkins'
    },
    {
      category: '5. Infrastructure as Code (IaC)',
      aws: 'Terraform',
      azure: 'Terraform'
    },
    {
      category: '6. Container Services',
      aws: 'ECS, EKS, Fargate',
      azure: 'AKS, ACI'
    },
    {
      category: '7. Monitoring & Logging',
      aws: 'CloudWatch, CloudTrail, X-Ray, Prometheus, Grafana, NewRelic',
      azure: 'Azure Monitor, Log Analytics, App Insights, Prometheus, Grafana, NewRelic'
    },
    {
      category: '8. Secrets Management',
      aws: 'AWS Secrets Manager, SSM Parameter Store, HashiCorp Vault',
      azure: 'Azure Key Vault, HashiCorp Vault'
    },
    {
      category: '9. Identity & Access',
      aws: 'IAM',
      azure: 'Azure AD, RBAC'
    },
    {
      category: '10. Artifact Repositories',
      aws: 'CodeArtifact, ECR, Nexus, JFrog Artifactory',
      azure: 'Azure Artifacts, ACR, Nexus, JFrog Artifactory'
    },
    {
      category: '11. Security & Compliance',
      aws: 'AWS Config, GuardDuty, Inspector, SonarQube',
      azure: 'Defender for Cloud, Azure Policy, SonarQube'
    },
    {
      category: '12. Golden Images',
      aws: 'Hashicorp Packer',
      azure: 'Hashicorp Packer'
    },
    {
      category: '13. Messaging & Queues',
      aws: 'SQS, SNS, EventBridge',
      azure: 'Azure Service Bus, Event Grid, Queue Storage'
    },
    {
      category: '14. Database',
      aws: 'RDS, DynamoDB',
      azure: 'Azure SQL, Cosmos DB'
    },
    {
      category: '15. Observability',
      aws: 'CloudWatch Dashboards',
      azure: 'Azure Monitor Dashboards'
    },
    {
      category: '16. Cost Management',
      aws: 'AWS Budgets, Cost Explorer',
      azure: 'Azure Cost Management'
    },
    {
      category: '17. Source Code Management',
      aws: 'Git, GitHub, GitLab, Bitbucket, Azure Repos',
      azure: 'Git, GitHub, GitLab, Bitbucket, Azure Repos'
    },
    {
      category: '18. Configuration Management',
      aws: 'Ansible',
      azure: 'Ansible'
    },
    {
      category: '19. GitOps',
      aws: 'Argo CD, Flux',
      azure: 'Argo CD, Flux'
    },
    {
      category: '20. Collaboration Tools',
      aws: 'Jira, Confluence, Boards, MS Teams, Google Meet',
      azure: 'Jira, Confluence, Boards, MS Teams, Google Meet'
    }
  ];

  /**
   * Array of DevOps topics and tools used in modern software development and operations.
   * Each topic contains:
   * - category: The numbered category of the DevOps topic
   * - tools: Common tools and technologies used in this category
   * - purpose: Brief description of the category's main purpose
   */
  devOpsTopics = [
    {
      category: '1. OS Module',
      tools: 'Recorded Videos',
      status: '',
      duration: '2 Weeks',
      time: 'Self-paced'
    },
    {
      category: '2. Shell Scripting',
      tools: 'Recorded Videos',
      status: '',
      duration: '2 Weeks',
      time: 'Self-paced'
    },
    {
      category: '3. Python Scripting',
      tools: 'Recorded Videos',
      status: '',
      duration: '2 Weeks',
      time: 'Self-paced'
    },
    {
      category: '4. Live Projects',
      tools: 'Live Sessions',
      status: 'Every Sat & Sun',
      duration: '10 Hrs',
      time: '8 PM - 9 PM IST'
    },
    {
      category: '5. Resume Grooming',
      tools: 'Live Sessions',
      status: 'Every Saturday',
      duration: '5 Hrs',
      time: '7 PM - 8 PM IST'
    },
    {
      category: '6. DevOps With Multi-Cloud AWS & Azure)',
      tools: 'Live Sessions',
      status: '9th June 2025',
      duration: '8 Weeks',
      time: '8 PM - 9 PM IST'
    },
    {
      category: '7. Cloud Computing - AWS',
      tools: 'Live Sessions',
      status: '16th June 2025',
      duration: '3 Weeks',
      time: '7 PM - 8 PM IST'
    },

  ];
} 