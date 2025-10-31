import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Interview Preparation Platform',
      description: 'Developed a full-stack web application using React.js, Node.js, Express.js, and MongoDB to help users practice technical and HR interviews with AI-powered feedback. Integrated OpenAI GPT API for real-time answer evaluation and personalized suggestions.',
      image: 'https://via.placeholder.com/400x250/6366F1/FFFFFF?text=AI+Interview+Platform',
      github: 'https://github.com/sarumaliniRanjan/AI-Powered-Interview-Preparation-Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'JWT', 'TailwindCSS']
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce+Platform',
      github: 'https://github.com/yourusername/ecommerce-platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Manager',
      github: 'https://github.com/yourusername/task-manager',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io']
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App',
      github: 'https://github.com/yourusername/weather-dashboard',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'TailwindCSS']
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content management features.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Social+Dashboard',
      github: 'https://github.com/yourusername/social-dashboard',
      technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL']
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'A recipe discovery application that helps users find recipes based on ingredients, dietary preferences, and cooking time.',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Recipe+Finder',
      github: 'https://github.com/yourusername/recipe-finder',
      technologies: ['React', 'Spoonacular API', 'Redux', 'Styled Components']
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      image: 'https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Portfolio+Site',
      github: 'https://github.com/yourusername/portfolio',
      technologies: ['React', 'Framer Motion', 'TailwindCSS', 'EmailJS']
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="h-screen bg-gray-50 pt-20 px-4 overflow-y-auto">
      <div className="max-w-7xl mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          My <span className="text-orange-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
        >
          Here are some of the projects I've worked on. Click on any project to view the source code.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => window.open(project.github, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;