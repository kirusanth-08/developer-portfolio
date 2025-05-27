// Portfolio Data Configuration
// Update this file to modify any content on your portfolio website

export const personalInfo = {
  name: "Kirusanth",
  title: "Full Stack Developer & Technology Enthusiast",
  description: "Passionate about creating innovative solutions and bringing ideas to life through code. I specialize in modern web technologies and love solving complex problems.",
  location: "Your City, Country",
  email: "kirusanth@example.com",
  phone: "+1 (555) 123-4567",
  
  // Social Media Links
  social: {
    github: "https://github.com/kirusanth-08",
    linkedin: "https://linkedin.com/in/kirusanth",
    twitter: "https://twitter.com/kirusanth", // Optional
    portfolio: "https://kirusanth.dev", // Optional
  },
  
  // Resume file path (place your resume.pdf in the public folder)
  resumePath: "/resume.pdf",
  resumeFileName: "Kirusanth_Resume.pdf"
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
    { number: '2+', label: 'Years Experience', icon: 'Target' },
    { number: '15+', label: 'Projects Completed', icon: 'Code' },
    { number: '5+', label: 'Technologies Mastered', icon: 'Lightbulb' },
    { number: '10+', label: 'Happy Clients', icon: 'Users' },
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
        { name: "Django", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
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
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2023 - Present",
    current: true,
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript", "Docker"],
    achievements: [
      "Increased application performance by 40% through code optimization and caching strategies",
      "Led a team of 3 junior developers and established coding standards",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Architected microservices infrastructure serving 100k+ daily users"
    ],
    companyUrl: "https://techsolutions.com" // Optional
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2022 - 2023",
    current: false,
    description: "Created responsive web interfaces and improved user experience. Worked closely with designers to implement pixel-perfect designs.",
    technologies: ["React", "JavaScript", "CSS", "Git", "Figma", "Sass"],
    achievements: [
      "Improved user engagement by 25% through UX/UI enhancements",
      "Reduced bounce rate by 30% with optimized page load times",
      "Mentored 2 intern developers and conducted code reviews",
      "Developed reusable component library used across 5+ projects"
    ],
    companyUrl: "https://digitalagency.com" // Optional
  },
  {
    title: "Junior Developer",
    company: "StartUp Solutions",
    location: "Austin, TX",
    period: "2021 - 2022",
    current: false,
    description: "Assisted in developing web applications and learned modern development practices. Contributed to both frontend and backend development.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
    achievements: [
      "Completed 15+ feature implementations ahead of schedule",
      "Reduced bug reports by 20% through thorough testing",
      "Earned Employee of the Month award twice",
      "Contributed to open-source projects used by the company"
    ],
    companyUrl: "https://startupsolutions.com" // Optional
  }
];

export const certificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    expiryDate: "2026", // Optional
    image: "/certificates/react-cert.png",
    description: "Comprehensive certification covering React fundamentals, hooks, advanced patterns, and performance optimization.",
    credentialId: "ABC123456", // Optional
    credentialUrl: "https://certificates.meta.com/abc123456", // Optional
    skills: ["React", "JavaScript", "Redux", "Testing"]
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/certificates/js-cert.png",
    description: "Certification demonstrating proficiency in JavaScript algorithms, data structures, and problem-solving techniques.",
    credentialId: "DEF789012",
    credentialUrl: "https://freecodecamp.org/certification/kirusanth/javascript-algorithms-and-data-structures",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"]
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    expiryDate: "2025",
    image: "/certificates/aws-cert.png",
    description: "Foundational certification covering AWS cloud services, architecture, security, and best practices.",
    credentialId: "GHI345678",
    credentialUrl: "https://aws.amazon.com/certification/verify/ghi345678",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"]
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2022",
    image: "/certificates/fullstack-cert.png",
    description: "Complete full-stack development course covering frontend and backend technologies, databases, and deployment.",
    credentialId: "JKL901234",
    credentialUrl: "https://coursera.org/verify/JKL901234",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 5,
    title: "Advanced TypeScript",
    issuer: "TypeScript Academy",
    date: "2023",
    image: "/certificates/typescript-cert.png",
    description: "Advanced TypeScript certification covering complex types, generics, decorators, and enterprise patterns.",
    credentialId: "MNO567890",
    skills: ["TypeScript", "Advanced Types", "Generics", "Decorators"]
  }
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
  
  // Contact methods
  methods: [
    {
      type: "email",
      value: "kirusanth@example.com",
      display: "kirusanth@example.com",
      icon: "Mail"
    },
    {
      type: "phone",
      value: "+1 (555) 123-4567",
      display: "+1 (555) 123-4567",
      icon: "Phone"
    },
    {
      type: "location",
      value: "Your City, Country",
      display: "Your City, Country",
      icon: "MapPin"
    }
  ],
  
  // Form configuration
  form: {
    enabled: true,
    action: "", // Add your form action URL here (e.g., Formspree, Netlify Forms)
    method: "POST"
  }
};

export const siteConfig = {
  // Site metadata
  title: "Kirusanth - Full Stack Developer",
  description: "Portfolio of Kirusanth, a passionate Full Stack Developer specializing in modern web technologies.",
  keywords: ["Kirusanth", "Full Stack Developer", "React", "Node.js", "Portfolio"],
  author: "Kirusanth",
  siteUrl: "https://kirusanth.dev",
  
  // Navigation items
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' }, // Optional projects section
    { id: 'contact', label: 'Contact' },
  ],
  
  // Theme configuration
  theme: {
    defaultTheme: 'light', // 'light' or 'dark'
    enableSystemTheme: true // Allow system preference detection
  },
  
  // Features to enable/disable
  features: {
    showProjects: false, // Set to true if you want to include projects section
    showBlog: false, // Future feature
    enableAnimations: true,
    enableParticles: true, // Background particles effect
    enableMusicPlayer: false, // Future feature
  },
  
  // Analytics (optional)
  analytics: {
    googleAnalyticsId: "", // Your GA4 ID
    hotjarId: "", // Your Hotjar ID
  }
};

// SEO and meta tags
export const seoConfig = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: '@kirusanth', // Your Twitter handle
    site: '@kirusanth',
    cardType: 'summary_large_image',
  },
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