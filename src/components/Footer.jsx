// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithub, SiTwitter, SiLinkedin, SiDiscord } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: SiGithub, href: 'https://github.com/Azad-roy', label: 'GitHub' },
        { icon: SiTwitter, href: 'https://x.com/gOOgly_15', label: 'Twitter' },
        { icon: SiLinkedin, href: 'https://www.linkedin.com/in/azad-kumar-b358a026b/', label: 'LinkedIn' },
        // { icon: SiDiscord, href: 'https://discord.com/users/username', label: 'Discord' },
    ];

    return (
        <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-300 max-w-md">
                            Full Stack Developer & AI Prompt Engineer creating beautiful, functional
                            web applications and powerful AI prompts.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/prompts" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Prompts
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        © {currentYear} Azad Kumar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;