import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Calendar, Award, ExternalLink, Eye } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023-11-15",
      image: "/certificates/react-cert.png",
      description: "Comprehensive certification covering React fundamentals, hooks, advanced patterns, and state management.",
      skills: ["React", "Hooks", "State Management", "JSX"],
      credentialId: "META-REACT-2023-001",
      verificationUrl: "https://coursera.org/verify/react-cert"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023-09-20",
      image: "/certificates/js-cert.png",
      description: "Certification demonstrating proficiency in JavaScript algorithms, data structures, and problem-solving.",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      credentialId: "FCC-JS-2023-002",
      verificationUrl: "https://freecodecamp.org/verify/js-cert"
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023-07-10",
      image: "/certificates/aws-cert.png",
      description: "Foundational certification covering AWS cloud services, security, and best practices.",
      skills: ["AWS", "Cloud Computing", "Security", "Architecture"],
      credentialId: "AWS-CP-2023-003",
      verificationUrl: "https://aws.amazon.com/verify/cloud-practitioner"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023-05-15",
      image: "/certificates/fullstack-cert.png",
      description: "Complete full-stack development course covering frontend, backend, and database technologies.",
      skills: ["Full Stack", "MERN Stack", "Database Design", "API Development"],
      credentialId: "COURSERA-FS-2023-004",
      verificationUrl: "https://coursera.org/verify/fullstack-cert"
    }
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
    <section id="certificates" className="py-20 gradient-bg">
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
            Certificates & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer glass-effect border-0 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="hidden w-full h-full items-center justify-center">
                            <Award className="h-16 w-16 text-purple-400" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Eye className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg leading-tight line-clamp-2">
                          {cert.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="h-4 w-4" />
                          {cert.issuer}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(cert.date).toLocaleDateString()}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{cert.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl gradient-text">
                        {cert.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full rounded-lg shadow-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg items-center justify-center">
                          <Award className="h-24 w-24 text-purple-400" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Certificate Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Issuer:</span> {cert.issuer}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Date:</span> {new Date(cert.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-2">
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">ID:</span> {cert.credentialId}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Description</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {cert.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Skills Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <motion.a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify Certificate
                        </motion.a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;