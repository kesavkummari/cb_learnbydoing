// feature-module1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { AWSDevOpsComponent } from './Pages/aws/aws.component';
import { MlOpsComponent } from './Pages/mlops/mlops.component';
import { ContactUsComponent } from './components/contactus/contact.component';
import { BlogsComponent } from './components/blogs/blog.component'
import { Blog1Component } from './components/blogs-pages/blog1/blog1';
import { Blog2Component } from './components/blogs-pages/blog2/frugalarchitect';
import { Blog3Component } from './components/blogs-pages/blog3/ec2';
import { Blog4Component } from './components/blogs-pages/blog4/route53';
import { Blog5Component } from './components/blogs-pages/blog5/dynamodb';
import { Blog6Component } from './components/blogs-pages/blog6/s3';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AutoScalingComponent } from './components/blogs-pages/all-blogs/Amazon_Auto-Scalling/auto-scaling';
import { BedrockComponent } from './components/blogs-pages/all-blogs/Amazon_Bedrock/bedrock';
import { CertificateManagerComponent } from './components/blogs-pages/all-blogs/Amazon_Certificate-Manager/certificate-manager';
import { CloudFrontComponent } from './components/blogs-pages/all-blogs/Amazon_CloudFront/cloudfront';
import { CloudWatchComponent } from './components/blogs-pages/all-blogs/Amazon_CloudWatch_Logs/cloudwatch';
import { CodeCommitComponent } from './components/blogs-pages/all-blogs/Amazon_CodeCommit/cc';
import { CodeWhisperComponent } from './components/blogs-pages/all-blogs/Amazon_CodeWhisperer/codewhisper';
import { ElasticLoadBalancingComponent } from './components/blogs-pages/all-blogs/Amazon_Elastic-load-Balancing/elb';
import { IAMGroupComponent } from './components/blogs-pages/all-blogs/Amazon_IAm-Group/iamgroup';
import { IAMIdentityComponent } from './components/blogs-pages/all-blogs/Amazon_IAM-Identity/iamidentities';
import { IAMRoleComponent } from './components/blogs-pages/all-blogs/Amazon_IAM-Role/iamrole';
import { IAMUserComponent } from './components/blogs-pages/all-blogs/Amazon_IAM-User/iamuser';
import { AWSLambdaComponent } from './components/blogs-pages/all-blogs/Amazon_Lamda/awslambda';
import { AWSRDSComponent } from './components/blogs-pages/all-blogs/Amazon_RDS/awsrds';
import { Route53Component } from './components/blogs-pages/all-blogs/Amazon_Route53/route53';
import { SimpleNotificationComponent } from './components/blogs-pages/all-blogs/Amazon_Simple-notification-service(SNS)/simplenotificationservice';
import { StepFunctionComponent } from './components/blogs-pages/all-blogs/Amazon_step-Function/stepfunction';
import { GatewayComponent } from './components/blogs-pages/all-blogs/Amazon_Transit-Gateway/gateway';
import { VPCComponent } from './components/blogs-pages/all-blogs/Amazon_Virtual-private-cloud(vpc)/vpc';
import { VPCPeeringComponent } from './components/blogs-pages/all-blogs/Amazon_VPC-Peering/vpcpeering';
import { VPNComponent } from './components/blogs-pages/all-blogs/Amazon_VPN/vpn';
import { XRAYComponent } from './components/blogs-pages/all-blogs/Amazon_X-Ray/xray';
import { CodeDeployComponent } from './components/blogs-pages/all-blogs/AWS_CodeDeploy/codedeploy';
import { SageMakerComponent } from './components/blogs-pages/all-blogs/AWS_SageMaker/sagemaker';
import { RDSMYSQLComponent } from './components/blogs-pages/all-blogs/RDS_MYSQL/rdsmysql';
import { RoutingComponent } from './components/blogs-pages/all-blogs/Routing_polices/routing';
import { ServerlessComponent } from './components/blogs-pages/all-blogs/serverless_website/serverless';
  
const routes: Routes = [
  {path:'aws', component: AWSDevOpsComponent},
  {path:'aws-devops', component: MlOpsComponent},
  {path:'blogs', component: BlogsComponent},
  {path:'home', component: IntroPageComponent},
  { path:'contactus', component: ContactUsComponent },
  { path: 'blog1' , component : Blog1Component },
  { path: 'frugalarchitect' , component : Blog2Component },
  { path: 'Amazon-EC2' , component : Blog3Component },
  { path: 'Route-53' , component : Blog4Component },
  { path: 'AWS-DynamoDB' , component : Blog5Component },
  { path: 'Amazon-S3' , component : Blog6Component },
  { path: 'thank-you' , component : ThankyouComponent },
  { path: 'Auto-Scaling' , component : AutoScalingComponent },
  { path: 'Amazon-Bedrock' , component : BedrockComponent },
  { path: 'AWS-Certificate-Manager-Component' , component : CertificateManagerComponent },
  { path: 'AWS-CloudFront' , component : CloudFrontComponent },
  { path: 'AWS-Cloud-Watch' , component : CloudWatchComponent },
  { path: 'AWS-Code-Commit' , component : CodeCommitComponent },
  { path: 'AWS-Code-Whisper' , component : CodeWhisperComponent },
  { path: 'Elastic-Load-Balancing' , component : ElasticLoadBalancingComponent },
  { path: 'IAM-Group' , component : IAMGroupComponent },
  { path: 'IAM-Identity' , component : IAMIdentityComponent },
  { path: 'IAM-Role' , component : IAMRoleComponent },
  { path: 'IAM-User' , component : IAMUserComponent },
  { path: 'AWS-Lambda' , component : AWSLambdaComponent },
  { path: 'AWS-RDS' , component : AWSRDSComponent },
  { path: 'AWS-Route-53' , component : Route53Component },
  { path: 'AWS-Simple-Notification-Service' , component : SimpleNotificationComponent },
  { path: 'Step-Function' , component : StepFunctionComponent },
  { path: 'Amazon-Transit-Gateway' , component : GatewayComponent },
  { path: 'Amazon-Virtual-Private-Cloud-VPC' , component : VPCComponent },
  { path: 'Amazon-Virtual-Private-Cloud-Peering' , component : VPCPeeringComponent },
  { path: 'VPNComponent' , component : VPNComponent },
  { path: 'Amazon-X-Ray' , component : XRAYComponent },
  { path: 'Amazon-Code-Deploy' , component : CodeDeployComponent },
  { path: 'SageMaker' , component : SageMakerComponent },
  { path: 'RDS-MYSQL' , component : RDSMYSQLComponent },
  { path: 'Routing-Policies-in-Amazon-Route53' , component : RoutingComponent },
  { path: 'AWS-Serverless' , component : ServerlessComponent },
  
  


  
  
  {
    path: '',
    component: IntroPageComponent,
    // Add guards and resolve as needed
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicUiRoutingModule { }
