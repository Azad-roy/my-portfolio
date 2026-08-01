import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HiChevronDown, HiEye, HiEyeOff } from 'react-icons/hi';
import { CARD_CATEGORIES, WORLD_CARDS } from '../../data/palinodeWorld';

const CATEGORY_STYLES = {
    World: 'border-blue-300/25 bg-blue-300/10 text-blue-200',
    Location: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-200',
    Organization: 'border-indigo-300/25 bg-indigo-300/10 text-indigo-200',
    Character: 'border-violet-300/25 bg-violet-300/10 text-violet-200',
    Item: 'border-sky-300/25 bg-sky-300/10 text-sky-200',
    Faction: 'border-rose-300/25 bg-rose-300/10 text-rose-200',
    Rule: 'border-amber-300/25 bg-amber-300/10 text-amber-200',
    Foreshadowing: 'border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-200',
    Quest: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200',
};

const WorldCardExplorer = () => {
    const reduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState('All');
    const [expandedCards, setExpandedCards] = useState(() => new Set());
    const [revealedSpoilers, setRevealedSpoilers] = useState(() => new Set());

    const filteredCards = useMemo(
        () => activeCategory === 'All'
            ? WORLD_CARDS
            : WORLD_CARDS.filter((card) => card.category === activeCategory),
        [activeCategory],
    );

    const toggleExpanded = (cardId) => {
        setExpandedCards((current) => {
            const next = new Set(current);
            if (next.has(cardId)) next.delete(cardId);
            else next.add(cardId);
            return next;
        });
    };

    const toggleSpoiler = (cardId) => {
        setRevealedSpoilers((current) => {
            const next = new Set(current);
            if (next.has(cardId)) next.delete(cardId);
            else next.add(cardId);
            return next;
        });
    };

    return (
        <section className="border-y border-white/10 bg-slate-900/45 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="world-explorer-title">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Lore architecture</span>
                    <h2 id="world-explorer-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">World-card explorer</h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                        Browse the people, places, factions, objects, rules, quests, and planted clues that keep the world coherent across divergent play styles.
                    </p>
                </div>

                <nav className="mt-10" aria-label="Filter world cards by category">
                    <div className="-mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
                        <div className="flex w-max min-w-full gap-2 sm:flex-wrap">
                            {CARD_CATEGORIES.map((category) => {
                                const count = category === 'All'
                                    ? WORLD_CARDS.length
                                    : WORLD_CARDS.filter((card) => card.category === category).length;
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        aria-pressed={isActive}
                                        className={`inline-flex min-h-[44px] flex-none items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                                            isActive
                                                ? 'border-cyan-300/45 bg-cyan-300/15 text-cyan-100'
                                                : 'border-white/10 bg-white/[0.035] text-slate-400 hover:border-white/25 hover:text-white'
                                        }`}
                                    >
                                        {category}
                                        <span className="text-xs opacity-70">{count}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                <p className="mt-3 text-sm text-slate-500" aria-live="polite">
                    Showing {filteredCards.length} {activeCategory === 'All' ? 'world cards' : `${activeCategory.toLowerCase()} cards`}.
                </p>

                <div className="mt-8 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredCards.map((card, index) => {
                        const isExpanded = expandedCards.has(card.id);
                        const spoilerRevealed = revealedSpoilers.has(card.id);
                        const detailId = `world-card-detail-${card.id}`;
                        const spoilerId = `world-card-spoiler-${card.id}`;

                        return (
                            <motion.article
                                key={card.id}
                                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.2) }}
                                className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 shadow-lg shadow-black/10 sm:p-6"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${CATEGORY_STYLES[card.category]}`}>
                                        {card.category}
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">{card.id}</span>
                                </div>

                                <h3 className="mt-5 text-xl font-bold leading-snug text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.summary}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {card.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-white/[0.045] px-2.5 py-1 text-[11px] font-medium text-slate-500">{tag}</span>
                                    ))}
                                </div>

                                {isExpanded && (
                                    <div id={detailId} className="mt-5 border-t border-white/10 pt-5">
                                        {card.spoiler && !spoilerRevealed ? (
                                            <div className="rounded-xl border border-fuchsia-300/20 bg-fuchsia-300/[0.055] p-4">
                                                <div className="flex items-start gap-3">
                                                    <HiEyeOff className="mt-0.5 h-5 w-5 flex-none text-fuchsia-200" aria-hidden="true" />
                                                    <div>
                                                        <p className="text-sm font-semibold text-fuchsia-100">Meaningful spoiler hidden</p>
                                                        <p className="mt-1 text-xs leading-relaxed text-slate-400">Reveal the expanded detail only if you want more context.</p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSpoiler(card.id)}
                                                    aria-expanded="false"
                                                    aria-controls={spoilerId}
                                                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-fuchsia-300/25 px-4 py-2 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-200"
                                                >
                                                    <HiEye aria-hidden="true" />
                                                    Reveal spoiler
                                                </button>
                                            </div>
                                        ) : (
                                            <div id={spoilerId}>
                                                <p className="text-sm leading-relaxed text-slate-300">{card.detail}</p>
                                                {card.spoiler && (
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleSpoiler(card.id)}
                                                        aria-expanded="true"
                                                        aria-controls={spoilerId}
                                                        className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                                    >
                                                        <HiEyeOff aria-hidden="true" />
                                                        Hide spoiler
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <button
                                    type="button"
                                    onClick={() => toggleExpanded(card.id)}
                                    aria-expanded={isExpanded}
                                    aria-controls={detailId}
                                    className="mt-5 inline-flex min-h-[44px] w-full items-center justify-between rounded-lg border-t border-white/10 pt-4 text-sm font-semibold text-slate-300 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                >
                                    {isExpanded ? 'Close dossier' : 'Open dossier'}
                                    <HiChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorldCardExplorer;
