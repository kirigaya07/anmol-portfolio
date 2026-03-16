import { EducationItem, WorkExperience } from '../models/portfolio.models';

export const ABOUT_ME = `I am a full stack developer with hands-on experience in building scalable web applications and media automation platforms. I have worked on end-to-end development, including frontend interfaces, backend APIs, database structuring, and CDN-based asset optimization. I enjoy understanding systems deeply, improving performance, and solving real-world problems with clean, maintainable solutions. I am continuously learning and aim to contribute effectively to impactful and production-ready software systems.`;

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 1,
    company: 'M-Core Pvt. Ltd.',
    position: 'Full Stack Developer Intern(Remote)',
    time_period: 'May 2025 - October 2025',
    place: 'Chennai, Tamil Nadu, India',
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
        link: '',
        image: '',
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
  {
    id: 2,
    company: 'Stock Register',
    position: 'Frontend Developer Intern',
    time_period: 'November 2025 - February 2026',
    place: 'Remote',
    overview:
      'Contributed to a full-featured inventory and stock management SaaS used by businesses for sales, purchase, manufacturing, GST compliance, and reporting. Built and shipped production features across PDF reports, manufacturing/job work, bulk Excel workflows, cash and bank, and core UX improvements.',
    my_role: `Owned end-to-end feature development: designed and built reusable UI components (modals, data grids, PDF previews), integrated React frontend with REST APIs using React Query and Redux, and implemented responsive layouts across 20+ feature branches.

Shipped manufacturing and job work modules (Create Job Work In/Out, recipe checks, raw material quantity handling), bulk Excel upload for sales/purchase with validation and status feedback, and PDF enhancements (transaction preview headers, category names in stock reports, bill theme column adjustments).

Delivered party management improvements (party type and credit period in add-party modal, party-wise selling price with CRUD), cash and bank features (opening balance with date handling, transfer money and balance adjustment modals), and account switcher for multi-business users. Improved item and stock UX (MRP columns in item tab and price-details popup, search by item name/barcode in item transactions, tab layout and item-type selection in add-item). Fixed bugs in single-transaction Excel export, raw material default quantity in manufacturing, and implemented master visibility with context and route protection.`,
    impact:
      'Shipped 20+ production-ready features and fixes that improved reporting accuracy (customizable PDF headers, category in stock PDFs), accelerated data entry (bulk Excel upload, party-wise pricing), and expanded product capability (manufacturing/job work flows, cash and bank transfers, account switching). Contributed to a more reliable and feature-complete inventory platform used by real businesses.',
    projects: [
      {
        name: 'Stock Register',
        link: 'https://stage.stockregister.in/',
        image: 'assets/img/stock-register.png',
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
        name: 'Redux',
        link: 'https://redux.js.org/',
        image: 'assets/img/redux.svg',
      },
      {
        name: 'React Query',
        link: 'https://tanstack.com/query/latest',
        image: 'assets/img/react-query.svg',
      },
      {
        name: 'Material UI',
        link: 'https://mui.com/',
        image: 'assets/img/material-ui.svg',
      },
      {
        name: 'Git',
        link: 'https://git-scm.com/',
        image: 'assets/img/git.svg',
      },
    ],
  },
  {
    id: 4,
    company: 'ThinkByte.AI',
    position: 'Tech Intern',
    time_period: 'Feb 2026 - Present',
    place: 'Remote',
    overview:
      'Contributed to a creator-buyer matching platform with mandates, project matching, search, and subscriptions. Delivered bug fixes, performance improvements, admin tooling, and Stripe-based subscription flows across multiple feature branches.',
    my_role: `Shipped fixes and features across nine branches: bug-fixes (buyer Pass/Approve targeting, upload flow without files, delete modal, buyer file access fallback, communication history, optimistic messaging UI); buyer-activity-dashboard (admin buyer activity dashboard); buyer-level-matching (buyer-level matching and creator match card cleanup); fix/creator-and-admin-fixes (admin params and protection for buyer-approved projects); project-files-and-weaviate-fix (Weaviate auto-index and creator file delete); reduce-page-load-time (query performance optimization); stripe-integration (checkout, portal, cancel, webhook, pricing pages, and subscription settings for buyers and creators).
Implemented API routes, Supabase migrations, Stripe integration, and modular UI while keeping code and docs maintainable.`,
    impact:
      'Improved platform reliability, admin visibility, matching logic, and performance; added end-to-end subscription management and pricing flows.',
    projects: [
      {
        name: 'EnCue - Creator-Buyer Matching and Subscriptions',
        link: '#',
        image: 'assets/img/encue.png',
      },
    ],
    tech: [
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        image: 'assets/img/typescript.svg',
      },
      {
        name: 'Next.js',
        link: 'https://nextjs.org/',
        image: 'assets/img/nextjs.svg',
      },
      {
        name: 'Supabase',
        link: 'https://supabase.com/',
        image: 'assets/img/supabase.svg',
      },
      {
        name: 'Stripe',
        link: 'https://stripe.com/',
        image: 'assets/img/stripe.svg',
      },
      {
        name: 'FastAPI',
        link: 'https://fastapi.tiangolo.com/',
        image: 'assets/img/fastapi.svg',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/',
        image: 'assets/img/github.svg',
      },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    studied_at: 'Indian Institute of Information Technology Senapati, Manipur',
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
