// src/pages/Prompts.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PromptCard from '../components/PromptCard';
import promptsData from '../data/prompts.json';

const Prompts = () => {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        AI Prompts
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                        Discover my collection of carefully crafted AI prompts designed to
                        enhance productivity and creativity across various domains.
                    </p>

                    {/* PromptBase Profile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white max-w-2xl mx-auto"
                    >
                        <h2 className="text-2xl font-bold mb-4">Premium Prompts</h2>
                        <p className="mb-6 opacity-90">
                            {promptsData.profile.description}
                        </p>
                        <a
                            href={promptsData.profile.promptbaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-200 transform hover:scale-105"
                        >
                            Visit My PromptBase Profile
                        </a>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {promptsData.prompts.map((prompt, index) => (
                        <PromptCard key={prompt.id} prompt={prompt} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Prompts;