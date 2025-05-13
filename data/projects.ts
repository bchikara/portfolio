export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  technologies: Array<string>
}

export const projects: Project[] = [
  {
    title: 'ProCode',
    description:
      `ProCode is a Progressive Web App (PWA) designed to replicate a real-life coding interview experience. It features an AI-powered avatar that presents coding questions, listens to the candidate's thought process, offers guidance, and evaluates code submissions—mimicking the dynamics of a real technical interview to help users prepare more effectively.`,
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/',
    slug: 'driwwwle',
    technologies:['React, Node.js, Websocket, Firebase, D3.js, DeepSeek API'],
  },
  {
    title: 'LaCarte',
    description:
      'LaCarte is a smart scanning app that allows diners to seamlessly browse the menu, place orders, and make payments—all without waiting for a waiter. By simply scanning a QR code, users can view the restaurant’s offerings, customize their orders, and pay instantly, creating a faster, contactless, and more convenient dining experience.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/',
    slug: 'bchikara-portfolio',
    technologies:['React, Firebase, D3.js'],
  },
  {
    title: 'VinayakM',
    description:
      'VinayakM is a user-friendly application designed for both doctors and patients. It enables patients to choose doctors based on their preferences, book consultations, and receive digital prescriptions—all in one seamless platform. The app simplifies healthcare access and enhances the consultation experience for users.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/',
    slug: 'subtrackt',
    technologies:['React, Node.js, Firebase, Websocket, D3.js'],
  },
  {
    title: 'Job Automator',
    description:
      `Job Automator is an Automated Job Application Assistant designed to streamline the repetitive process of applying for jobs online. It utilizes web automation to fill out application forms, incorporates AI to assist with answering application questions, and maintains a structured database to track all submitted applications—making the job hunt faster and more efficient.`,
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/',
    slug: 'coolify-bchikara-extension',
    technologies:['Python, Selenium, Gemini API, MongoDB'],
  },
  {
    title: 'Space Scrible',
    description:
      'SpaceScribble is a cross-platform, real-time motion tracking application that captures sensor data (gyroscope and accelerometer) from a mobile device and transmits it to a desktop application using WebSockets powered by a Node.js backend. It leverages a Convolutional Neural Network (CNN) model to accurately predict the alphabet drawn by the user through motion, enabling innovative gesture-based input and interaction.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/coolify-bchikara-extension',
    slug: 'coolify-bchikara-extension',
    technologies:['React Native, Python, Websocket, Node.js, Swift'],
  },
  {
    title: 'Hand Gesture Recognition',
    description:
      'Hand Gesture Recognition is an AI-powered application designed to assist individuals who are deaf or verbally challenged. It uses a Convolutional Neural Network (CNN) model to analyze hand gestures in real time and accurately predict the corresponding words or phrases, enabling more effective and inclusive communication.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/coolify-bchikara-extension',
    slug: 'coolify-bchikara-extension',
    technologies:['Python'],
  },
  {
    title: 'P-grip',
    description:
      'P-GRIP is your trusted destination for high-quality products backed by reliable service. Our portfolio features the most reputable brands, ensuring top-tier performance at reasonable prices. We pride ourselves on delivering exceptional technical support and outstanding customer care, making your experience seamless and dependable from start to finish.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/',
    slug: 'p-grip',
    technologies:['Angular, Firebase'],
  },
  {
    title: 'HelpingHands',
    description:'HelpingHands is a platform that bridges the gap between food donors and NGOs, enabling the efficient donation of surplus food to those in need. It connects generous individuals or organizations with trusted NGOs to ensure excess food reaches the right hands, reducing waste and supporting the underprivileged.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/bchikara/coolify-bchikara-extension',
    slug: 'helping-hands',
    technologies:['Angular, Flask, Google API'],
  },
];
