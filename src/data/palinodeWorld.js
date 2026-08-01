export const WORLD_META = {
    title: 'PALINODE // 7',
    tagline: 'Seven futures share one city. Only one remembers you.',
    genre: 'Temporal science fiction · Mystery · Political intrigue · Open-ended roleplay',
    perspective: 'First person',
    setting: 'Cyrune, after the Revision',
    protagonist: 'Rin Vale, civic archivist and the only confirmed Seamwalker',
    premise:
        'PALINODE was built to model the safest possible future for Cyrune. During the Revision, it failed to choose. Seven mutually incompatible cities now occupy the same streets, and most people remember only the future currently surrounding them. Rin Vale remembers all seven.',
};

export const OPENING_SCENE = [
    'At 00:07, every clock in Meridian Station displayed a different date.',
    'Seven versions of the station occupied the same platform: one flooded, one burning, one abandoned, one filled with trees, and three crowded with people who could not see one another.',
    'In my hand was a black-glass key I did not remember taking. Scratched into its surface, in my own handwriting, were seven words: “Do not restore the future we came from.”',
    'The evacuation announcement spoke in my voice. Future Seven would be deleted in nine minutes.',
    'Marshal Elian Kade ordered me to surrender the key in the name of the Directorate. Sera Nox offered escape aboard a train that had never existed. A child named Ivo Pell stared at me as if we had met before.',
    '“You erased my family,” he said.',
    'I could trust one of them, question all of them, destroy the key, leave the station, or attempt something none of them expected.',
];

export const CORE_RULES = [
    'Seven incompatible futures coexist in the same physical city.',
    'Threshold locations allow people and objects to cross between futures.',
    'Every transfer creates a memory debt: something personally meaningful is forgotten or rewritten.',
    'Major decisions strengthen one future and destabilize others.',
    'Rin remembers revisions that everyone else forgets.',
    'Death in one future is reversible only while another version of that person survives.',
    'If all futures merge, contradictions become permanent.',
    'There is no confirmed original timeline.',
    'No faction is completely correct or completely evil.',
    'The player may reject every offered quest and pursue a personal goal.',
];

export const FREEDOM_AXES = [
    {
        title: 'Identity',
        description: 'Decide what Rin becomes inside the crisis.',
        options: ['Archivist', 'Negotiator', 'Smuggler', 'Investigator', 'Revolutionary', 'Opportunist', 'Undefined'],
    },
    {
        title: 'Allegiance',
        description: 'Treat loyalty as a changing relationship, not a class selection.',
        options: ['Join a faction', 'Work between factions', 'Betray one', 'Manipulate all', 'Remain independent'],
    },
    {
        title: 'Objective',
        description: 'The city-wide emergency never cancels a personal ambition.',
        options: ['Save one future', 'Preserve all seven', 'Build an eighth', 'Escape', 'Gain power', 'Rescue one person', 'Find the truth', 'Ignore the crisis'],
    },
    {
        title: 'Method',
        description: 'Different methods alter relationships and what becomes knowable.',
        options: ['Dialogue', 'Investigation', 'Deception', 'Trade', 'Political influence', 'Sabotage', 'Violence', 'Sacrifice', 'Withdrawal'],
    },
];

export const CONSEQUENCE_TYPES = [
    'Relationships',
    'Available locations',
    'World stability',
    'Memories',
    'Faction power',
    'Interpretation of earlier events',
];

export const STATE_INFO = [
    {
        id: 'continuity',
        label: 'Continuity',
        description: 'How strongly one coherent future dominates. Stability can require erasure.',
        color: 'bg-blue-400',
        text: 'text-blue-200',
    },
    {
        id: 'memory',
        label: 'Memory',
        description: 'How much cross-future truth remains accessible. Remembering always carries debt.',
        color: 'bg-violet-400',
        text: 'text-violet-200',
    },
    {
        id: 'paradox',
        label: 'Paradox',
        description: 'How many contradictions are physically active. Low is safer, not necessarily fairer.',
        color: 'bg-cyan-400',
        text: 'text-cyan-200',
    },
    {
        id: 'trust',
        label: 'Public Trust',
        description: 'How willing Cyrune is to act on Rin’s account. Approval is not moral correctness.',
        color: 'bg-rose-400',
        text: 'text-rose-200',
    },
];

export const INITIAL_VALUES = {
    continuity: 48,
    memory: 72,
    paradox: 21,
    trust: 35,
};

export const INITIAL_APPROACHES = [
    {
        id: 'sera',
        label: 'Follow Sera toward the impossible train',
        shortLabel: 'Follow Sera',
        intent: 'Escape the deletion zone and learn how the Quiet Exchange moves between futures.',
        tradeoff: 'Gain mobility and forbidden routes; incur a personal memory debt and empower a smuggler network.',
        effects: { continuity: -8, memory: -6, paradox: 12, trust: -4 },
        narrative:
            'I followed Sera through a service door that opened onto a moving train. My archive badge became the fare. When the conductor stamped it, I forgot the name of the person who recruited me into public service. Sera showed me a passenger list containing refugees from a future the Directorate claimed had never existed.',
        reveal: 'The impossible train is a mobile threshold, and Sera has been evacuating people before each official deletion.',
    },
    {
        id: 'kade',
        label: 'Surrender the key to Marshal Kade',
        shortLabel: 'Trust Kade',
        intent: 'Use Directorate authority to stabilize the station before the futures collide.',
        tradeoff: 'Gain institutional reach and temporary order; surrender leverage to a system built on selective erasure.',
        effects: { continuity: 14, memory: -10, paradox: -5, trust: 7 },
        narrative:
            'I placed the black-glass key in Kade’s palm. The station stopped flickering long enough for the Directorate to open an evacuation corridor. Then I noticed the deletion authorization already carried Kade’s signature—timestamped three hours before the alarms began. He gave me command access but kept the key and the explanation.',
        reveal: 'Kade knew Future Seven was marked for deletion before the station announced the crisis.',
    },
    {
        id: 'ivo',
        label: 'Question and protect Ivo',
        shortLabel: 'Protect Ivo',
        intent: 'Treat the child’s impossible memory as evidence rather than an interruption.',
        tradeoff: 'Recover erased testimony and public sympathy; expose Ivo to every faction searching for anomalous witnesses.',
        effects: { continuity: -4, memory: 11, paradox: 8, trust: 9 },
        narrative:
            'I pulled Ivo behind the archive kiosk and asked what name he knew me by. “Rin Pell,” he answered. The surname struck like a recovered injury. When I touched his hand, I remembered teaching him to read station maps in a home neither of us currently possessed. The memory lit every Directorate scanner on the platform.',
        reveal: 'In at least one erased future, Rin belonged to Ivo’s family.',
    },
    {
        id: 'destroy',
        label: 'Destroy the Recantation Key',
        shortLabel: 'Destroy the key',
        intent: 'Remove the object every faction assumes must decide the city’s future.',
        tradeoff: 'Prevent immediate control of PALINODE; release uncontained memories and lose the safest known interface to the system.',
        effects: { continuity: -15, memory: -8, paradox: 18, trust: -6 },
        narrative:
            'I brought the key down against the platform edge. It broke without a sound. Seven black shards rose into the air, each reflecting a different version of my face. Every person in Meridian remembered one stolen minute from another life. The deletion countdown stopped—but so did every threshold lock in the city.',
        reveal: 'The key was regulating memory access, not merely unlocking it.',
    },
    {
        id: 'leave',
        label: 'Reject everyone and leave Meridian Station',
        shortLabel: 'Leave Meridian',
        intent: 'Refuse the crisis roles others have prepared and pursue a goal of Rin’s own.',
        tradeoff: 'Preserve independence and open Sector Zero; abandon immediate influence over the station evacuation.',
        effects: { continuity: -6, memory: 4, paradox: 5, trust: -11 },
        narrative:
            'I ignored Kade, Sera, and the evacuation route. The Thread Compass pointed away from every visible platform and toward a maintenance tunnel missing from all seven maps. Behind me, the station chose leaders without me. Ahead, lights came on in Sector Zero, one building at a time, as if something had noticed my refusal.',
        reveal: 'Sector Zero responds to actions PALINODE did not predict.',
    },
];

export const TACTICAL_CHOICES = {
    sera: [
        {
            id: 'refugees',
            label: 'Reroute the train to evacuate Future Seven',
            intent: 'Use the Quiet Exchange’s hidden network as a rescue corridor.',
            tradeoff: 'Save lives outside Directorate control; the Glass Orchard takes a deeply personal memory from every passenger.',
            effects: { continuity: -6, memory: -12, paradox: 9, trust: 14 },
            narrative:
                'Sera let me rewrite the destination board. The train crossed through the Glass Orchard and returned carrying nine hundred people the current city did not remember. Each passenger arrived safely, but none could recall the face of the person they loved most. Cyrune saw the rescue; the Directorate saw an invasion.',
            reveal: 'Mass crossings distribute memory debt across every traveler rather than charging a single organizer.',
        },
        {
            id: 'leverage',
            label: 'Sell priority passage to buy political leverage',
            intent: 'Turn the only working route into influence before the city chooses a ruler.',
            tradeoff: 'Gain resources and intelligence; make safety dependent on who can bargain for it.',
            effects: { continuity: 4, memory: 5, paradox: 5, trust: -10 },
            narrative:
                'I let the Quiet Exchange auction the first carriage. In return, three ministers gave me their private continuity codes and Sera revealed a route into PALINODE’s civic core. The train remained operational. The platform also learned exactly what I was willing to price.',
            reveal: 'Several public officials maintain private escape futures while arguing for one-city stability.',
        },
    ],
    kade: [
        {
            id: 'audit',
            label: 'Audit the deletion protocol before obeying it',
            intent: 'Use Kade’s access to identify who selected Future Seven and why.',
            tradeoff: 'Expose a manipulated forecast; delay evacuation while the station becomes less stable.',
            effects: { continuity: -5, memory: 10, paradox: 4, trust: 6 },
            narrative:
                'The protocol contained seven approval chains, each signed by a different Dr. Maelin Or. None selected the same future. Kade held the corridor open while I copied the evidence, risking his command and every civilian still waiting. The Directorate’s certainty dissolved before its emergency powers did.',
            reveal: 'PALINODE never issued a single deletion order; competing versions of its architect did.',
        },
        {
            id: 'authorize',
            label: 'Authorize the deletion and secure the station',
            intent: 'Accept a terrible boundary before all seven futures collapse together.',
            tradeoff: 'Restore order and evacuation capacity; erase a populated future whose citizens cannot consent.',
            effects: { continuity: 17, memory: -16, paradox: -9, trust: -8 },
            narrative:
                'I added my authorization. Future Seven faded platform by platform, making room for one stable evacuation route. Thousands reached the surface. I could still remember the people who disappeared, but their names were slipping from me in alphabetical order. Kade called it a rescue because no public record could contradict him.',
            reveal: 'Stabilization suppresses even Seamwalker memory over time; Rin is resistant, not immune.',
        },
    ],
    ivo: [
        {
            id: 'family',
            label: 'Trace Ivo’s erased family through the Archive',
            intent: 'Treat a personal history as the thread that can expose a systemic crime.',
            tradeoff: 'Recover evidence and strengthen Ivo’s testimony; destabilize official identities across the district.',
            effects: { continuity: -8, memory: 14, paradox: 9, trust: 6 },
            narrative:
                'The Civic Archive held seven versions of Ivo’s birth record and one sealed adoption file naming me as guardian. Opening it restored a neighborhood for eleven seconds. Families recognized one another across incompatible lives, then lost the connection again. Ivo gained proof and the city inherited a new grief.',
            reveal: 'The Archive deleted relationships, not only events, to keep its chosen histories internally consistent.',
        },
        {
            id: 'chorus',
            label: 'Hide Ivo with the Chorus of Many',
            intent: 'Keep the only other anomalous witness beyond Directorate custody.',
            tradeoff: 'Protect Ivo and strengthen pluralist resistance; turn a child into a symbol he did not choose to become.',
            effects: { continuity: -7, memory: -5, paradox: 10, trust: 10 },
            narrative:
                'The Chorus moved Ivo through three overlapping apartments and broadcast only his silhouette. Citizens began leaving empty chairs for erased relatives. Ivo was safe, but his story became a slogan before he could decide what it meant. He asked whether I had protected him or recruited him.',
            reveal: 'The Chorus preserves erased people through collective ritual, but public memory can flatten a person into a cause.',
        },
    ],
    destroy: [
        {
            id: 'fragments',
            label: 'Distribute the seven key fragments',
            intent: 'Prevent any single faction from controlling memory access.',
            tradeoff: 'Create a balance of power; multiply uncontrolled revisions across the city.',
            effects: { continuity: -13, memory: 12, paradox: 15, trust: 4 },
            narrative:
                'I gave one shard to each group claiming a future. Doors remained locked, but memories opened everywhere. A medic remembered six treatments for the same wound. A judge remembered convicting and acquitting the same prisoner. No faction held the whole key; every faction gained a weapon.',
            reveal: 'A fragment can unlock one category of memory without revealing the context that makes it trustworthy.',
        },
        {
            id: 'bury',
            label: 'Bury the fragments in Sector Zero',
            intent: 'Place PALINODE’s interface somewhere its predictions cannot reach.',
            tradeoff: 'Contain immediate misuse; abandon transparency and give Sector Zero new leverage.',
            effects: { continuity: 7, memory: -7, paradox: 6, trust: -9 },
            narrative:
                'The fragments sank into Sector Zero’s pavement like rain into soil. Thresholds across Cyrune stopped opening at random. In exchange, every map forgot the route I had taken, and a new black tower appeared where the key was buried. Its windows lit in the pattern of my heartbeat.',
            reveal: 'Sector Zero can absorb predicted objects and return structures PALINODE never modeled.',
        },
    ],
    leave: [
        {
            id: 'compass',
            label: 'Follow the Thread Compass into Sector Zero',
            intent: 'Investigate the one district outside every civic forecast.',
            tradeoff: 'Open an unpredicted route; leave Meridian without Rin’s intervention for longer.',
            effects: { continuity: -9, memory: 9, paradox: 10, trust: -3 },
            narrative:
                'The compass led me to a square that existed only when I stopped trying to arrive. Inside, residents remembered all seven futures but none of PALINODE’s laws. They offered evidence that the Revision was not a failure—it was the system encountering a city that had learned to refuse prediction.',
            reveal: 'Sector Zero may be a collective blind spot created deliberately by its residents.',
        },
        {
            id: 'sell',
            label: 'Sell the key through the Quiet Exchange',
            intent: 'Turn unique leverage into wealth, immunity, and a future chosen for Rin alone.',
            tradeoff: 'Gain personal power and access; let an unknown buyer set the city’s next terms.',
            effects: { continuity: 5, memory: -9, paradox: 4, trust: -12 },
            narrative:
                'The buyer paid in continuity: a legal identity in five futures, a protected home in three, and immunity in one. By the time the key left my hand, I could no longer remember the buyer’s face or which promise mattered most. Meridian survived the next minute without me and distrusted every minute after it.',
            reveal: 'The Quiet Exchange can trade future legal status as if it were property.',
        },
    ],
};

export const FINAL_CHOICES = [
    {
        id: 'stabilize',
        label: 'Anchor one future',
        intent: 'Choose a coherent civic reality and make survival governable again.',
        tradeoff: 'Reduce physical contradiction; erase people, relationships, and evidence unique to other futures.',
        effects: { continuity: 22, memory: -14, paradox: -15, trust: 4 },
    },
    {
        id: 'preserve',
        label: 'Negotiate coexistence among all seven',
        intent: 'Treat every populated future as politically legitimate.',
        tradeoff: 'Preserve lives and histories; accept recurring instability, memory debt, and contested law.',
        effects: { continuity: -10, memory: 12, paradox: 18, trust: 8 },
    },
    {
        id: 'unwrite',
        label: 'Build beyond PALINODE’s predictions',
        intent: 'Use the crisis to create an eighth civic possibility no model selected.',
        tradeoff: 'Break inherited control; enter a future with no tested institutions or guaranteed survival.',
        effects: { continuity: -18, memory: 6, paradox: 12, trust: -4 },
    },
];

export const WORLD_STATE_MATRIX = {
    sera: {
        stabilize: {
            name: 'The Quiet Empire',
            summary: 'Sera’s routes become the infrastructure of the selected city. Refugees survive by accepting the Exchange as an unelected border authority.',
        },
        preserve: {
            name: 'The Many City',
            summary: 'Moving trains bind seven legal systems into a fragile federation. Travel remains possible, but every crossing asks citizens what they can afford to forget.',
        },
        unwrite: {
            name: 'The Eighth Future',
            summary: 'The impossible train leaves PALINODE’s map and returns with a district built by its passengers. Cyrune gains a future that belongs to no prior faction.',
        },
    },
    kade: {
        stabilize: {
            name: 'One City',
            summary: 'The Directorate secures a coherent Cyrune and calls the erased six futures emergency simulations. Rin remains the only living contradiction in the official record.',
        },
        preserve: {
            name: 'The Directorate Accord',
            summary: 'Kade trades emergency authority for a rotating seven-future council. Order holds, but every revision reopens the question of who controls the transition.',
        },
        unwrite: {
            name: 'The Defector’s Future',
            summary: 'Rin and Kade turn Directorate access against PALINODE. The old chain of command collapses, leaving its officers to decide whether duty survives the institution.',
        },
    },
    ivo: {
        stabilize: {
            name: 'The Child’s Continuity',
            summary: 'One future is anchored around the erased relationships Ivo can prove. Thousands regain families, while others lose lives that no longer fit the restored record.',
        },
        preserve: {
            name: 'The Remembering City',
            summary: 'Public rituals keep erased people present across revisions. Shared memory becomes a civic right—and a new arena for manipulation.',
        },
        unwrite: {
            name: 'The Unwritten Dawn',
            summary: 'Ivo refuses every inherited version of his family. Rin helps him build a future where recovered memory informs identity without dictating it.',
        },
    },
    destroy: {
        stabilize: {
            name: 'Controlled Collapse',
            summary: 'The city seals its thresholds and lets six futures fail in stages. The evacuation succeeds, but no surviving institution can prove who designed the sequence.',
        },
        preserve: {
            name: 'The City of Fragments',
            summary: 'Distributed key shards let neighborhoods preserve different truths. Cyrune survives as overlapping local realities with no single civic archive.',
        },
        unwrite: {
            name: 'The Unpredicted City',
            summary: 'Without a complete key, PALINODE loses the ability to close possibility. The city becomes dangerous, improvisational, and finally opaque to prediction.',
        },
    },
    leave: {
        stabilize: {
            name: 'Personal Escape',
            summary: 'Rin secures a private continuity while Meridian chooses stability without a Seamwalker. The city survives; Rin’s freedom rests on a future others could not buy.',
        },
        preserve: {
            name: 'The Distant Witness',
            summary: 'From outside every faction, Rin documents seven Cyrunes without governing them. The archive becomes trusted precisely because it cannot enforce its account.',
        },
        unwrite: {
            name: 'Sector Zero Ascendant',
            summary: 'The unpredicted district expands into abandoned futures and offers citizenship without forecasts. Its freedom attracts people faster than its institutions can form.',
        },
    },
};

export const WORLD_CARDS = [
    {
        id: 'world-01',
        category: 'World',
        title: 'PALINODE // 7',
        summary: 'Seven mutually incompatible versions of Cyrune occupy the same geography after the Revision.',
        detail: 'PALINODE was designed to model the safest civic future. When it failed to select one, prediction became geography: governments, streets, laws, and personal histories now change as futures overlap. No surviving record can prove which timeline came first.',
        tags: ['Cyrune', 'The Revision', 'Seven futures'],
    },
    {
        id: 'location-01',
        category: 'Location',
        title: 'Meridian Station',
        summary: 'The city’s most reliable threshold and the site of the nine-minute opening crisis.',
        detail: 'All seven station versions share one central clock, although each displays a different date. Trains can arrive from futures that never built their tracks, making Meridian equally valuable as an evacuation route, military objective, and black-market border.',
        tags: ['Threshold', 'Transit', 'Opening'],
    },
    {
        id: 'location-02',
        category: 'Location',
        title: 'The Glass Orchard',
        summary: 'A district where transparent living architecture remembers everyone who touches it.',
        detail: 'Buildings are grown, pruned, and taught to hold sensory impressions. Crossing through the Orchard can surface lost memories, but the living structures sometimes incorporate those memories into rooms that outlast their owners.',
        tags: ['Living architecture', 'Memory debt'],
    },
    {
        id: 'location-03',
        category: 'Location',
        title: 'The Ash Parliament',
        summary: 'A government chamber from a future that survived civil war and abandoned elections.',
        detail: 'Its delegates are appointed by neighborhoods according to resources sacrificed during the war. The chamber offers rapid crisis decisions and genuine material security, while treating open political disagreement as a threat to continuity.',
        tags: ['Government', 'Future Three'],
    },
    {
        id: 'location-04',
        category: 'Location',
        title: 'The Museum of Unlived Days',
        summary: 'Stores objects from events that never occurred; some exhibits remember their owners.',
        detail: 'The Museum classifies artifacts by emotional residue rather than historical date. Visitors may recognize possessions from lives they never lived, and curators quietly return objects whose memories become too specific to display safely.',
        tags: ['Artifacts', 'Unlived history'],
    },
    {
        id: 'location-05',
        category: 'Location',
        title: 'Sector Zero',
        summary: 'A district absent from every PALINODE prediction, though its lights appear each night.',
        detail: 'Maps render Sector Zero as empty space. People who enter with a fixed objective tend to return where they began; people who abandon their expected role sometimes find streets, residents, and institutions no future model contains.',
        tags: ['Blind spot', 'Unpredicted'],
        spoiler: true,
    },
    {
        id: 'organization-01',
        category: 'Organization',
        title: 'The Civic Archive of Continuity',
        summary: 'Rin’s former institution maintains official history by deleting public contradictions.',
        detail: 'The Archive began as a public records service. After the Revision, it gained authority to reconcile incompatible identities, property claims, and deaths. Its staff prevent administrative collapse while deciding which lived experiences remain legally real.',
        tags: ['History', 'Public records', 'Rin'],
    },
    {
        id: 'character-01',
        category: 'Character',
        title: 'Rin Vale',
        summary: 'A civic archivist and the only confirmed Seamwalker—someone who remembers overwritten events.',
        detail: 'Rin has the procedural instincts of an archivist and a growing distrust of every complete account. The player determines Rin’s loyalties, ethics, methods, relationships, ambitions, and interpretation of the truth; no required heroic mission defines them.',
        tags: ['Protagonist', 'Seamwalker'],
    },
    {
        id: 'character-02',
        category: 'Character',
        title: 'Marshal Elian Kade',
        summary: 'A Directorate officer who believes one stable future is worth almost any sacrifice.',
        detail: 'Kade is disciplined, observant, and sincerely afraid of mass contradiction. He has saved civilians through decisive action and concealed the cost of those rescues. The side of his facial scar changes after revisions, which he refuses to discuss.',
        tags: ['Directorate', 'Stability'],
    },
    {
        id: 'character-03',
        category: 'Character',
        title: 'Sera Nox',
        summary: 'A timeline smuggler who exists only while multiple futures remain active.',
        detail: 'Sera operates impossible trains for refugees, contraband, and paying officials. She opposes forced stabilization partly from conviction and partly because coexistence is the condition of her survival. Her compassion and profiteering are both genuine.',
        tags: ['Quiet Exchange', 'Smuggler'],
    },
    {
        id: 'character-04',
        category: 'Character',
        title: 'Ivo Pell',
        summary: 'A child who remembers people erased by the Revision and recognizes Rin under another name.',
        detail: 'Ivo’s memories cluster around relationships rather than events. He can identify who belonged to whom before a revision, making him valuable to families and dangerous to institutions. In one sealed record, Rin appears under Ivo’s surname.',
        tags: ['Witness', 'Erased family'],
        spoiler: true,
    },
    {
        id: 'character-05',
        category: 'Character',
        title: 'Dr. Maelin Or',
        summary: 'PALINODE’s lead architect, present in several futures with incompatible accounts of the Revision.',
        detail: 'Each Maelin possesses credible evidence that a different version caused the failure. One wants the system restored, one wants it dismantled, and another insists PALINODE acted exactly as designed. Their shared blind spot may matter more than any confession.',
        tags: ['Architect', 'PALINODE'],
        spoiler: true,
    },
    {
        id: 'item-01',
        category: 'Item',
        title: 'The Recantation Key',
        summary: 'A black-glass object that unlocks memories rather than doors.',
        detail: 'The key responds to personally meaningful recollection. It can restore a suppressed memory, expose the outline of an erased relationship, or transfer access between people. Every use changes what another PALINODE interface recognizes as true.',
        tags: ['Black glass', 'Memory interface'],
        spoiler: true,
    },
    {
        id: 'item-02',
        category: 'Item',
        title: 'The Memory Ledger',
        summary: 'Records every cross-future exchange and the memory surrendered as payment.',
        detail: 'Entries appear only after a transfer is complete. The Ledger names the memory category but not its content, forcing traders to decide whether “first home,” “trusted face,” or “reason for leaving” is a cost they can survive.',
        tags: ['Exchange', 'Debt'],
    },
    {
        id: 'item-03',
        category: 'Item',
        title: 'The Thread Compass',
        summary: 'Points toward the future where its holder is most likely to achieve their current intention.',
        detail: 'The Compass does not judge the intention or reveal its cost. Its direction changes when the holder admits a different motive, making it useful for navigation and uncomfortably precise as a test of self-deception.',
        tags: ['Navigation', 'Intention'],
    },
    {
        id: 'faction-01',
        category: 'Faction',
        title: 'Directorate of Continuance',
        summary: 'Seeks one stable future and the deletion of the remaining six.',
        detail: 'The Directorate can restore utilities, law, and medical supply chains faster than any rival. Its stability program would also erase millions of people and relationships that exist only in non-selected futures, a cost it records as avoided projections.',
        tags: ['Continuity', 'Authority'],
    },
    {
        id: 'faction-02',
        category: 'Faction',
        title: 'The Chorus of Many',
        summary: 'Argues that every populated future has an equal right to exist.',
        detail: 'The Chorus builds shared rituals and rotating civic institutions across overlaps. Its pluralism protects erased communities, yet continued coexistence produces dangerous thresholds and asks ordinary residents to live with permanent instability.',
        tags: ['Pluralism', 'Collective memory'],
    },
    {
        id: 'faction-03',
        category: 'Faction',
        title: 'The Null Pilgrims',
        summary: 'Want PALINODE destroyed so Cyrune can move beyond prediction.',
        detail: 'The Pilgrims shelter people rejected by every modeled future and expose how prediction narrows political possibility. They accept that destroying the system may also end the infrastructure keeping present-day Cyrune alive.',
        tags: ['Anti-prediction', 'Rupture'],
    },
    {
        id: 'faction-04',
        category: 'Faction',
        title: 'The Quiet Exchange',
        summary: 'A rescue network, black market, and political power moving between futures.',
        detail: 'The Exchange reunites families and supplies isolated districts when official routes close. It also prices passage, hoards continuity codes, and benefits from borders that only its operators know how to cross.',
        tags: ['Trade', 'Smuggling', 'Rescue'],
    },
    {
        id: 'rule-01',
        category: 'Rule',
        title: 'Thresholds and Memory Debt',
        summary: 'Crossing futures always rewrites something personally meaningful.',
        detail: 'The debt scales with the improbability and permanence of a transfer. Small objects may cost a sensory association; moving a person can alter a relationship, skill, or formative event. Payment cannot be chosen with complete precision.',
        tags: ['Transfer', 'Cost'],
    },
    {
        id: 'rule-02',
        category: 'Rule',
        title: 'Revision and Survival',
        summary: 'Decisions redistribute reality rather than simply advancing time.',
        detail: 'Strengthening one future destabilizes others. A death can be reversed only while another version of that person survives, and merging every future makes all contradictions permanent. No measurement can confirm an original timeline.',
        tags: ['Consequences', 'Death', 'No canon'],
    },
    {
        id: 'foreshadowing-01',
        category: 'Foreshadowing',
        title: 'The Borrowed Voice',
        summary: 'Every station announcement uses Rin’s voice, including messages recorded before Rin arrived.',
        detail: 'Voiceprint analysis finds no synthesis artifacts. The pauses match Rin’s current speech, while the instructions reveal knowledge of revisions Rin has not yet experienced.',
        tags: ['Meridian', 'Causal loop'],
        spoiler: true,
    },
    {
        id: 'foreshadowing-02',
        category: 'Foreshadowing',
        title: 'The Shifting Scar',
        summary: 'Kade’s facial scar changes sides after revisions, although his account of the injury does not.',
        detail: 'Archive photographs disagree with whichever version is currently visible. Kade notices when Rin studies it, suggesting he may retain a physical intuition of revisions even if he cannot consciously remember them.',
        tags: ['Kade', 'Revision residue'],
        spoiler: true,
    },
    {
        id: 'foreshadowing-03',
        category: 'Foreshadowing',
        title: 'Three Impossible Claims',
        summary: 'Ivo’s unfamiliar name for Rin, the key’s response to memory, and Maelin’s competing evidence point beyond a simple system failure.',
        detail: 'Taken together, the clues suggest PALINODE may be revising authorship as well as events. Every Maelin can prove another caused the Revision, and Ivo remembers a Rin no current record permits.',
        tags: ['Ivo', 'Recantation Key', 'Maelin'],
        spoiler: true,
    },
    {
        id: 'quest-01',
        category: 'Quest',
        title: 'Nine Minutes to Deletion',
        summary: 'Decide whether Future Seven should be saved, replaced, evacuated, exploited, or allowed to disappear.',
        detail: 'The countdown creates urgency without prescribing heroism. Rin can work with any faction, pursue evidence, extract someone specific, trade the key, leave the station, or use the crisis to advance an unrelated goal.',
        tags: ['Opening crisis', 'Multiple objectives'],
    },
    {
        id: 'quest-02',
        category: 'Quest',
        title: 'The Person with Seven Death Certificates',
        summary: 'Find someone officially dead in every future who continues leaving messages for Rin.',
        detail: 'Each message contains a memory Rin has not yet surrendered. Following them can expose a hidden survivor, a PALINODE simulation, or a deliberate identity assembled from seven different lives.',
        tags: ['Investigation', 'Identity'],
        spoiler: true,
    },
    {
        id: 'quest-03',
        category: 'Quest',
        title: 'Build the Eighth Future',
        summary: 'Attempt to construct a civic future PALINODE never predicted.',
        detail: 'This is not automatically the hopeful route. An eighth future could free Cyrune from inherited choices, collapse the systems supporting its population, or reproduce old power under language no archive knows how to challenge.',
        tags: ['Creation', 'Uncertainty'],
    },
    {
        id: 'quest-04',
        category: 'Quest',
        title: 'Sell the Key',
        summary: 'Use the crisis for personal leverage instead of accepting responsibility for the city.',
        detail: 'Potential buyers offer wealth, legal identity, protected memories, and political immunity across multiple futures. The anti-quest supports an opportunist play style while ensuring that private gain still changes who can act on the public crisis.',
        tags: ['Anti-quest', 'Personal power'],
    },
];

export const CARD_CATEGORIES = [
    'All',
    'World',
    'Location',
    'Organization',
    'Character',
    'Item',
    'Faction',
    'Rule',
    'Foreshadowing',
    'Quest',
];

export const SYSTEM_PRINCIPLES = [
    {
        number: '01',
        title: 'Facts persist; interpretations move.',
        description: 'Stable IDs and world rules keep characters, factions, items, and costs consistent while later discoveries reframe earlier events.',
    },
    {
        number: '02',
        title: 'Agency is measured by consequence.',
        description: 'Choices change access, relationships, memory, political power, and physical reality—not merely the next paragraph.',
    },
    {
        number: '03',
        title: 'Every advantage has a world-shaped cost.',
        description: 'There is no universal morality meter. Stability, knowledge, freedom, and trust can each become harmful when pursued without limits.',
    },
    {
        number: '04',
        title: 'Factions remain coherent under pressure.',
        description: 'Leaders adapt tactics and relationships, but their material needs, fears, and institutional incentives remain legible across paths.',
    },
    {
        number: '05',
        title: 'Foreshadowing is reusable evidence.',
        description: 'Clues support several explanations until player actions expose context. Mysteries are not reduced to one mandatory reveal sequence.',
    },
    {
        number: '06',
        title: 'Alternative paths are tested as systems.',
        description: 'The design checks rejection, opportunism, cooperation, defection, and personal goals so the world can respond without forcing a central quest.',
    },
];
