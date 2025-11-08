// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiDownload, HiMail } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Azad Kumar
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
                    >
                        Full Stack Developer & AI Prompt Engineer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
                    >
                        I create beautiful, functional web applications and craft powerful AI prompts
                        that enhance productivity and creativity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <HiMail className="mr-2" />
                            Get In Touch
                        </Link>

                        {/* <button className="inline-flex items-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                            <HiDownload className="mr-2" />
                            Download Resume
                        </button> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;