// Portfolio Data Configuration
// Update this file to modify any content on your portfolio website

export const personalInfo = {
  name: "Kirusanth",
  title: "Full Stack Developer & Technology Enthusiast",
  description: "Passionate about creating innovative solutions and bringing ideas to life through code. I specialize in modern web technologies and love solving complex problems.",
  location: "Jaffna, Sri Lanka",
  email: "kirusanth200110@gmail.com",
  phone: "+94 7688 65835",
  
  // Profile Image Configuration
  profileImage: {
    enabled: true,
    src: "/profile.jpg",
    alt: "Kirusanth Profile Picture",
    fallbackText: "K",
  },
  
  // Social Media Links
  social: {
    github: "https://github.com/kirusanth-08",
    linkedin: "https://linkedin.com/in/kirusanth-s",
    twitter: "https://twitter.com/Kirusant08",
    // portfolio: "https://kirusanth.dev",
  },
  
  // Resume file path (place your resume.pdf in the public folder)
  resumePath: "/resume.pdf",
  resumeFileName: "Kirusanth_sathananthan_resume.pdf"
};

export const aboutMe = {
  paragraphs: [
    "I'm a passionate developer with a strong foundation in both frontend and backend technologies. I enjoy creating user-friendly applications that solve real-world problems and continuously learning new technologies to stay current with industry trends.",
    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I believe in writing clean, maintainable code and following best practices in software development.",
    "My journey in software development started during my college years, and since then, I've worked on various projects ranging from small business websites to large-scale enterprise applications. I'm always excited to take on new challenges and collaborate with talented teams."
  ],
  
  // Quick tech stack for about section
  techStack: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB'],
  
  // Statistics for about section
  stats: [
    { number: '1+', label: 'Years Experience', icon: 'Target' },
    { number: '5+', label: 'Projects Completed', icon: 'Code' },
    // { number: '5+', label: 'Technologies Mastered', icon: 'Lightbulb' },
    // { number: '10+', label: 'Happy Clients', icon: 'Users' },
  ]
};

export const skills = {
  categories: [
    {
      title: "Frontend",
      icon: "Palette",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 82 }
      ]
    },
    {
      title: "Backend",
      icon: "Code",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        // { name: "Django", level: 75 },
        { name: "REST APIs", level: 90 },
        // { name: "GraphQL", level: 70 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Prisma", level: 78 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "Cloud",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Kubernetes", level: 65 },
        { name: "Terraform", level: 60 }
      ]
    }
  ]
};

export const experience = [
  {
    title: "Software Engineering Intern",
    company: "Keture",
    location: "Mannar, Sri Lanka",
    period: "2024.Aug - 2025.Feb",
    current: false,
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["Flutter", "Node.js", "MySQL", "AWS", "TypeScript", "Docker"],
    achievements: [
      "Increased application performance by 40% through code optimization and caching strategies",
      "Led a team of 3 junior developers and established coding standards",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Architected microservices infrastructure serving 100k+ daily users"
    ],
    companyUrl: "https://keture.com/"
  }
];

export const certificates = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    issuer: "Great Learning",
    date: "July.2024",
    expiryDate: "2026",
    image: "/certificates/react-cert.png",
    description: "Comprehensive certification covering React fundamentals, hooks, advanced patterns, and performance optimization.",
    credentialId: "WXMLJLMN",
    credentialUrl: "https://www.mygreatlearning.com/certificate/WXMLJLMN",
    skills: ["Machine Learning"]
  },
  {
    id: 2,
    title: "JavaScript Intermediate",
    issuer: "Sololearn",
    date: "Mar.2024",
    image: "/certificates/js-cert.png",
    description: "Certification demonstrating proficiency in JavaScript algorithms, data structures, and problem-solving techniques.",
    credentialId: "CC-PXMZXEER",
    credentialUrl: "https://www.sololearn.com/en/certificates/CC-PXMZXEER",
    skills: ["JavaScript", "OOP"]
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Azure",
    date: "Feb.2024",
    expiryDate: "2025",
    image: "/certificates/aws-cert.png",
    description: "Foundational certification covering AWS cloud services, architecture, security, and best practices.",
    credentialId: "blvp5eed",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/kirusanth-08/BLVP5EED?sharingId=5A242B180F08972D",
    skills: ["AI"]
  },
  // {
  //   id: 4,
  //   title: "Full Stack Web Development",
  //   issuer: "Coursera",
  //   date: "2022",
  //   image: "/certificates/fullstack-cert.png",
  //   description: "Complete full-stack development course covering frontend and backend technologies, databases, and deployment.",
  //   credentialId: "JKL901234",
  //   credentialUrl: "https://coursera.org/verify/JKL901234",
  //   skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"]
  // },
  // {
  //   id: 5,
  //   title: "Advanced TypeScript",
  //   issuer: "TypeScript Academy",
  //   date: "2023",
  //   image: "/certificates/typescript-cert.png",
  //   description: "Advanced TypeScript certification covering complex types, generics, decorators, and enterprise patterns.",
  //   credentialId: "MNO567890",
  //   skills: ["TypeScript", "Advanced Types", "Generics", "Decorators"]
  // }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/kirusanth-08/ecommerce-platform",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/projects/taskmanager.png",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/kirusanth-08/task-manager",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image: "/projects/weather.png",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/kirusanth-08/weather-dashboard",
    featured: false,
    category: "Frontend"
  }
];

export const contactInfo = {
  title: "Let's Connect",
  subtitle: "I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!",
  
  methods: [
    {
      type: "email",
      value: "kirusanth200110@gmail.com",
      display: "kirusanth200110@gmail.com",
      icon: "Mail"
    },
    {
      type: "phone",
      value: "+94 7688 65835",
      display: "+94 7688 65835",
      icon: "Phone"
    },
    {
      type: "location",
      value: "Jaffna, Sri Lanka",
      display: "Jaffna, Sri Lanka",
      icon: "MapPin"
    }
  ],
  
  form: {
    enabled: true,
    action: "",
    method: "POST"
  }
};

// MOVE siteConfig BEFORE seoConfig
export const siteConfig = {
  // Site metadata
  title: "Kirusanth - Full Stack Developer | React & Node.js Expert",
  description: "Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio, projects, and experience in software development.",
  keywords: [
    "Kirusanth", 
    "Full Stack Developer", 
    "React Developer", 
    "Node.js Developer", 
    "JavaScript", 
    "TypeScript", 
    "Web Development", 
    "Software Engineer", 
    "Portfolio", 
    "Sri Lanka Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  author: "Kirusanth",
  siteUrl: "https://kirusanth-08.github.io/developer-portfolio/",
  
  // Navigation items
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  
  // Theme configuration
  theme: {
    defaultTheme: 'light',
    enableSystemTheme: true
  },
  
  // Features to enable/disable
  features: {
    showProjects: false,
    showBlog: false,
    enableAnimations: true,
    enableParticles: true,
    enableMusicPlayer: false,
  },
  
  // Analytics (optional)
  analytics: {
    googleAnalyticsId: "",
    hotjarId: "",
  }
};

// NOW seoConfig can reference siteConfig
export const seoConfig = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: '@Kirusant08',
    site: '@Kirusant08',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
};

// Export all data
export default {
  personalInfo,
  aboutMe,
  skills,
  experience,
  certificates,
  projects,
  contactInfo,
  siteConfig,
  seoConfig
};