import { Component } from '@angular/core';

interface ProjectTech {
  name: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  github: string | false;
  view: string | false;
  status: boolean;
  date: string;
  demo: boolean;
  personal: boolean;
  imgLoaded: boolean;
  tech: ProjectTech[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  selectedFilter = 'All';

  projects: Project[] = [
    {
      name: 'Zyflow',
      description:
        'Teams were losing track of tasks across scattered tools. Zyflow brings everything into one place — a fast, keyboard-friendly workflow board built with Next.js and TypeScript that keeps individuals and teams focused.',
      image: 'assets/img/zyflow.png',
      github: 'https://github.com/kirigaya07/Zyflow',
      view: 'https://zyflow-gold.vercel.app/',
      status: true,
      date: 'October - 2025',
      demo: false,
      personal: true,
      imgLoaded: false,
      tech: [
        { name: 'Next.js', image: 'assets/img/nextjs.svg' },
        { name: 'React', image: 'assets/img/reactjs.svg' },
        { name: 'Typescript', image: 'assets/img/typescript.svg' },
        { name: 'Tailwind', image: 'assets/img/tailwindcss.svg' },
        { name: 'Google Cloud', image: 'assets/img/googlecloud.svg' },
      ],
    },
    {
      name: 'AspireAI',
      description:
        'Job seekers struggle with generic advice that doesn\'t reflect their actual profile. AspireAI gives personalized, AI-driven guidance — from resume building to mock interviews — so every user gets a career plan built around them.',
      image: 'assets/img/aspireai.png',
      github: 'https://github.com/kirigaya07/AspireAI',
      view: 'https://asp-ai.vercel.app/',
      status: false,
      date: 'February - 2025',
      demo: false,
      personal: true,
      imgLoaded: false,
      tech: [
        { name: 'Next.js', image: 'assets/img/nextjs.svg' },
        { name: 'React', image: 'assets/img/reactjs.svg' },
        { name: 'Prisma', image: 'assets/img/prisma.png' },
        { name: 'PostgreSQL', image: 'assets/img/postgresql.svg' },
        { name: 'Clerk', image: 'assets/img/clerk.svg' },
        { name: 'Tailwind', image: 'assets/img/tailwindcss.svg' },
      ],
    },
    {
      name: 'Linkyard',
      description:
        'Bookmarks pile up fast and folder structures don\'t scale. Linkyard gives you an infinite visual whiteboard to organise links spatially — with live previews and drag-and-drop — so you can actually find what you saved.',
      image: 'assets/img/linkyard.png',
      github: 'https://github.com/kirigaya07/linkyard',
      view: 'https://linkyard-pi.vercel.app',
      status: false,
      date: 'September - 2025',
      demo: false,
      personal: true,
      imgLoaded: false,
      tech: [
        { name: 'Next.js', image: 'assets/img/nextjs.svg' },
        { name: 'React', image: 'assets/img/reactjs.svg' },
        { name: 'Typescript', image: 'assets/img/typescript.svg' },
        { name: 'Drizzle', image: 'assets/img/drizzle.svg' },
        { name: 'PostgreSQL', image: 'assets/img/postgresql.svg' },
        { name: 'Clerk', image: 'assets/img/clerk.svg' },
        { name: 'Tailwind', image: 'assets/img/tailwindcss.svg' },
      ],
    },
    {
      name: 'Zudo`s Blog',
      description:
        'Most blogging tools are either too simple or too heavy. Zudo\'s Blog is a full MERN-stack platform with Google OAuth, a comment system, and an admin dashboard — built to understand the full lifecycle of a production web app.',
      image: 'assets/img/blogsite.png',
      github: 'https://github.com/kirigaya07/Mern-Blog',
      view: 'https://mern-blog-j641.onrender.com/',
      status: false,
      date: 'July - 2024',
      demo: false,
      personal: true,
      imgLoaded: false,
      tech: [
        { name: 'React', image: 'assets/img/reactjs.svg' },
        { name: 'Node.js', image: 'assets/img/nodejs.svg' },
        { name: 'Express', image: 'assets/img/expressjs.svg' },
        { name: 'MongoDB', image: 'assets/img/mongodb.svg' },
        { name: 'Redux', image: 'assets/img/redux.svg' },
        { name: 'Firebase', image: 'assets/img/firebase.svg' },
        { name: 'Tailwind', image: 'assets/img/tailwindcss.svg' },
      ],
    },
    {
      name: 'Thinko',
      description:
        'Notion\'s power comes at the cost of complexity. Thinko strips it back to what matters — a real-time collaborative editor with BlockNote, secure auth via Clerk, and a clean UI that gets out of your way.',
      image: 'assets/img/thinko.png',
      github: 'https://github.com/kirigaya07/Thinko',
      view: 'https://thinko.vercel.app',
      status: false,
      date: 'August - 2025',
      demo: false,
      personal: true,
      imgLoaded: false,
      tech: [
        { name: 'Next.js', image: 'assets/img/nextjs.svg' },
        { name: 'React', image: 'assets/img/reactjs.svg' },
        { name: 'Typescript', image: 'assets/img/typescript.svg' },
        { name: 'Clerk', image: 'assets/img/clerk.svg' },
        { name: 'Tailwind', image: 'assets/img/tailwindcss.svg' },
      ],
    },
  ];

  get allTechs(): string[] {
    const techSet = new Set<string>();
    this.projects.forEach(p => p.tech.forEach((t: ProjectTech) => techSet.add(t.name)));
    return ['All', ...Array.from(techSet)];
  }

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'All') return this.projects;
    return this.projects.filter(p =>
      p.tech.some((t: ProjectTech) => t.name === this.selectedFilter)
    );
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
