# Saru Malinda - Personal Portfolio

A modern, responsive portfolio website built with React, JavaScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Smooth Animations**: Page transitions and element animations using Framer Motion
- **Interactive Elements**: Hover effects, typing animations, and progress bars
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Grid layout for projects with GitHub integration
- **Skills Display**: Circular progress bars for technical skills

## Pages

1. **Home**: Hero section with animated name and role, download resume button
2. **About**: Professional summary with profile section and social links
3. **Skills**: Technical skills with animated progress bars and additional technologies
4. **Projects**: Project cards with hover effects and GitHub links
5. **Contact**: Contact form with EmailJS integration and contact information

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- EmailJS
- JavaScript (ES6+)

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the credentials in `src/pages/Contact.js`:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID';
     const templateId = 'YOUR_TEMPLATE_ID';
     const publicKey = 'YOUR_PUBLIC_KEY';
     ```

3. **Add Resume File**:
   - Place your resume PDF in the `public` folder as `resume.pdf`

4. **Update Content**:
   - Replace placeholder content in all pages with your actual information
   - Update project details in `src/pages/Projects.js`
   - Update skills and percentages in `src/pages/Skills.js`
   - Update contact information in `src/pages/Contact.js`

5. **Start Development Server**:
   ```bash
   npm start
   ```

6. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

### Colors
The primary color scheme uses orange (`#F97316`). To change colors, update the Tailwind classes throughout the components.

### Content
- **About Section**: Update the professional summary in `src/pages/About.js`
- **Skills**: Modify the skills array in `src/pages/Skills.js`
- **Projects**: Update the projects array in `src/pages/Projects.js`
- **Contact Info**: Update contact details in `src/pages/Contact.js`

### Images
- Replace placeholder project images with actual project screenshots
- Add a profile image in the About section

## Deployment

This project can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to reach out through the contact form on the website.