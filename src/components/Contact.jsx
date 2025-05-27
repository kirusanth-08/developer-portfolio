import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'contact-submissions'), {
        ...formData,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        status: 'unread'
      });

      console.log('Document written with ID: ', docRef.id);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kirusanth@example.com',
      href: 'mailto:kirusanth@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San Francisco, CA'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kirusanth-08',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kirusanth-s',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/kirusanth',
      color: 'hover:text-blue-400'
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
    <section id="contact" className="py-20 bg-background">
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
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and collaborations. 
                  Feel free to reach out if you'd like to discuss a project, 
                  have a question, or just want to say hello!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg glass-effect hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full glass-effect transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-effect border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>Sorry, there was an error sending your message. Please try again.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject *</label>
                      <Input
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project or just say hi!"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105 resize-none"
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            <Send className="h-5 w-5" />
                          </motion.div>
                        ) : (
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        )}
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;