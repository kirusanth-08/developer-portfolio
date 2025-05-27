import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ProfileImage } from './ui/profile-image';
import { personalInfo, siteConfig } from '../data/portfolioData';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = personalInfo.resumeFileName;
    link.click();
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  // Add optional social links if they exist
  if (personalInfo.social.twitter) {
    socialLinks.push({ 
      icon: ExternalLink, 
      href: personalInfo.social.twitter, 
      label: 'Twitter' 
    });
  }

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden py-16 md:py-20">
      {/* Animated Background Elements */}
      {siteConfig.features.enableAnimations && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          {personalInfo.profileImage.enabled ? (
            // Layout with Profile Image
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div
                className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Name and Title */}
                <div className="space-y-4 md:space-y-6">
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Hi, I'm{' '}
                    <span className="gradient-text floating-animation block sm:inline">
                      {personalInfo.name}
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-md mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {personalInfo.title}
                  </motion.p>

                  <motion.p
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {personalInfo.description}
                  </motion.p>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={downloadResume}
                    className="group border-2 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="flex justify-center lg:justify-end order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  <ProfileImage
                    src={personalInfo.profileImage.src}
                    alt={personalInfo.profileImage.alt}
                    fallbackText={personalInfo.profileImage.fallbackText}
                    size="responsive"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                    animated={siteConfig.features.enableAnimations}
                  />
                  
                  {/* Decorative elements around profile image */}
                  {siteConfig.features.enableAnimations && (
                    <>
                      <motion.div
                        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [360, 180, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                      <motion.div
                        className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2,
                        }}
                      />
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          ) : (
            // Layout without Profile Image (Centered)
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4 md:space-y-6">
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Hi, I'm{' '}
                    <span className="gradient-text floating-animation block sm:inline">
                      {personalInfo.name}
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {personalInfo.title}
                  </motion.p>

                  <motion.p
                    className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {personalInfo.description}
                  </motion.p>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={downloadResume}
                    className="group border-2 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-muted-foreground rounded-full mt-1.5 sm:mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;