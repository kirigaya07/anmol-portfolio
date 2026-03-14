import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ABOUT_ME, EDUCATION, WORK_EXPERIENCE } from '../data/about.data';
import { EducationItem, WorkExperience } from '../models/portfolio.models';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openPopup(company: WorkExperience): void {
    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: company,
    });
  }

  aboutme: string = ABOUT_ME;
  work: WorkExperience[] = WORK_EXPERIENCE;
  education: EducationItem[] = EDUCATION;
}
