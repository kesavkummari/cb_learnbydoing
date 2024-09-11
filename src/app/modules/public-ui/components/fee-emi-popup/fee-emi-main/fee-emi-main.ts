// component-a.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeeEMIComponent } from '../fee.emi.component';

@Component({
  selector: 'fee-emi-main',
  templateUrl: './fee-emi-main.html',
  styleUrls: ['./fee-emi-main.css']
})
export class FeeEMIMain {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(FeeEMIComponent, {
      width: '100%',
      data: { /* Pass data if needed */ }
    });
  }
}
