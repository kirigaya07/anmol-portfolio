import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  CODING_PROFILES,
  CODING_PROFILES_INTRO,
} from '../../data/coding-profiles.data';

@Component({
  selector: 'app-coding-profiles',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './coding-profiles.component.html',
  styleUrl: './coding-profiles.component.css',
})
export class CodingProfilesComponent implements OnInit {
  title = 'Coding Profiles';
  intro = CODING_PROFILES_INTRO;
  profiles = CODING_PROFILES;
  isLoading = true;

  ngOnInit(): void {
    // Simulate loading for demo purposes
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
