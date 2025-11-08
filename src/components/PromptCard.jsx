// src/components/PromptCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiClipboard, HiClipboardCheck } from 'react-icons/hi';

const PromptCard = ({ prompt, index }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(prompt.prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {prompt.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                        {prompt.category}
                    </span>
                </div>

                <button
                    onClick={copyToClipboard}
                    className="p-2 text-slate-400 hover:text-blue-500 transition-colors duration-200"
                >
                    {copied ? <HiClipboardCheck size={20} /> : <HiClipboard size={20} />}
                </button>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 mb-4">
                {prompt.description}
            </p>

            {/* Prompt Preview */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Prompt:
                </label>
                <div className="bg-slate-100 dark:bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3">
                        {prompt.prompt}
                    </p>
                </div>
            </div>

            {/* Example Output */}
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Example Output:
                </label>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
                    <p className="text-slate-500 dark:text-slate-400 text-sm italic">
                        {prompt.exampleOutput}
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
                {prompt.tags.map((tag, tagIndex) => (
                    <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default PromptCard;