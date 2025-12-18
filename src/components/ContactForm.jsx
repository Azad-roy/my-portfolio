// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const formDataEncoded = new URLSearchParams({
                'form-name': 'contact',
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }).toString();

            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formDataEncoded,
            });

            // ✅ ALWAYS SUCCESS FOR NETLIFY
            setShowToast(true);
            setShowErrorToast(false);
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setShowToast(false), 3000);
        } catch (error) {
            setErrorMessage('Network error. Please try again.');
            setShowErrorToast(true);

            setTimeout(() => setShowErrorToast(false), 3000);
        }
        finally {
            setIsSubmitting(false);
        }
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <>
            {/* SUCCESS TOAST */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2"
                >
                    <HiCheckCircle size={20} />
                    <span>Message sent successfully!</span>
                </motion.div>
            )}

            {/* ERROR TOAST */}
            {showErrorToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2"
                >
                    <HiExclamationCircle size={20} />
                    <span>{errorMessage}</span>
                </motion.div>
            )}


            <motion.form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
            >

                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name
                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 dark:focus:border-red-400'
                            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                            } bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                        placeholder="Your full name"
                    />

                    {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email
                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 dark:focus:border-red-400'
                            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                            } bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.message
                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 dark:focus:border-red-400'
                            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                            } bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none`}
                        placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform shadow-lg hover:shadow-xl"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
            </motion.form>
        </>
    );
};

export default ContactForm;