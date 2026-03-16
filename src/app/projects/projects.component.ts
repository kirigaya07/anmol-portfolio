import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  selectedFilter = 'All';

  projects: Array<any> = [
    {
      name: 'Zyflow',
      description:
        'A modern workflow management application built with Next.js and TypeScript, providing seamless task organization and productivity features for teams and individuals.',
      image: 'assets/img/zyflow.png',
      github: 'https://github.com/kirigaya07/Zyflow',
      view: false,
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
        'AspireAI is an AI-powered career development platform that helps users build resumes, prepare for interviews, and gain industry insights. It leverages AI-driven tools to provide personalized career guidance and continuous professional growth.',
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
        'An infinite whiteboard for your links. Linkyard transforms how you organize and interact with web content by providing a spatial, visual approach to bookmark management with live previews and drag-and-drop functionality.',
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
        'A feature-rich blogging platform built using the MERN stack with user authentication via Google OAuth and JWT, profile management, commenting system, and an admin dashboard. Features a modern UI with dark mode.',
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
        'A full-featured Notion clone with real-time collaborative editing, rich text editor powered by BlockNote, and secure authentication. Provides a modern, responsive experience with light and dark mode themes.',
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
    this.projects.forEach(p => p.tech.forEach((t: any) => techSet.add(t.name)));
    return ['All', ...Array.from(techSet)];
  }

  get filteredProjects(): any[] {
    if (this.selectedFilter === 'All') return this.projects;
    return this.projects.filter(p =>
      p.tech.some((t: any) => t.name === this.selectedFilter)
    );
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
