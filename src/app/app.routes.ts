import { ProjectsComponent } from './projects/projects.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TechToolsComponent } from './tech-tools/tech-tools.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Anmol | Full Stack Developer',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About · Anmol',
  },
  {
    path: 'tools',
    component: TechToolsComponent,
    title: 'Tools · Anmol',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects · Anmol',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 · Anmol',
  },
];
