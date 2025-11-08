// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-xs font-medium text-slate-700 dark:text-slate-300 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-all duration-200"
                    >
                        <HiExternalLink className="mr-2" />
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;