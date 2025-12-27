import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HiSparkles,
    HiCheck,
    HiArrowRight,
    HiExternalLink,
    HiChevronLeft,
    HiChevronRight,
    HiCollection
} from 'react-icons/hi';
import promptsData from '../data/prompts.json';

const trackPromptClick = (label) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "promptbase_click", {
            event_category: "outbound",
            event_label: label || "unknown_prompt"
        });
    }
};




const PromptsPage = () => {
    const { prompts, profile } = promptsData;
    const [currentPage, setCurrentPage] = useState(1);
    const promptsPerPage = 2;

    // Calculate pagination
    const indexOfLastPrompt = currentPage * promptsPerPage;
    const indexOfFirstPrompt = indexOfLastPrompt - promptsPerPage;
    const currentPrompts = prompts.slice(indexOfFirstPrompt, indexOfLastPrompt);
    const totalPages = Math.ceil(prompts.length / promptsPerPage);

    // Pagination functions
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
                        <HiCollection className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {prompts.length} Premium Prompts Available
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        AI Prompt Templates
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
                        Browse our collection of professionally crafted AI prompts
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                        <HiSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            Available on PromptBase
                        </span>
                    </div>
                </motion.div>

                {/* Page Info */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-300">
                            Showing prompts <span className="font-semibold">{indexOfFirstPrompt + 1}-{Math.min(indexOfLastPrompt, prompts.length)}</span> of <span className="font-semibold">{prompts.length}</span>
                        </p>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                        Page {currentPage} of {totalPages}
                    </div>
                </div>

                {/* Prompts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {currentPrompts.map((prompt, index) => (
                        <motion.div
                            key={prompt.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >

                            {/* Header */}
                            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-900/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full">
                                        <HiSparkles className="w-3 h-3 text-purple-600 dark:text-purple-400 mr-1" />
                                        <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                                            {prompt.category}
                                        </span>
                                    </div>
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                                        {prompt.price}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                    {prompt.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-300">
                                    {prompt.description}
                                </p>
                            </div>

                            {/* Images Grid - 2 images per prompt */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                    Sample Results
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    {prompt.results.map((result, idx) => (
                                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 mb-3 relative group">
                                            {/* Actual Image */}
                                            {result.image && (
                                                <img
                                                    src={result.image}
                                                    alt={result.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            )}

                                            {/* Image Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <span className="text-white text-sm font-medium">{result.title}</span>
                                            </div>

                                            {/* Fallback if no image */}
                                            {!result.image && (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-center p-4">
                                                        <div className="text-3xl mb-2">🎨</div>
                                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                                            AI-generated preview
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                                    These images are sample results generated using the prompt. The prompt allows unlimited variations.
                                </p>


                                {/* Quick Benefits */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                                        Key Features:
                                    </h4>
                                    <div className="space-y-2">
                                        {prompt.benefits.slice(0, 3).map((benefit, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                                <HiCheck className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                                    {benefit}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <motion.a
                                    href={prompt.promptBaseUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                        trackPromptClick(`${prompt.title} | page:${currentPage}`)
                                    }
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Get This Prompt
                                    <HiExternalLink className="inline-block ml-2 w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                        Showing {currentPrompts.length} prompts per page
                    </div>

                    <div className="flex items-center space-x-2">
                        {/* Previous Button */}
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === 1
                                ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                                : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                        >

                            <HiChevronLeft className="w-5 h-5" />
                            <span className="ml-1">Previous</span>
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center space-x-1">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNumber;
                                if (totalPages <= 5) {
                                    pageNumber = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNumber = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNumber = totalPages - 4 + i;
                                } else {
                                    pageNumber = currentPage - 2 + i;
                                }

                                if (pageNumber < 1 || pageNumber > totalPages) return null;

                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => goToPage(pageNumber)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${currentPage === pageNumber
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}

                            {totalPages > 5 && currentPage < totalPages - 2 && (
                                <>
                                    <span className="text-slate-400 dark:text-slate-600">...</span>
                                    <button
                                        onClick={() => goToPage(totalPages)}
                                        className="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === totalPages
                                ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                                : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                        >
                            <span className="mr-1">Next</span>
                            <HiChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="text-sm text-slate-600 dark:text-slate-400">
                        {totalPages} total pages
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-200 dark:border-slate-700">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {prompts.length}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                Total Prompts
                            </div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-200 dark:border-slate-700">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                {prompts.reduce((sum, prompt) => sum + prompt.results.length, 0)}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                Sample Images
                            </div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-200 dark:border-slate-700">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                                {promptsPerPage}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                Per Page
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            More Premium Prompts Available
                        </h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            {profile.description}
                        </p>
                        <motion.a
                            href={profile.promptbaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackPromptClick("profile_page")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Browse All {prompts.length} Prompts
                            <HiArrowRight className="ml-2 w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PromptsPage;