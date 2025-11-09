import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Home = () => {
    const featuredProjects = projectsData.projects.slice(0, 3);

    return (
        <div>
            <Hero />
            <Skills />

            {/* Featured Projects */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Here are some of my recent projects that showcase my skills and expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;