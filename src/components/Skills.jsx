// src/components/Skills.jsx

import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import skillsData from '../data/skills.json';

const Skills = () => {
    const getIcon = (iconName) => {
        // Check if it's a Simple Icon (starts with Si)
        if (iconName.startsWith('Si')) {
            const IconComponent = SiIcons[iconName];
            return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
        }
        // Check if it's a Font Awesome Icon (starts with Fa)
        else if (iconName.startsWith('Fa')) {
            const IconComponent = FaIcons[iconName];
            return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
        }
        return null;
    };

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {skillsData.categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                                {category.name}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="text-slate-700 dark:text-slate-300">
                                                {getIcon(skill.icon)}
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1), duration: 1 }}
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 w-8">
                                                {skill.level}%
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;