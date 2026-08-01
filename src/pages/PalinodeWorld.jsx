import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    HiArrowLeft,
    HiArrowRight,
    HiCheck,
    HiChevronRight,
    HiSparkles,
} from 'react-icons/hi';
import WorldCardExplorer from '../components/palinode/WorldCardExplorer';
import WorldChoiceDemo from '../components/palinode/WorldChoiceDemo';
import {
    CONSEQUENCE_TYPES,
    CORE_RULES,
    FREEDOM_AXES,
    INITIAL_APPROACHES,
    SYSTEM_PRINCIPLES,
    WORLD_META,
    WORLD_STATE_MATRIX,
} from '../data/palinodeWorld';

const META_DESCRIPTION = 'Explore PALINODE // 7, an original open-ended science-fiction world concept featuring reactive factions, persistent lore, nonlinear choices, and multiple possible futures.';

const BlackGlassKey = ({ compact = false }) => (
    <div className={`relative flex-none ${compact ? 'h-16 w-12' : 'h-52 w-36 sm:h-64 sm:w-44'}`} aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[42%] aspect-square -translate-x-1/2 rounded-full border-[10px] border-slate-950 bg-gradient-to-br from-slate-700 via-slate-950 to-black shadow-[0_0_50px_rgba(96,165,250,0.25)] sm:border-[14px]">
            <div className="absolute inset-[28%] rounded-full border border-cyan-200/20 bg-slate-950" />
        </div>
        <div className="absolute left-1/2 top-[35%] h-[58%] w-[18%] -translate-x-1/2 rounded-b-md bg-gradient-to-r from-slate-950 via-slate-700 to-black shadow-xl">
            <div className="absolute bottom-[20%] left-full h-[15%] w-[90%] rounded-r-sm bg-gradient-to-b from-slate-700 to-slate-950" />
            <div className="absolute bottom-[4%] left-full h-[14%] w-[60%] rounded-r-sm bg-gradient-to-b from-slate-700 to-slate-950" />
        </div>
        <div className="absolute left-[42%] top-[44%] h-[42%] w-px bg-cyan-200/25" />
    </div>
);

const TimelineMotif = ({ reduceMotion }) => (
    <div className="relative mx-auto h-[370px] w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 shadow-2xl shadow-black/30" aria-hidden="true">
        <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
                backgroundImage: 'linear-gradient(rgba(148,163,184,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.45) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }}
        />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />

        {[0, 1, 2, 3, 4, 5, 6].map((line) => (
            <motion.div
                key={line}
                initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : line * 0.07 }}
                className="absolute left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-violet-300/10"
                style={{ top: `${14 + line * 11}%`, transform: `translateX(${line * 7}px)` }}
            >
                <span className="absolute -top-1.5 h-3 w-3 rounded-full border border-cyan-200/60 bg-slate-950" style={{ left: `${12 + line * 11}%` }} />
            </motion.div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 flex h-28 items-end opacity-70">
            {[42, 68, 54, 88, 60, 104, 76, 48, 94, 64, 82].map((height, index) => (
                <div
                    key={`${height}-${index}`}
                    className="flex-1 border-l border-t border-slate-600/35 bg-slate-950/80"
                    style={{ height: `${height}px` }}
                />
            ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pt-12">
            <BlackGlassKey />
        </div>
        <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-slate-950/75 px-3 py-2 backdrop-blur-sm">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">Threshold coordinate</span>
            <span className="mt-1 block text-xs font-bold text-cyan-200">MERIDIAN // 00:07</span>
        </div>
    </div>
);

const Reveal = ({ children, className = '', delay = 0 }) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const PalinodeWorld = () => {
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const previousTitle = document.title;
        const existingDescription = document.querySelector('meta[name="description"]');
        const previousDescription = existingDescription?.getAttribute('content');
        const descriptionElement = existingDescription || document.createElement('meta');
        const createdDescription = !existingDescription;

        if (createdDescription) {
            descriptionElement.setAttribute('name', 'description');
            document.head.appendChild(descriptionElement);
        }

        document.title = 'PALINODE // 7 | Interactive World by Azad Roy';
        descriptionElement.setAttribute('content', META_DESCRIPTION);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        return () => {
            document.title = previousTitle;
            if (createdDescription) descriptionElement.remove();
            else if (previousDescription !== null && previousDescription !== undefined) {
                descriptionElement.setAttribute('content', previousDescription);
            } else {
                descriptionElement.removeAttribute('content');
            }
        };
    }, []);

    return (
        <article className="overflow-hidden bg-slate-950 text-slate-100" aria-labelledby="palinode-title">
            <header className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden border-b border-white/10">
                <div
                    className="absolute inset-0 opacity-[0.055]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                    aria-hidden="true"
                />
                <div className="absolute -left-44 top-20 h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-[130px]" aria-hidden="true" />
                <div className="absolute -right-44 bottom-0 h-[32rem] w-[32rem] rounded-full bg-violet-600/15 blur-[140px]" aria-hidden="true" />

                <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.65 }}
                        className="max-w-3xl"
                    >
                        <Link
                            to="/projects"
                            className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                        >
                            <HiArrowLeft aria-hidden="true" />
                            Back to projects
                        </Link>

                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                                <HiSparkles aria-hidden="true" />
                                Original Interactive World Concept
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">World file 07</span>
                        </div>

                        <h1 id="palinode-title" className="font-black leading-[0.88] tracking-[-0.055em] text-white">
                            <span className="block text-5xl sm:text-7xl lg:text-8xl">PALINODE</span>
                            <span className="mt-3 block bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-300 bg-clip-text text-4xl text-transparent sm:text-6xl lg:text-7xl">// 7</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-slate-100 sm:text-2xl">
                            {WORLD_META.tagline}
                        </p>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            A deterministic portfolio demonstration of an open-ended narrative system: reactive factions, persistent lore, player-shaped goals, and consequences that rewrite the city.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#sample-path"
                                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/35 transition hover:from-blue-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                            >
                                Play a sample path
                                <HiArrowRight aria-hidden="true" />
                            </a>
                            <a
                                href="#world-premise"
                                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.035] px-7 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                            >
                                Open the world file
                                <HiChevronRight aria-hidden="true" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.12 }}
                    >
                        <TimelineMotif reduceMotion={reduceMotion} />
                    </motion.div>
                </div>
            </header>

            <section id="world-premise" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="world-premise-title">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <Reveal>
                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">World premise</span>
                            <h2 id="world-premise-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Prediction became geography.</h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-300">{WORLD_META.premise}</p>
                            <p className="mt-5 text-base leading-relaxed text-slate-400">
                                Every major choice strengthens some futures while erasing pieces of others. Saving one person can remove another person’s history. Moving an object between futures creates a memory debt. No faction possesses the complete truth, and no outcome is treated as objectively correct.
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} className="rounded-2xl border border-white/10 bg-slate-900/55 p-6 sm:p-8">
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">World metadata</span>
                            <dl className="mt-6 divide-y divide-white/10">
                                {[
                                    ['Genre', WORLD_META.genre],
                                    ['Perspective', WORLD_META.perspective],
                                    ['Setting', WORLD_META.setting],
                                    ['Protagonist', WORLD_META.protagonist],
                                    ['Format', 'Deterministic interactive narrative-system demonstration'],
                                ].map(([label, value]) => (
                                    <div key={label} className="grid gap-2 py-4 sm:grid-cols-[120px_1fr]">
                                        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</dt>
                                        <dd className="text-sm leading-relaxed text-slate-200">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>

                    <div className="mt-16">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Core world rules</span>
                                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Ten constraints. No canonical solution.</h3>
                            </div>
                            <p className="max-w-md text-sm leading-relaxed text-slate-500">These rules stay consistent even when characters, loyalties, and objectives change.</p>
                        </div>
                        <ol className="mt-8 grid gap-3 md:grid-cols-2">
                            {CORE_RULES.map((rule, index) => (
                                <li key={rule} className="flex min-h-[76px] items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
                                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] text-xs font-bold text-cyan-200">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="pt-1 text-sm leading-relaxed text-slate-300">{rule}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-slate-900/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="world-not-script-title">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Player freedom</span>
                        <h2 id="world-not-script-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">A World, Not a Script</h2>
                        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                            Rin has a history, not a predetermined role. The world responds to what the player values, whom they empower, and which consequences they accept.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {FREEDOM_AXES.map((axis, index) => (
                            <Reveal key={axis.title} delay={index * 0.06} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">Player axis {String(index + 1).padStart(2, '0')}</span>
                                <h3 className="mt-4 text-xl font-bold text-white">{axis.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">{axis.description}</p>
                                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${axis.title} possibilities`}>
                                    {axis.options.map((option) => (
                                        <li key={option} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300">{option}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-violet-300/15 bg-violet-300/[0.045] p-6 sm:p-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-violet-200">Choices reshape</h3>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {CONSEQUENCE_TYPES.map((consequence) => (
                                <li key={consequence} className="flex items-center gap-3 text-sm text-slate-300">
                                    <HiCheck className="h-5 w-5 flex-none text-cyan-300" aria-hidden="true" />
                                    {consequence}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <WorldChoiceDemo />
            <WorldCardExplorer />

            <section id="possible-states" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="possible-states-title">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">Path testing</span>
                        <h2 id="possible-states-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Fifteen possible world states.</h2>
                        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                            Five opening approaches can combine with two branch-specific tactics and three civic directions, producing 30 tested paths. These states are consequences, not canonical endings.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {INITIAL_APPROACHES.map((approach, index) => (
                            <Reveal key={approach.id} delay={index * 0.045} className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
                                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600">Opening vector {String(index + 1).padStart(2, '0')}</span>
                                <h3 className="mt-3 text-lg font-bold text-white">{approach.shortLabel}</h3>
                                <ul className="mt-5 space-y-4">
                                    {Object.entries(WORLD_STATE_MATRIX[approach.id]).map(([direction, state]) => (
                                        <li key={direction} className="border-l border-white/10 pl-4">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">{direction}</span>
                                            <p className="mt-1 font-semibold text-slate-200">{state.name}</p>
                                            <p className="mt-1 text-xs leading-relaxed text-slate-500">{state.summary}</p>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-slate-900/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="system-principles-title">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">Narrative-system design</span>
                        <h2 id="system-principles-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Designed to sustain open intention.</h2>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                        {SYSTEM_PRINCIPLES.map((principle) => (
                            <div key={principle.number} className="bg-slate-950 p-6 sm:p-8">
                                <span className="text-xs font-bold tracking-[0.24em] text-blue-300">{principle.number}</span>
                                <h3 className="mt-5 text-xl font-bold leading-snug text-white">{principle.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-slate-400">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="project-information-title">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Project information</span>
                            <h2 id="project-information-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">A portfolio prototype, honestly framed.</h2>
                            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                                This page demonstrates world architecture, branching-state design, consequence modeling, responsive interaction, and accessible progressive disclosure. It is not connected to a live language model and does not pretend to understand free-form input.
                            </p>
                        </div>

                        <dl className="grid gap-4 sm:grid-cols-2">
                            {[
                                ['Format', 'Deterministic front-end narrative demonstration'],
                                ['State model', 'React useReducer with clamped, visible world values'],
                                ['Interface', 'React, Tailwind CSS, and Framer Motion'],
                                ['Content model', 'Data-driven lore cards, paths, factions, rules, and outcomes'],
                                ['Path coverage', '30 deterministic routes and 15 named world states'],
                                ['Accessibility', 'Native controls, focus management, live updates, and reduced motion'],
                            ].map(([label, value]) => (
                                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                                    <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</dt>
                                    <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-200">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28" aria-labelledby="palinode-cta-title">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-violet-600/20 p-7 sm:p-10 lg:p-14">
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div className="max-w-3xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Continue exploring</span>
                            <h2 id="palinode-cta-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Interested in the systems behind the world?</h2>
                            <p className="mt-5 text-base leading-relaxed text-slate-300">Explore other portfolio work or start a conversation about interactive narrative, product storytelling, and responsive front-end experiences.</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Link
                                to="/projects"
                                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900"
                            >
                                View other projects
                                <HiArrowRight aria-hidden="true" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900"
                            >
                                Contact me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <aside className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8" aria-label="Independent concept disclosure">
                <div className="mx-auto flex max-w-7xl items-start gap-4 text-sm leading-relaxed text-slate-500">
                    <BlackGlassKey compact />
                    <p className="max-w-4xl pt-2">
                        This is an independent portfolio demonstration created to showcase open-ended narrative and worldbuilding design. It is not affiliated with Cijie or any other interactive-fiction platform.
                    </p>
                </div>
            </aside>
        </article>
    );
};

export default PalinodeWorld;
