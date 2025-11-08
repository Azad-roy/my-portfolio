// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
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
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        Send me a message and I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                    <HiMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                        Email
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        omobizino@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                                    <HiLocationMarker className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                        Location
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        INDIA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;