import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience', icon: Target },
    { number: '15+', label: 'Projects Completed', icon: Code },
    { number: '5+', label: 'Technologies Mastered', icon: Lightbulb },
    { number: '10+', label: 'Happy Clients', icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate developer with a strong foundation in both frontend and backend technologies. 
                  I enjoy creating user-friendly applications that solve real-world problems and continuously 
                  learning new technologies to stay current with industry trends.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and sharing knowledge with the developer community. I believe in writing clean, maintainable 
                  code and following best practices in software development.
                </p>
              </div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-6 glass-effect border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <motion.div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="text-3xl font-bold gradient-text"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1, type: "spring" }}
                        >
                          {stat.number}
                        </motion.h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;