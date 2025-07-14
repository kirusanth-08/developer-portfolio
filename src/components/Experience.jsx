import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Un4cus (Pvt) Ltd.",
      logo: "https://un4cus.com/images/logo.png",
      link: "https://un4cus.com",
      location: "Kandy, SriLanka",
      period: "May, 2025 - Present",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Springboot", "MySql"],
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 3 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Digital Agency",
    //   location: "New York, NY",
    //   period: "2022 - 2023",
    //   description: "Created responsive web interfaces and improved user experience. Worked closely with designers to implement pixel-perfect designs.",
    //   technologies: ["React", "JavaScript", "CSS", "Git"],
    //   achievements: [
    //     "Improved user engagement by 25%",
    //     "Reduced bounce rate by 30%",
    //     "Mentored 2 intern developers"
    //   ]
    // },
    {
      title: "Software Engineer Intern",
      company: "Keture (Pvt) Ltd.",
      logo: "https://keture.com/static/media/logo-sml.48d7898f150af0ab020c.png",
      link: "https://keture.com",
      location: "Mannar, SriLanka",
      period: "Aug, 2024 - Feb, 2025 (6 months)",
      description:
        "Assisted in developing mobile applications and learned modern development practices using nodejs. Contributed to both frontend and backend development. Gained hands-on experience in DevOps.",
      technologies: [
        "Flutter",
        "Node.js",
        "MySql",
        "Prisma ORM",
        "Tailwind CSS",
      ],
      achievements: [
        "Completed 15+ feature implementations",
        "Reduced bug reports by 20%",
        "Earned Employee of the Month award",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-600" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full border-4 border-background"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />

                    <div className="ml-20">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="glass-effect border-0 hover:shadow-2xl transition-all duration-300">
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                <CardTitle className="text-xl md:text-2xl gradient-text">
                                  {exp.title}
                                </CardTitle>
                                <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground mt-1">
                                  <img 
                                    className="w-6 h-6 rounded-md object-contain bg-white p-1 shadow-sm" 
                                    src={exp.logo} 
                                    alt={`${exp.company} logo`}
                                  />
                                  {exp.company}
                                  <button
                                    className="p-2 hover:bg-slate-800 rounded-full"
                                    onClick={() => {
                                      if (exp.link) {
                                        window.open(exp.link, "_blank");
                                      }
                                    }}
                                    disabled={!exp.link}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                              <div className="flex flex-col md:items-end gap-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CalendarDays className="h-4 w-4" />
                                  {exp.period}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                              {exp.description}
                            </p>

                            {/* Key Achievements */}
                            <div>
                              <h4 className="font-semibold mb-3 text-foreground">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 mt-2 flex-shrink-0" />
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold mb-3 text-foreground">
                                Technologies Used:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <motion.span
                                    key={tech}
                                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-xs font-medium select-none"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
