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
      `CodeNova is an AI-Powered Coding Interview Platform that won the Best Use of AI Award at CuseHacks 2025 (Anthropic-Sponsored). Built with Next.js 15 and TypeScript, it achieves sub-500ms response times across 155+ coding problems. The platform features real-time code execution via Socket.IO and Judge0 API supporting 8+ programming languages, 9+ interactive algorithm visualizers with React and Excalidraw integration, and dual AI tutoring combining Google Gemini API with Anam AI voice avatar. It includes conversation persistence, PDF analysis capabilities, and GitHub-style analytics tracking 52-week activity—creating a comprehensive coding interview preparation environment.`,
    logo: '/logos/codenova.svg',
    link: 'https://youtu.be/nOO4OvV3bIs?si=bn3XUohoX6FWnSv7',
    github_link:'',
    slug: 'codenova',
    technologies:['Next.js 15, TypeScript, Socket.IO, Judge0 API, MongoDB, React, Excalidraw, Google Gemini API, Anam AI, Node.js'],
  },
  {
    title: 'Opus',
    description:
      `Opus is a professional recording and streaming platform that revolutionizes video production workflows. It reduces post-recording wait time from 50 minutes to just 5 minutes through progressive chunk upload processing with 10-second intervals, handling 90% of video transcoding during recording. The platform enables real-time collaboration for 8+ participants with sub-second latency using MediaMTX WebRTC server and multi-track recording. Built on cloud-native microservices architecture, it orchestrates 6 services (Backend API, Media Processor, TTS, Transcription, Translation, WebRTC Server) using Apollo GraphQL gateway and PostgreSQL. Opus features 3 AI-powered capabilities: free voice generation with Coqui TTS, Whisper ASR transcription with speaker detection, and GPT-4 API chapter/highlight generation. The scalable chunk processing pipeline transcodes 4K video to multi-resolution formats achieving 99.9% processing success rate with JWT authentication and OAuth support.`,
    logo: '/logos/opus.svg',
    link: 'https://github.com/bchikara/opus?tab=readme-ov-file#-demo',
    github_link:'https://github.com/bchikara/opus',
    slug: 'opus',
    technologies:['Node.js, TypeScript, BullMQ, FFmpeg, MediaMTX, Socket.IO, AWS S3, Redis, Apollo GraphQL, PostgreSQL, Python Flask, Coqui TTS, Whisper ASR, GPT-4 API, MongoDB, JWT, OAuth'],
  },
  {
    title: 'ProCode',
    description:
      `ProCode is a Progressive Web App (PWA) designed to replicate a real-life coding interview experience. It features an AI-powered avatar that presents coding questions, listens to the candidate's thought process, offers guidance, and evaluates code submissions—mimicking the dynamics of a real technical interview to help users prepare more effectively.`,
    logo: '/logos/procode.png',
    link: 'https://www.youtube.com/watch?v=yECqnPjo67A',
    github_link:'',
    slug: 'procode',
    technologies:['React, Node.js, Websocket, Firebase, D3.js, DeepSeek API'],
  },
  {
    title: 'LaCarte',
    description:
      'LaCarte is a smart scanning app that allows diners to seamlessly browse the menu, place orders, and make payments—all without waiting for a waiter. By simply scanning a QR code, users can view the restaurant’s offerings, customize their orders, and pay instantly, creating a faster, contactless, and more convenient dining experience.',
    logo: '/logos/la_carte.png',
    link: 'https://thelacarte.com/',
    github_link:'https://github.com/bchikara/la-carte',
    slug: 'bchikara-portfolio',
    technologies:['React, Firebase, D3.js'],
  },
  {
    title:'Cold Mail OutReach',
    description:'Cold Mail Outreach is a full-stack web application designed to streamline the job application process. It allows you to manage contacts, use dynamic email templates, send personalized emails with attachments, and track your outreach history, all from a beautiful, Gemini-inspired dark-mode interface.',
    logo: '/logos/cold_mail_outreach.png',
    link:'https://cold-mail-outreach.vercel.app/',
    github_link:'https://github.com/bchikara/cold-mail-outreach',
    slug:'cold_mail_outreach',
    technologies:['React, Firebase, NodeMailer, Zustand, Tailwind CSS']
  },
  {
    title: 'Job Automator',
    description:
      `Job Automator is an Automated Job Application Assistant designed to streamline the repetitive process of applying for jobs online. It utilizes web automation to fill out application forms, incorporates AI to assist with answering application questions, and maintains a structured database to track all submitted applications—making the job hunt faster and more efficient.`,
    logo: '/logos/job_automator.png',
    link: 'https://github.com/bchikara/job_automater?tab=readme-ov-file#-automated-job-application-assistant',
    github_link: 'https://github.com/bchikara/job_automater?tab=readme-ov-file#-automated-job-application-assistant',
    slug: 'bchikara-job-automator',
    technologies:['Python, Selenium, Gemini API, MongoDB'],
  },{
    title: 'VinayakM',
    description:
      'VinayakM is a user-friendly application designed for both doctors and patients. It enables patients to choose doctors based on their preferences, book consultations, and receive digital prescriptions—all in one seamless platform. The app simplifies healthcare access and enhances the consultation experience for users.',
    logo: '/logos/vinayakm.svg',
    link: '',
    github_link:'',
    slug: 'vinayakm',
    technologies:['React, Node.js, Firebase, Websocket, D3.js'],
  },
  {
    title: 'Space Scrible',
    description:
      'SpaceScribble is a cross-platform, real-time motion tracking application that captures sensor data (gyroscope and accelerometer) from a mobile device and transmits it to a desktop application using WebSockets powered by a Node.js backend. It leverages a Convolutional Neural Network (CNN) model to accurately predict the alphabet drawn by the user through motion, enabling innovative gesture-based input and interaction.',
    logo: '/logos/space_scribble.png',
    link: 'https://github.com/bchikara/SpaceScrible?tab=readme-ov-file#-spacescrible',
    github_link:'https://github.com/bchikara/SpaceScrible',
    slug: 'bchikara-space-scrible',
    technologies:['React Native, Python, Websocket, Node.js, Swift'],
  },
  {
    title: 'Real-time Hand Gesture Recognition',
    description:
      'Real-time Hand Gesture Recognition is an AI-powered application designed to assist individuals who are deaf or verbally challenged. It uses a Convolutional Neural Network (CNN) model to analyze hand gestures in real time and accurately predict the corresponding words or phrases, enabling more effective and inclusive communication.',
    logo: '/logos/gesture.png',
    link: 'https://github.com/bchikara/real-time_hand_gesture?tab=readme-ov-file#-screenshots--demonstration',
    github_link:'https://github.com/bchikara/real-time_hand_gesture',
    slug: 'bchikara-real-time-hand-gesture-recognition',
    technologies:['Python'],
  },
  {
    title: 'P-grip',
    description:
      'P-GRIP is your trusted destination for high-quality products backed by reliable service. Our portfolio features the most reputable brands, ensuring top-tier performance at reasonable prices. We pride ourselves on delivering exceptional technical support and outstanding customer care, making your experience seamless and dependable from start to finish.',
    logo: '/logos/p_grip.png',
    link: 'https://p-grip.web.app/',
    github_link:'https://github.com/bchikara/p-grip/',
    slug: 'p-grip',
    technologies:['Angular, Firebase'],
  },
  {
    title: 'BetterPledge',
    description:'BetterPledge is a platform that bridges the gap between food donors and NGOs, enabling the efficient donation of surplus food to those in need. It connects generous individuals or organizations with trusted NGOs to ensure excess food reaches the right hands, reducing waste and supporting the underprivileged.',
    logo: '/logos/betterpledge.png',
    link: 'https://gscbetterpledge.web.app/',
    github_link:'https://github.com/bchikara/betterpledge',
    slug: 'helping-hands',
    technologies:['Angular, Flask, Google API'],
  },
];
