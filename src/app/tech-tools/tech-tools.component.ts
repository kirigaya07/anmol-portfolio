import { Component } from '@angular/core';
import { TOOLS_DESCRIPTION, TOOLS_ITEMS } from '../data/tech-tools.data';
import { ToolItem } from '../models/portfolio.models';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css',
})
export class TechToolsComponent {
  tools: string = TOOLS_DESCRIPTION;
  items: ToolItem[] = TOOLS_ITEMS;
}
