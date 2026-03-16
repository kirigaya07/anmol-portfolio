import { Component } from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  showGraph = false;

  toggle(event: MouseEvent) {
    // Don't toggle when clicking the GitHub link
    if ((event.target as HTMLElement).closest('a')) return;
    this.showGraph = !this.showGraph;
  }
}
