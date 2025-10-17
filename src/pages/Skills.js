import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Python', level: 80, color: 'bg-green-500' },
    { name: 'HTML/CSS', level: 95, color: 'bg-red-500' },
    { name: 'TailwindCSS', level: 88, color: 'bg-cyan-500' },
    { name: 'Java', level: 75, color: 'bg-orange-600' },
    { name: 'Node.js', level: 82, color: 'bg-green-600' },
    { name: 'Git/GitHub', level: 85, color: 'bg-gray-700' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skills.forEach(skill => {
        animated[skill.name] = skill.level;
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const CircularProgress = ({ skill, index }) => {
    const [progress, setProgress] = useState(0);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 200 + 500);

      return () => clearTimeout(timer);
    }, [skill.level, index]);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={`${skill.color.replace('bg-', 'text-')} transition-all duration-1000 ease-out`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-700">{progress}%</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
      </motion.div>
    );
  };

  return (
    <div className="h-screen bg-gray-50 pt-20 px-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          My <span className="text-orange-500">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
        >
          Here are the technologies and tools I work with to bring ideas to life
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <CircularProgress key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['MongoDB', 'Express.js', 'Firebase', 'REST APIs', 'GraphQL', 'Docker', 'AWS', 'Figma'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-gray-100 rounded-lg p-3 text-center hover:bg-orange-100 transition-colors duration-300"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;