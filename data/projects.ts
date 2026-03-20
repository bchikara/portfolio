export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  github_link: string;
  slug: string;
  technologies: Array<string>
}

export const projects: Project[] = [
  {
    title: 'CodeNova',
    description:
      `CodeNova is an AI-Powered Coding Interview Platform that won the Best Use of AI Award at CuseHacks 2025 (Anthropic-Sponsored). It features 50+ coding problems, real-time code execution across 8+ languages, 9+ algorithm visualizers, and dual AI tutoring with Google Gemini and an Anam AI voice avatar.`,
    logo: '/logos/codenova.svg',
    link: 'https://youtu.be/nOO4OvV3bIs?si=bn3XUohoX6FWnSv7',
    github_link:'',
    slug: 'codenova',
    technologies:['Next.js 15, TypeScript, Socket.IO, Judge0 API, MongoDB, React, Excalidraw, Google Gemini API, Anam AI, Node.js'],
  },
  {
    title: 'Opus',
    description:
      `Opus is a professional recording and streaming platform that cuts post-recording time from 50 minutes to 5 by processing 90% of transcoding during recording. It supports real-time collaboration for 8+ participants and packs AI features - Coqui TTS voice generation, Whisper transcription, and GPT-4 chapter highlights.`,
    logo: '/logos/opus.svg',
    link: 'https://github.com/bchikara/opus?tab=readme-ov-file#-demo',
    github_link:'https://github.com/bchikara/opus',
    slug: 'opus',
    technologies:['Node.js, TypeScript, BullMQ, FFmpeg, MediaMTX, Socket.IO, AWS S3, Redis, Apollo GraphQL, PostgreSQL, Python Flask, Coqui TTS, Whisper ASR, GPT-4 API, MongoDB, JWT, OAuth'],
  },
  {
    title: 'ProCode',
    description:
      `ProCode is a PWA that replicates a real coding interview experience. An AI-powered avatar presents questions, listens to your thought process, offers guidance, and evaluates code submissions - mimicking a live technical interview.`,
    logo: '/logos/procode.png',
    link: 'https://www.youtube.com/watch?v=yECqnPjo67A',
    github_link:'',
    slug: 'procode',
    technologies:['React, Node.js, Websocket, Firebase, D3.js, DeepSeek API'],
  },
  {
    title: 'LaCarte',
    description:
      'LaCarte is a smart QR code dining app that lets customers browse the menu, place orders, and pay - all without a waiter. A faster, contactless experience for both diners and restaurants.',
    logo: '/logos/la_carte.png',
    link: 'https://thelacarte.com/',
    github_link:'https://github.com/bchikara/la-carte',
    slug: 'bchikara-portfolio',
    technologies:['React, Firebase, D3.js'],
  },
  {
    title:'Cold Mail OutReach',
    description:'Cold Mail Outreach is a full-stack app that streamlines job hunting. Manage contacts, use dynamic email templates, send personalized emails with attachments, and track outreach history - all from a sleek dark-mode interface.',
    logo: '/logos/cold_mail_outreach.png',
    link:'https://cold-mail-outreach.vercel.app/',
    github_link:'https://github.com/bchikara/cold-mail-outreach',
    slug:'cold_mail_outreach',
    technologies:['React, Firebase, NodeMailer, Zustand, Tailwind CSS']
  },
  {
    title: 'Job Automator',
    description:
      `Job Automator is an AI-powered CLI that automates the job hunt. It scrapes listings, tailors resumes with Gemini AI, auto-fills ATS forms via Selenium, and tracks every application in MongoDB - achieving ~90% success on complex forms.`,
    logo: '/logos/job_automator.png',
    link: 'https://github.com/bchikara/job_automater?tab=readme-ov-file#-automated-job-application-assistant',
    github_link: 'https://github.com/bchikara/job_automater?tab=readme-ov-file#-automated-job-application-assistant',
    slug: 'bchikara-job-automator',
    technologies:['Python, Selenium, Gemini API, MongoDB'],
  },{
    title: 'VinayakM',
    description:
      'VinayakM is a healthcare platform connecting doctors and patients. Patients can browse doctors, book consultations, and receive digital prescriptions - all in one seamless app.',
    logo: '/logos/vinayakm.svg',
    link: '',
    github_link:'',
    slug: 'vinayakm',
    technologies:['React, Node.js, Firebase, Websocket, D3.js'],
  },
  {
    title: 'Space Scrible',
    description:
      'SpaceScribble captures gyroscope and accelerometer data from a mobile device and streams it to a desktop app via WebSockets. A CNN model then predicts the alphabet drawn through motion, enabling gesture-based input.',
    logo: '/logos/space_scribble.png',
    link: 'https://github.com/bchikara/SpaceScrible?tab=readme-ov-file#-spacescrible',
    github_link:'https://github.com/bchikara/SpaceScrible',
    slug: 'bchikara-space-scrible',
    technologies:['React Native, Python, Websocket, Node.js, Swift'],
  },
  {
    title: 'Real-time Hand Gesture Recognition',
    description:
      'Real-time Hand Gesture Recognition uses a CNN model to analyze hand gestures and predict corresponding words or phrases - designed to assist individuals who are deaf or verbally challenged with more inclusive communication.',
    logo: '/logos/gesture.png',
    link: 'https://github.com/bchikara/real-time_hand_gesture?tab=readme-ov-file#-screenshots--demonstration',
    github_link:'https://github.com/bchikara/real-time_hand_gesture',
    slug: 'bchikara-real-time-hand-gesture-recognition',
    technologies:['Python'],
  },
  {
    title: 'P-grip',
    description:
      'P-GRIP is an e-commerce platform for high-quality products from reputable brands. It delivers top-tier performance at reasonable prices, backed by strong technical support and customer care.',
    logo: '/logos/p_grip.png',
    link: 'https://p-grip.web.app/',
    github_link:'https://github.com/bchikara/p-grip/',
    slug: 'p-grip',
    technologies:['Angular, Firebase'],
  },
  {
    title: 'BetterPledge',
    description:'BetterPledge bridges food donors and NGOs to efficiently redirect surplus food to those in need. It reduces waste and supports the underprivileged by connecting individuals with trusted organizations.',
    logo: '/logos/betterpledge.png',
    link: 'https://gscbetterpledge.web.app/',
    github_link:'https://github.com/bchikara/betterpledge',
    slug: 'helping-hands',
    technologies:['Angular, Flask, Google API'],
  },
];
