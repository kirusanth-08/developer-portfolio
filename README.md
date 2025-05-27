# Kirusanth Portfolio Website

A modern, responsive portfolio website built with React showcasing skills, experience, and certificates.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Skills Showcase**: Interactive skill bars showing proficiency levels
- **Experience Timeline**: Visual timeline of work experience
- **Certificate Gallery**: Modal-based certificate viewer
- **Contact Form**: Functional contact form
- **Resume Download**: Button to download resume PDF

## Setup Instructions

1. **Clone or download** this portfolio code
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add your certificates**:
   - Create a `public/certificates/` folder
   - Add your certificate PNG files with these names:
     - `react-cert.png`
     - `js-cert.png`
     - `aws-cert.png`
     - `fullstack-cert.png`
   - Or update the file paths in `components/Certificates.js`

4. **Add your resume**:
   - Place your resume PDF as `public/resume.pdf`
   - Or update the path in `components/Hero.js`

5. **Customize the content**:
   - Update personal information in all components
   - Modify skills, experience, and certificates data
   - Update contact information and social links

6. **Start the development server**:
   ```bash
   npm start
   ```

7. **Build for production**:
   ```bash
   npm run build
   ```

## File Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Experience.js & Experience.css
│   ├── Certificates.js & Certificates.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js
├── App.css
└── index.js

public/
├── certificates/
│   ├── react-cert.png
│   ├── js-cert.png
│   ├── aws-cert.png
│   └── fullstack-cert.png
└── resume.pdf
```

## Customization Guide

### Personal Information
- Update name, title, and description in `Hero.js`
- Modify about section content in `About.js`
- Update contact details in `Contact.js` and `Footer.js`

### Skills
- Edit the `skillCategories` array in `Skills.js`
- Add/remove skills and adjust proficiency levels

### Experience
- Modify the `experiences` array in `Experience.js`
- Update job titles, companies, dates, and descriptions

### Certificates
- Update the `certificates` array in `Certificates.js`
- Add your certificate images to `public/certificates/`

### Styling
- Modify CSS files to change colors, fonts, and layout
- The design uses CSS Grid and Flexbox for responsiveness
- Color scheme is based on blue gradients (can be easily changed)

## Deployment

This portfolio can be deployed to:
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `npm run build` and deploy the build folder

## Technologies Used

- React 18
- CSS3 (Grid, Flexbox, Animations)
- Modern JavaScript (ES6+)
- Responsive Design
- CSS Gradients and Animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio!