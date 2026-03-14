import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkExperience } from '../models/portfolio.models';

@Component({
  selector: 'app-work-info',
  standalone: true,
  imports: [],
  templateUrl: './work-info.component.html',
  styleUrl: './work-info.component.css',
})
export class WorkInfoComponent {
  details: WorkExperience;

  constructor(
    @Inject(MAT_DIALOG_DATA) public companyData: WorkExperience,
    private dialogRef: MatDialogRef<WorkInfoComponent>
  ) {
    this.details = companyData;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
