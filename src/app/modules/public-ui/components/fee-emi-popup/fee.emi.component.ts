import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fee-emi',
  templateUrl: './fee.emi.component.html',
  styleUrls: ['./fee.emi.component.css'] 
})
export class FeeEMIComponent {
  constructor(public dialogRef: MatDialogRef<FeeEMIComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
