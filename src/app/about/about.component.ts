import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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

  openPopup(companyId: any): void {
    console.log(companyId);
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: companyId,
    });
  }

  // Array of data
  aboutme: string = `I am a full stack developer with hands-on experience in building scalable web applications and media automation platforms. I have worked on end-to-end development, including frontend interfaces, backend APIs, database structuring, and CDN-based asset optimization. I enjoy understanding systems deeply, improving performance, and solving real-world problems with clean, maintainable solutions. I am continuously learning and aim to contribute effectively to impactful and production-ready software systems.`;

  work: Array<any> = [
    {
      id: 1,
      company: 'M-Core Pvt. Ltd.',
      position: 'Full Stack Developer Intern(Remote)',
      time_period: 'May 2025 - July 2025',
      place: ' Chennai, Tamil Nadu, India',
      overview:
        'A technology-driven company specializing in automated media solutions, software systems, and digital content workflows.',
      my_role: `At M-Core, I worked on developing a video generation platform aimed at automating video creation pipelines. 
  I handled both frontend and backend development, integrating APIs and implementing efficient data workflows. 
  On the frontend, I built dynamic UI components and optimized media rendering flows. 
  On the backend, I structured and connected APIs for processing video templates, assets, and generation requests. 
  I also implemented CDN-based asset optimization to ensure faster loading and smooth preview performance.
  Collaboration with the product team and designers helped me align UI functionality with content and workflow requirements.`,
      impact:
        'This internship strengthened my expertise in building scalable web applications, optimizing API interactions, and working with media-heavy data. I gained hands-on experience in full-stack development, performance optimization, and real-world deployment workflows. Working on a video generation system deepened my understanding of media pipelines, improving both my problem-solving and product development skills.',
      projects: [
        {
          name: 'Automated Video Generation Platform',
          link: '#',
          image: '#',
        },
      ],
      tech: [
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'React.js',
          link: 'https://react.dev/',
          image: 'assets/img/reactjs.svg',
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          image: 'assets/img/nodejs.svg',
        },
        {
          name: 'Express.js',
          link: 'https://expressjs.com/',
          image: 'assets/img/expressjs.svg',
        },
        {
          name: 'MySQL',
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg',
        },
        {
          name: 'CDN (Cloud Storage)',
          link: 'https://www.cloudflare.com/',
          image: 'assets/img/cloudflare.svg',
        },
        {
          name: 'Git',
          link: 'https://git-scm.com/',
          image: 'assets/img/git.svg',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/',
          image: 'assets/img/github.svg',
        },
        {
          name: 'Postman',
          link: 'https://www.postman.com/',
          image: 'assets/img/postman.svg',
        },
      ],
    },
  ];

  education: Array<any> = [
    {
      studied_at:
        'Indian Institute of Information Technology Senapati, Manipur',
      qualified: 'Bachelor of Technology',
      time_period: '2022 - Present',
      place: 'Imphal, Manipur, India',
    },
    {
      studied_at: 'KV Mahasamund',
      qualified: 'SSLC (Class 10)',
      time_period: '2018 - 2019',
      place: 'Mahasamund, Chhattisgarh',
    },
    {
      studied_at: 'KV Mahasamund',
      qualified: 'Plus Two - Computer Science (Class 12)',
      time_period: '2020 - 2021',
      place: 'Mahasamund, Chhattisgarh',
    },
  ];
}
