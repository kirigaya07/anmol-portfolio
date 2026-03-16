import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-started',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-it-started.component.html',
  styleUrl: './how-it-started.component.css'
})
export class HowItStartedComponent {

  headding: string = `How it started → how it's going`
  how: string = `Started with C++ and competitive programming at IIIT Senapati in 2022. Curiosity pulled me toward the web — built my first MERN app in 2024, then levelled up with Next.js and TypeScript. Since then: three internships, five shipped projects, and a genuine love for turning ideas into real software.`
  date: string = "2022 → Present"
}
