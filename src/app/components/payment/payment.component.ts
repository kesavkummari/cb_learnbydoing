import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  bankDetails = {
    accountNumber: '41352788357',
    accountName: 'Cloudbinary',
    bankName: 'SBI',
    ifscCode: 'SBIN001301220308',
    branch: 'Umesh Chandra Statue, Sanjeeva Reddy Nagar',
    address: '254, 255 / 3Rt, Sanjeeva Reddy Nagar Mai, Road, Hyderabad, Umesh Chandra Statue, Telangana (TEL), 500038'
  };

  companyDetails = {
    phone: '+91 9392743006',
    email: 'info@cloudbinary.in',
    website: 'https://cloudbinary.in',
    address: '7-1-619/A/3/A, Plot No 48, 1st Floor, SAP Street, Ameerpet, Hyderabad, TG-500016, India.'
  };

  trainerDetails = {
    name: 'Kesav Kummari',
    phone: '+91 9392743006'
  };
} 