import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { HiArrowRight, HiCheck, HiRefresh } from 'react-icons/hi';
import {
    FINAL_CHOICES,
    INITIAL_APPROACHES,
    INITIAL_VALUES,
    OPENING_SCENE,
    STATE_INFO,
    TACTICAL_CHOICES,
    WORLD_STATE_MATRIX,
} from '../../data/palinodeWorld';

const clamp = (value) => Math.min(100, Math.max(0, value));

const applyEffects = (values, effects) => Object.keys(values).reduce((nextValues, key) => ({
    ...nextValues,
    [key]: clamp(values[key] + (effects[key] || 0)),
}), {});

const createInitialState = () => ({
    step: 0,
    values: { ...INITIAL_VALUES },
    approachId: null,
    tacticId: null,
    history: [],
    narrative: OPENING_SCENE,
    reveal: 'Five approaches are available. None is treated as the required mission.',
    outcome: null,
    liveMessage: 'Opening scene. Choose how Rin responds at Meridian Station.',
});

const demoReducer = (state, action) => {
    if (action.type === 'RESET') return createInitialState();
    if (action.type !== 'CHOOSE') return state;

    const choice = action.choice;
    const nextValues = applyEffects(state.values, choice.effects);
    const nextHistory = [
        ...state.history,
        {
            id: `${state.step + 1}-${choice.id}`,
            phase: state.step + 1,
            label: choice.label,
            effects: choice.effects,
        },
    ];

    if (state.step === 0) {
        return {
            ...state,
            step: 1,
            values: nextValues,
            approachId: choice.id,
            history: nextHistory,
            narrative: choice.narrative,
            reveal: choice.reveal,
            liveMessage: `First decision recorded: ${choice.label}. ${choice.narrative}`,
        };
    }

    if (state.step === 1) {
        return {
            ...state,
            step: 2,
            values: nextValues,
            tacticId: choice.id,
            history: nextHistory,
            narrative: choice.narrative,
            reveal: choice.reveal,
            liveMessage: `Second decision recorded: ${choice.label}. ${choice.narrative}`,
        };
    }

    const outcome = WORLD_STATE_MATRIX[state.approachId][choice.id];

    return {
        ...state,
        step: 3,
        values: nextValues,
        history: nextHistory,
        narrative: outcome.summary,
        reveal: 'This is one possible state produced by this path, not a canonical ending.',
        outcome,
        liveMessage: `Third decision recorded: ${choice.label}. Current world state: ${outcome.name}. ${outcome.summary}`,
    };
};

const EffectList = ({ effects }) => (
    <span className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap" aria-label="State changes">
        {STATE_INFO.map((stateItem) => {
            const delta = effects[stateItem.id];
            if (!delta) return null;

            return (
                <span
                    key={stateItem.id}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1 text-[11px] font-semibold text-slate-300"
                >
                    {stateItem.label} {delta > 0 ? '+' : ''}{delta}
                </span>
            );
        })}
    </span>
);

const StateMeters = ({ values }) => {
    const reduceMotion = useReducedMotion();

    return (
        <div className="grid grid-cols-2 gap-3">
            {STATE_INFO.map((stateItem) => (
                <div key={stateItem.id} className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
                    <div className="flex items-baseline justify-between gap-2">
                        <span className={`text-sm font-semibold ${stateItem.text}`}>{stateItem.label}</span>
                        <span className="text-lg font-bold text-white">{values[stateItem.id]}</span>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                        <motion.div
                            className={`h-full rounded-full ${stateItem.color}`}
                            animate={{ width: `${values[stateItem.id]}%` }}
                            transition={{ duration: reduceMotion ? 0 : 0.35 }}
                        />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-400">{stateItem.description}</p>
                </div>
            ))}
        </div>
    );
};

const WorldChoiceDemo = () => {
    const reduceMotion = useReducedMotion();
    const [state, dispatch] = useReducer(demoReducer, undefined, createInitialState);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sceneHeadingRef = useRef(null);
    const transitionTimerRef = useRef(null);

    const choices = useMemo(() => {
        if (state.step === 0) return INITIAL_APPROACHES;
        if (state.step === 1) return TACTICAL_CHOICES[state.approachId];
        if (state.step === 2) return FINAL_CHOICES;
        return [];
    }, [state.step, state.approachId]);

    const sceneTitle = state.step === 0
        ? 'Meridian Station // 00:07'
        : state.step === 1
            ? 'The first choice changes what becomes possible.'
            : state.step === 2
                ? 'Cyrune asks what kind of future should govern it.'
                : state.outcome.name;

    const phaseLabel = state.step === 0
        ? 'Opening scene'
        : state.step === 1
            ? 'Decision two // immediate consequence'
            : state.step === 2
                ? 'Decision three // civic direction'
                : 'Current World State';

    useEffect(() => () => window.clearTimeout(transitionTimerRef.current), []);

    useEffect(() => {
        if (state.history.length === 0) return;
        sceneHeadingRef.current?.focus({ preventScroll: true });
        sceneHeadingRef.current?.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'nearest',
        });
    }, [state.step, state.history.length, reduceMotion]);

    const choose = (choice) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        dispatch({ type: 'CHOOSE', choice });
        transitionTimerRef.current = window.setTimeout(
            () => setIsTransitioning(false),
            reduceMotion ? 0 : 260,
        );
    };

    const reset = () => {
        if (isTransitioning) return;
        dispatch({ type: 'RESET' });
        window.requestAnimationFrame(() => sceneHeadingRef.current?.focus({ preventScroll: true }));
    };

    return (
        <section id="sample-path" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="sample-path-title">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Deterministic systems demo</span>
                    <h2 id="sample-path-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Play a Sample Path</h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                        Make three decisions and watch the same opening crisis produce different knowledge, costs, political relationships, and civic outcomes.
                    </p>
                    <p className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-3 text-sm leading-relaxed text-cyan-100">
                        This bounded demonstration shows how decisions alter world state. A full AI text-world allows players to attempt actions beyond preset choices.
                    </p>
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20">
                    <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                        <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" aria-hidden="true" />
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">Revision model</span>
                        </div>
                        <button
                            type="button"
                            onClick={reset}
                            disabled={state.step === 0 || isTransitioning}
                            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-white/25 hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                        >
                            <HiRefresh aria-hidden="true" />
                            Reset Timeline
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
                        <div className="border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                            <div className="sr-only" aria-live="polite" aria-atomic="true">{state.liveMessage}</div>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">{phaseLabel}</span>
                            <h3
                                ref={sceneHeadingRef}
                                tabIndex={-1}
                                className="mt-3 scroll-mt-24 text-2xl font-bold leading-tight text-white outline-none sm:text-3xl"
                            >
                                {sceneTitle}
                            </h3>

                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={`narrative-${state.step}-${state.tacticId || state.approachId || 'opening'}`}
                                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                                    transition={{ duration: reduceMotion ? 0 : 0.24 }}
                                    className="mt-6"
                                >
                                    {Array.isArray(state.narrative) ? (
                                        <div className="space-y-4 text-base leading-relaxed text-slate-300">
                                            {state.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                        </div>
                                    ) : (
                                        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{state.narrative}</p>
                                    )}

                                    <div className="mt-5 rounded-xl border-l-2 border-violet-300/60 bg-violet-300/[0.05] px-4 py-3">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200">
                                            {state.step === 3 ? 'Design note' : 'New information'}
                                        </span>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{state.reveal}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {state.step < 3 ? (
                                <fieldset className="mt-8 space-y-3" disabled={isTransitioning}>
                                    <legend className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                                        Decision {state.step + 1} of 3
                                    </legend>
                                    {choices.map((choice, index) => (
                                        <motion.button
                                            key={choice.id}
                                            type="button"
                                            onClick={() => choose(choice)}
                                            disabled={isTransitioning}
                                            whileHover={reduceMotion ? undefined : { x: 3 }}
                                            whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                                            className="group block min-h-[76px] w-full rounded-xl border border-white/10 bg-white/[0.035] p-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.055] disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:p-5"
                                        >
                                            <span className="flex items-start gap-3">
                                                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-xs font-bold text-cyan-200">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span className="flex min-w-0 flex-1 items-start justify-between gap-3 pt-1">
                                                    <span className="font-semibold text-white">{choice.label}</span>
                                                    <HiArrowRight className="mt-0.5 h-5 w-5 flex-none text-cyan-300" aria-hidden="true" />
                                                </span>
                                            </span>
                                            <span className="mt-3 block sm:ml-11">
                                                <span className="sr-only text-sm leading-relaxed text-slate-400 sm:not-sr-only sm:block">
                                                    <span className="font-semibold text-slate-300">Possibility:</span> {choice.intent}
                                                </span>
                                                <span className="mt-1 block text-sm leading-relaxed text-slate-400">
                                                    <span className="font-semibold text-slate-300">Trade-off:</span> {choice.tradeoff}
                                                </span>
                                                <EffectList effects={choice.effects} />
                                            </span>
                                        </motion.button>
                                    ))}
                                </fieldset>
                            ) : (
                                <div className="mt-8 rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-blue-500/10 via-slate-950 to-violet-500/10 p-5 sm:p-6">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                                            <HiCheck aria-hidden="true" />
                                        </span>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Three decisions complete</span>
                                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                                This path is one of 30 deterministic routes leading to 15 possible named world states.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                        <button
                                            type="button"
                                            onClick={reset}
                                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                        >
                                            <HiRefresh aria-hidden="true" />
                                            Explore another path
                                        </button>
                                        <a
                                            href="#possible-states"
                                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                        >
                                            View possible states
                                            <HiArrowRight aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <aside className="bg-slate-950/35 p-5 sm:p-7 lg:p-8" aria-label="Narrative state and decision history">
                            <div className="flex items-center justify-between gap-3">
                                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">World state</h4>
                                <span className="text-xs text-slate-500">Values are not morality scores</span>
                            </div>
                            <div className="mt-5">
                                <StateMeters values={state.values} />
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Decision history</h4>
                                {state.history.length === 0 ? (
                                    <p className="mt-4 text-sm leading-relaxed text-slate-500">No decision recorded. The opening supports five distinct approaches.</p>
                                ) : (
                                    <ol className="mt-4 space-y-4">
                                        {state.history.map((entry) => (
                                            <li key={entry.id} className="flex gap-3">
                                                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-cyan-200">
                                                    {entry.phase}
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold leading-snug text-slate-200">{entry.label}</p>
                                                    <EffectList effects={entry.effects} />
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldChoiceDemo;
