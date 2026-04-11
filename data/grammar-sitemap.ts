import { GrammarPage } from '@/lib/types';

// Grammar sitemap based on the B2-BERUF COMPLETE SYSTEM
export const GRAMMAR_SITEMAP: GrammarPage[] = [
    // ==========================================
    // 🔷 1. ARTICLES & GENDER [A1–A2]
    // ==========================================
    {
        slug: 'articles/suffix-rule-gender',
        title: 'The Suffix Rule: Predicting Gender',
        level: 'A1',
        category: 'articles',
        sub_category: 'Core Logic',
        tags: ['Nouns', 'Gender', 'Patterns'],
        summary: 'Predict noun gender without memorization using suffix rules.',
        related_vocab: [],
        related_rules: ['articles/feminine-groups', 'articles/masculine-groups', 'articles/neuter-groups'],
        content_path: '/data/grammar/articles/suffix-rule-gender.mdx'
    },
    {
        slug: 'articles/feminine-groups',
        title: 'Feminine Groups: -ung, -heit, -keit, -schaft, -ion, -tät',
        level: 'A1',
        category: 'articles',
        sub_category: 'Core Logic',
        tags: ['Nouns', 'Gender', 'Feminine'],
        summary: 'Master feminine noun patterns: -ung, -heit, -keit, -schaft, -ion, -tät.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/feminine-groups.mdx'
    },
    {
        slug: 'articles/masculine-groups',
        title: 'Masculine Groups: -ling, -or, -ig, -ismus, -er (agent)',
        level: 'A1',
        category: 'articles',
        sub_category: 'Core Logic',
        tags: ['Nouns', 'Gender', 'Masculine'],
        summary: 'Identify masculine nouns using -ling, -or, -ig, -ismus, -er (agent) patterns.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/masculine-groups.mdx'
    },
    {
        slug: 'articles/neuter-groups',
        title: 'Neuter Groups: -chen, -lein, -um, -ment, -nis',
        level: 'A1',
        category: 'articles',
        sub_category: 'Core Logic',
        tags: ['Nouns', 'Gender', 'Neuter'],
        summary: 'Recognize neuter nouns with -chen, -lein, -um, -ment, -nis suffixes.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/neuter-groups.mdx'
    },
    {
        slug: 'articles/biological-exceptions',
        title: 'The Biological Rule (people: der/die)',
        level: 'A1',
        category: 'articles',
        sub_category: 'Core Logic',
        tags: ['Nouns', 'Gender', 'Exceptions'],
        summary: 'Understand when biological gender overrides grammatical suffix rules.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/biological-exceptions.mdx'
    },
    {
        slug: 'articles/compound-nouns',
        title: 'Compound Nouns: The Last Word Rule',
        level: 'A2',
        category: 'articles',
        sub_category: 'Extended Logic (NEW)',
        tags: ['Nouns', 'Gender', 'Compounds'],
        summary: 'The last word determines the gender of the entire compound noun.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/compound-nouns.mdx'
    },
    {
        slug: 'articles/no-suffix-meaning',
        title: 'No Suffix? Use Meaning Logic',
        level: 'A2',
        category: 'articles',
        sub_category: 'Extended Logic (NEW)',
        tags: ['Nouns', 'Gender', 'Meaning'],
        summary: 'Predict gender based on meaning when no suffix is present.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/no-suffix-meaning.mdx'
    },
    {
        slug: 'articles/gender-patterns-category',
        title: 'Gender Patterns by Category (time, tools, people)',
        level: 'A2',
        category: 'articles',
        sub_category: 'Extended Logic (NEW)',
        tags: ['Nouns', 'Gender', 'Categories'],
        summary: 'Learn how noun categories like time, tools, and people follow specific gender rules.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/gender-patterns-category.mdx'
    },
    {
        slug: 'articles/spoken-german-shortcuts',
        title: 'Gender in spoken German (what natives ignore)',
        level: 'A2',
        category: 'articles',
        sub_category: 'Real Usage',
        tags: ['Spoken', 'Shortcuts'],
        summary: 'Understand what gender aspects native speakers often omit or simplify in casual speech.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/articles/spoken-german-shortcuts.mdx'
    },
    {
        slug: 'articles/common-gender-mistakes',
        title: 'Gender mistakes & how natives still understand',
        level: 'A2',
        category: 'articles',
        sub_category: 'Real Usage',
        tags: ['Mistakes', 'Communication'],
        summary: 'Common mistakes learners make and why they won\'t stop you from being understood.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/articles/common-gender-mistakes.mdx'
    },

    // ==========================================
    // 🔷 2. CASE SYSTEM — THE 4 FORCES [A1–B2]
    // ==========================================
    {
        slug: 'cases/nominative',
        title: 'Subject Logic (Who is doing it?)',
        level: 'A1',
        category: 'cases',
        sub_category: '🟢 NOMINATIVE (A1)',
        tags: ['Cases', 'Nominative', 'Subject'],
        summary: 'The subject of the sentence: Who is doing the action?',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/nominative.mdx'
    },
    {
        slug: 'cases/predicate-nouns',
        title: 'Predicate Nouns (sein, werden)',
        level: 'A1',
        category: 'cases',
        sub_category: '🟢 NOMINATIVE (A1)',
        tags: ['Cases', 'Nominative', 'Predicate'],
        summary: 'Nouns that follow sein and werden take the nominative case.',
        related_vocab: [],
        related_rules: ['cases/nominative'],
        content_path: '/data/grammar/cases/predicate-nouns.mdx'
    },
    {
        slug: 'cases/accusative',
        title: 'Direct Object Logic',
        level: 'A1',
        category: 'cases',
        sub_category: '🟡 ACCUSATIVE (A1–A2)',
        tags: ['Cases', 'Accusative', 'Direct Object'],
        summary: 'The direct object: What is being affected by the action?',
        related_vocab: [],
        related_rules: ['cases/nominative'],
        content_path: '/data/grammar/cases/accusative.mdx'
    },
    {
        slug: 'cases/accusative-pronouns',
        title: 'Accusative Pronouns',
        level: 'A2',
        category: 'cases',
        sub_category: '🟡 ACCUSATIVE (A1–A2)',
        tags: ['Cases', 'Accusative', 'Pronouns'],
        summary: 'Personal pronouns in the accusative case (mich, dich, ihn, etc.).',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/accusative-pronouns.mdx'
    },
    {
        slug: 'cases/accusative-prepositions',
        title: 'Accusative Prepositions',
        level: 'A2',
        category: 'cases',
        sub_category: '🟡 ACCUSATIVE (A1–A2)',
        tags: ['Cases', 'Prepositions', 'Accusative'],
        summary: 'Prepositions that always take the accusative: durch, für, ohne, um, gegen, entlang.',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/accusative-prepositions.mdx'
    },
    {
        slug: 'cases/motion-vs-object',
        title: 'Motion vs Object confusion',
        level: 'A2',
        category: 'cases',
        sub_category: '🟡 ACCUSATIVE (A1–A2)',
        tags: ['Cases', 'Accusative', 'Confusion'],
        summary: 'Clearing up the confusion between accusative movement and direct object logic.',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/motion-vs-object.mdx'
    },
    {
        slug: 'cases/dative',
        title: 'Indirect Object Logic',
        level: 'A2',
        category: 'cases',
        sub_category: '🔵 DATIVE (A2–B1)',
        tags: ['Cases', 'Dative', 'Indirect Object'],
        summary: 'The indirect object: To whom or for whom is the action done?',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/dative.mdx'
    },
    {
        slug: 'cases/dative-pronouns',
        title: 'Dative Pronouns',
        level: 'A2',
        category: 'cases',
        sub_category: '🔵 DATIVE (A2–B1)',
        tags: ['Cases', 'Dative', 'Pronouns'],
        summary: 'Personal pronouns in the dative case (mir, dir, ihm, etc.).',
        related_vocab: [],
        related_rules: ['cases/dative'],
        content_path: '/data/grammar/cases/dative-pronouns.mdx'
    },
    {
        slug: 'cases/dative-verbs',
        title: 'Dative Verbs (full system)',
        level: 'B1',
        category: 'cases',
        sub_category: '🔵 DATIVE (A2–B1)',
        tags: ['Cases', 'Verbs', 'Dative'],
        summary: 'Verbs that require the dative case: helfen, danken, gefallen, gehören, folgen.',
        related_vocab: [],
        related_rules: ['cases/dative'],
        content_path: '/data/grammar/cases/dative-verbs.mdx'
    },
    {
        slug: 'cases/dative-prepositions',
        title: 'Dative Prepositions',
        level: 'A2',
        category: 'cases',
        sub_category: '🔵 DATIVE (A2–B1)',
        tags: ['Cases', 'Prepositions', 'Dative'],
        summary: 'Prepositions that always take the dative: aus, bei, mit, nach, seit, von, zu, gegenüber.',
        related_vocab: [],
        related_rules: ['cases/dative'],
        content_path: '/data/grammar/cases/dative-prepositions.mdx'
    },
    {
        slug: 'cases/two-way-prepositions',
        title: 'Wo vs Wohin (location vs movement)',
        level: 'A2',
        category: 'cases',
        sub_category: '🟣 TWO-WAY SYSTEM (A2–B1)',
        tags: ['Cases', 'Prepositions', 'Two-Way'],
        summary: 'Location (Wo + Dative) vs. Direction (Wohin + Accusative).',
        related_vocab: [],
        related_rules: ['cases/two-way-list'],
        content_path: '/data/grammar/cases/two-way-prepositions.mdx'
    },
    {
        slug: 'cases/two-way-list',
        title: 'Wechselpräpositionen (full list)',
        level: 'A2',
        category: 'cases',
        sub_category: '🟣 TWO-WAY SYSTEM (A2–B1)',
        tags: ['Cases', 'Prepositions', 'List'],
        summary: 'The 9 Wechselpräpositionen: in, auf, unter, über, vor, hinter, neben, zwischen.',
        related_vocab: [],
        related_rules: ['cases/two-way-prepositions'],
        content_path: '/data/grammar/cases/two-way-list.mdx'
    },
    {
        slug: 'cases/two-way-dative-verbs',
        title: 'Verbs forcing Dative',
        level: 'B1',
        category: 'cases',
        sub_category: '🟣 TWO-WAY SYSTEM (A2–B1)',
        tags: ['Cases', 'Verbs', 'Two-Way'],
        summary: 'Positional verbs that use Dative: bleiben, stehen, liegen, sitzen, hängen (position).',
        related_vocab: [],
        related_rules: ['cases/two-way-prepositions'],
        content_path: '/data/grammar/cases/two-way-dative-verbs.mdx'
    },
    {
        slug: 'cases/two-way-accusative-verbs',
        title: 'Verbs forcing Accusative',
        level: 'B1',
        category: 'cases',
        sub_category: '🟣 TWO-WAY SYSTEM (A2–B1)',
        tags: ['Cases', 'Verbs', 'Two-Way'],
        summary: 'Directional verbs that use Accusative: stellen, legen, setzen, hängen (action).',
        related_vocab: [],
        related_rules: ['cases/two-way-prepositions'],
        content_path: '/data/grammar/cases/two-way-accusative-verbs.mdx'
    },
    {
        slug: 'cases/genitive',
        title: 'Possession System',
        level: 'B1',
        category: 'cases',
        sub_category: '🟤 GENITIVE (B1–B2)',
        tags: ['Cases', 'Genitive', 'Possession'],
        summary: 'Expressing possession with the Genitive case (des, der, des).',
        related_vocab: [],
        related_rules: ['cases/genitive-prepositions'],
        content_path: '/data/grammar/cases/genitive.mdx'
    },
    {
        slug: 'cases/genitive-articles',
        title: 'Genitive Articles & Forms',
        level: 'B1',
        category: 'cases',
        sub_category: '🟤 GENITIVE (B1–B2)',
        tags: ['Cases', 'Genitive', 'Forms'],
        summary: 'Mastering the forms of articles and nouns in the genitive case.',
        related_vocab: [],
        related_rules: ['cases/genitive'],
        content_path: '/data/grammar/cases/genitive-articles.mdx'
    },
    {
        slug: 'cases/genitive-prepositions',
        title: 'Genitive Prepositions',
        level: 'B2',
        category: 'cases',
        sub_category: '🟤 GENITIVE (B1–B2)',
        tags: ['Cases', 'Prepositions', 'Genitive'],
        summary: 'Prepositions requiring Genitive: während, wegen, trotz, statt, aufgrund, innerhalb, außerhalb.',
        related_vocab: [],
        related_rules: ['cases/genitive'],
        content_path: '/data/grammar/cases/genitive-prepositions.mdx'
    },
    {
        slug: 'cases/genitive-spoken-replacement',
        title: 'Spoken Replacement (von + Dativ)',
        level: 'B1',
        category: 'cases',
        sub_category: '🟤 GENITIVE (B1–B2)',
        tags: ['Cases', 'Spoken', 'Replacement'],
        summary: 'How to replace the genitive with von + dative in casual German.',
        related_vocab: [],
        related_rules: ['cases/genitive'],
        content_path: '/data/grammar/cases/genitive-spoken-replacement.mdx'
    },
    {
        slug: 'cases/thinking-see-roles',
        title: 'How Germans “see roles” in a sentence',
        level: 'B2',
        category: 'cases',
        sub_category: '🔥 CASE THINKING (NEW)',
        tags: ['Thinking', 'Roles'],
        summary: 'Understand the mental model Germans use to assign cases to sentence parts.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/cases/thinking-see-roles.mdx'
    },
    {
        slug: 'cases/thinking-why-mistakes',
        title: 'Why mistakes happen',
        level: 'B2',
        category: 'cases',
        sub_category: '🔥 CASE THINKING (NEW)',
        tags: ['Thinking', 'Mistakes'],
        summary: 'Analysis of common case errors and how to anticipate and avoid them.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/cases/thinking-why-mistakes.mdx'
    },
    {
        slug: 'cases/thinking-shortcuts',
        title: 'Case decision shortcuts',
        level: 'B2',
        category: 'cases',
        sub_category: '🔥 CASE THINKING (NEW)',
        tags: ['Thinking', 'Shortcuts'],
        summary: 'Quick logic rules to decide the correct case in seconds.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/cases/thinking-shortcuts.mdx'
    },

    // ==========================================
    // 🔷 3. VERB SYSTEM — ACTION TO CONTROL [A1–B2]
    // ==========================================
    {
        slug: 'verbs/present-tense',
        title: 'Present (regular & irregular)',
        level: 'A1',
        category: 'verbs',
        sub_category: '🟢 BASIC TENSES (A1–B1)',
        tags: ['Verbs', 'Present Tense'],
        summary: 'The basic building block: conjugating verbs in the present tense.',
        related_vocab: [],
        related_rules: ['verbs/perfect-sein-haben'],
        content_path: '/data/grammar/verbs/present-tense.mdx'
    },
    {
        slug: 'verbs/perfect-sein-haben',
        title: 'Perfect (sein vs haben)',
        level: 'A1',
        category: 'verbs',
        sub_category: '🟢 BASIC TENSES (A1–B1)',
        tags: ['Verbs', 'Perfect Tense', 'Auxiliary'],
        summary: 'When to use "sein" (movement/state change) vs. "haben" in the perfect tense.',
        related_vocab: [],
        related_rules: ['verbs/past-participles-regular'],
        content_path: '/data/grammar/verbs/perfect-sein-haben.mdx'
    },
    {
        slug: 'verbs/past-participles-regular',
        title: 'Past participles (ALL types)',
        level: 'A1',
        category: 'verbs',
        sub_category: '🟢 BASIC TENSES (A1–B1)',
        tags: ['Verbs', 'Participles', 'Regular'],
        summary: 'Forming standard past participles with ge- prefix and -t ending.',
        related_vocab: [],
        related_rules: ['verbs/past-participles-irregular'],
        content_path: '/data/grammar/verbs/past-participles-regular.mdx'
    },
    {
        slug: 'verbs/simple-past',
        title: 'Präteritum (essential verbs)',
        level: 'A2',
        category: 'verbs',
        sub_category: '🟢 BASIC TENSES (A1–B1)',
        tags: ['Verbs', 'Past Tense', 'Präteritum'],
        summary: 'The written past form: war, hatte, wurde.',
        related_vocab: [],
        related_rules: ['verbs/simple-past-modals'],
        content_path: '/data/grammar/verbs/simple-past.mdx'
    },
    {
        slug: 'verbs/future-i',
        title: 'Future I (real vs assumption)',
        level: 'B1',
        category: 'verbs',
        sub_category: '🟢 BASIC TENSES (A1–B1)',
        tags: ['Verbs', 'Future Tense'],
        summary: 'Expressing future intent or assumption (Vermutung).',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/verbs/future-i.mdx'
    },
    {
        slug: 'verbs/separable-prefixes',
        title: 'Separable Prefixes (logic + position)',
        level: 'A2',
        category: 'verbs',
        sub_category: '🟡 PREFIX SYSTEM (A2–B1)',
        tags: ['Verbs', 'Prefixes', 'Separable'],
        summary: 'Common separable prefixes: an-, auf-, mit-, vor-, zu-, ab-, bei-, ein-, fest-, her-.',
        related_vocab: [],
        related_rules: ['verbs/separable-position'],
        content_path: '/data/grammar/verbs/separable-prefixes.mdx'
    },
    {
        slug: 'verbs/inseparable-prefixes',
        title: 'Inseparable Prefixes (meaning system)',
        level: 'B1',
        category: 'verbs',
        sub_category: '🟡 PREFIX SYSTEM (A2–B1)',
        tags: ['Verbs', 'Prefixes', 'Inseparable'],
        summary: 'Prefixes that stay attached: be-, ver-, er-, ent-, zer-, ge-, emp-, miss-.',
        related_vocab: [],
        related_rules: ['verbs/dual-prefixes'],
        content_path: '/data/grammar/verbs/inseparable-prefixes.mdx'
    },
    {
        slug: 'verbs/dual-prefixes',
        title: 'Dual Prefix Verbs (um-, über-, etc.)',
        level: 'B1',
        category: 'verbs',
        sub_category: '🟡 PREFIX SYSTEM (A2–B1)',
        tags: ['Verbs', 'Prefixes', 'Dual'],
        summary: 'Prefixes that can be separable or inseparable depending on meaning: um-, über-, unter-, durch-, hinter-.',
        related_vocab: [],
        related_rules: ['verbs/inseparable-prefixes'],
        content_path: '/data/grammar/verbs/dual-prefixes.mdx'
    },
    {
        slug: 'verbs/modal-present',
        title: 'Modal verbs (present + past)',
        level: 'A2',
        category: 'verbs',
        sub_category: '🔵 MODAL SYSTEM (A2–B2)',
        tags: ['Verbs', 'Modals', 'Present'],
        summary: 'Current ability/necessity: kann, muss, darf, soll, will, mag.',
        related_vocab: [],
        related_rules: ['verbs/modal-past'],
        content_path: '/data/grammar/verbs/modal-present.mdx'
    },
    {
        slug: 'verbs/modal-meaning',
        title: 'Modal meaning (permission, obligation, etc.)',
        level: 'A2',
        category: 'verbs',
        sub_category: '🔵 MODAL SYSTEM (A2–B2)',
        tags: ['Verbs', 'Modals', 'Meaning'],
        summary: 'Detailed understanding of when to use each modal verb based on context.',
        related_vocab: [],
        related_rules: ['verbs/modal-present'],
        content_path: '/data/grammar/verbs/modal-meaning.mdx'
    },
    {
        slug: 'verbs/modal-subjunctive',
        title: 'Subjunctive modal meaning',
        level: 'B1',
        category: 'verbs',
        sub_category: '🔵 MODAL SYSTEM (A2–B2)',
        tags: ['Verbs', 'Modals', 'Subjunctive'],
        summary: 'Polite or hypothetical: sollte, könnte, müsste, dürfte, wollte.',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-polite'],
        content_path: '/data/grammar/verbs/modal-subjunctive.mdx'
    },
    {
        slug: 'verbs/modal-reported',
        title: 'Reported meaning (sollen/wollen)',
        level: 'B2',
        category: 'verbs',
        sub_category: '🔵 MODAL SYSTEM (A2–B2)',
        tags: ['Verbs', 'Modals', 'Reported'],
        summary: 'Using sollen/wollen for "they say / claim".',
        related_vocab: [],
        related_rules: ['verbs/modal-subjunctive'],
        content_path: '/data/grammar/verbs/modal-reported.mdx'
    },
    {
        slug: 'verbs/konjunktiv-i',
        title: 'Konjunktiv I (reported speech)',
        level: 'B2',
        category: 'verbs',
        sub_category: '🟣 ADVANCED VERBS (B2)',
        tags: ['Verbs', 'Subjunctive', 'Reported Speech'],
        summary: 'Documenting customer complaints or what someone said (Er sagte, er habe...).',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-forms'],
        content_path: '/data/grammar/verbs/konjunktiv-i.mdx'
    },
    {
        slug: 'verbs/konjunktiv-ii',
        title: 'Konjunktiv II (hypothesis + politeness)',
        level: 'B2',
        category: 'verbs',
        sub_category: '🟣 ADVANCED VERBS (B2)',
        tags: ['Verbs', 'Subjunctive', 'Conditional'],
        summary: 'Hypothetical scenarios and polite requests using wäre, hätte, würde.',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-polite'],
        content_path: '/data/grammar/verbs/konjunktiv-ii.mdx'
    },
    {
        slug: 'verbs/futur-ii',
        title: 'Futur II (past assumption)',
        level: 'B2',
        category: 'verbs',
        sub_category: '🟣 ADVANCED VERBS (B2)',
        tags: ['Verbs', 'Future II', 'Assumption'],
        summary: 'Speculating about completed actions: Er wird gelesen haben.',
        related_vocab: [],
        related_rules: ['verbs/future-i'],
        content_path: '/data/grammar/verbs/futur-ii.mdx'
    },
    {
        slug: 'verbs/lassen',
        title: 'Lassen + Infinitiv (causative)',
        level: 'B2',
        category: 'verbs',
        sub_category: '🟣 ADVANCED VERBS (B2)',
        tags: ['Verbs', 'Lassen', 'Causative'],
        summary: 'Ordering or arranging services: Ich lasse den Wagen reparieren.',
        related_vocab: [],
        related_rules: ['passive/lassen-sich'],
        content_path: '/data/grammar/verbs/lassen.mdx'
    },
    {
        slug: 'verbs/thinking-difference',
        title: 'Why German uses verbs differently',
        level: 'B2',
        category: 'verbs',
        sub_category: '🔧 VERB THINKING (NEW)',
        tags: ['Thinking', 'Verbs'],
        summary: 'Understand the fundamental conceptual differences in how German and English use verbs.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/verbs/thinking-difference.mdx'
    },
    {
        slug: 'verbs/thinking-position',
        title: 'Verb position logic (main vs subordinate)',
        level: 'A2',
        category: 'verbs',
        sub_category: '🔧 VERB THINKING (NEW)',
        tags: ['Thinking', 'Word Order'],
        summary: 'The ultimate guide to why verbs move in German sentences.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/verbs/thinking-position.mdx'
    },
    {
        slug: 'verbs/thinking-meaning-shifts',
        title: 'Meaning shifts through structure',
        level: 'B2',
        category: 'verbs',
        sub_category: '🔧 VERB THINKING (NEW)',
        tags: ['Thinking', 'Structure'],
        summary: 'How changing the verb structure can subtly or radically change the meaning of a sentence.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/verbs/thinking-meaning-shifts.mdx'
    },

    // ==========================================
    // 🔷 4. PASSIVE & ALTERNATIVES [B1–B2]
    // ==========================================
    {
        slug: 'passive/vorgangspassiv',
        title: 'Vorgangspassiv (process)',
        level: 'B1',
        category: 'passive',
        sub_category: 'Passive Basics',
        tags: ['Passive', 'Process', 'Werden'],
        summary: 'Focus on the action: Die Maschine wird repariert (werden + Partizip 2).',
        related_vocab: [],
        related_rules: ['passive/zustandspassiv'],
        content_path: '/data/grammar/passive/vorgangspassiv.mdx'
    },
    {
        slug: 'passive/zustandspassiv',
        title: 'Zustandspassiv (state)',
        level: 'B1',
        category: 'passive',
        sub_category: 'Passive Basics',
        tags: ['Passive', 'Result', 'Sein'],
        summary: 'Focus on the result: Die Maschine ist repariert (sein + Partizip 2).',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/zustandspassiv.mdx'
    },
    {
        slug: 'passive/passive-modals',
        title: 'Passive with modal verbs',
        level: 'B1',
        category: 'passive',
        sub_category: 'Passive Basics',
        tags: ['Passive', 'Modals'],
        summary: 'Obligation or ability in passive: Die Maschine muss repariert werden.',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/passive-modals.mdx'
    },
    {
        slug: 'passive/sein-zu',
        title: 'sein + zu + infinitive',
        level: 'B2',
        category: 'passive',
        sub_category: 'Alternatives (CRITICAL)',
        tags: ['Passive', 'Alternative', 'Advanced'],
        summary: 'Formal necessity: Die Maschine ist zu reparieren (must be repaired).',
        related_vocab: [],
        related_rules: ['passive/passive-modals'],
        content_path: '/data/grammar/passive/sein-zu.mdx'
    },
    {
        slug: 'passive/lassen-sich',
        title: 'lassen + sich',
        level: 'B2',
        category: 'passive',
        sub_category: 'Alternatives (CRITICAL)',
        tags: ['Passive', 'Alternative', 'Advanced'],
        summary: 'Possibility: Das Problem lässt sich lösen (can be solved).',
        related_vocab: [],
        related_rules: ['verbs/lassen'],
        content_path: '/data/grammar/passive/lassen-sich.mdx'
    },
    {
        slug: 'passive/recipient',
        title: 'bekommen-passiv',
        level: 'B2',
        category: 'passive',
        sub_category: 'Alternatives (CRITICAL)',
        tags: ['Passive', 'Recipient'],
        summary: 'Recipient passive: Er bekommt das Buch geschenkt.',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/recipient.mdx'
    },
    {
        slug: 'passive/impersonal',
        title: 'impersonal passive',
        level: 'B2',
        category: 'passive',
        sub_category: 'Alternatives (CRITICAL)',
        tags: ['Passive', 'Impersonal'],
        summary: 'General actions: Hier wird gearbeitet / Es wird getanzt.',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/impersonal.mdx'
    },

    // ==========================================
    // 🔷 5. NOUN SYSTEM — PRECISION LANGUAGE [B1–B2]
    // ==========================================
    {
        slug: 'nouns/n-declension-weak',
        title: 'N-Deklination (full list + logic)',
        level: 'B1',
        category: 'nouns',
        sub_category: '🟡 DECLENSION',
        tags: ['Nouns', 'N-Deklination', 'Masculine'],
        summary: 'Masculine nouns adding -n: der Kunde → den Kunden.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-list'],
        content_path: '/data/grammar/nouns/n-declension-weak.mdx'
    },
    {
        slug: 'nouns/n-declension-system',
        title: 'Weak masculine nouns system',
        level: 'B1',
        category: 'nouns',
        sub_category: '🟡 DECLENSION',
        tags: ['Nouns', 'N-Deklination', 'System'],
        summary: 'Understand the underlying system of weak masculine declension.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-weak'],
        content_path: '/data/grammar/nouns/n-declension-system.mdx'
    },
    {
        slug: 'nouns/nominalization-suffixes',
        title: 'Verb → Noun (-ung, -e, etc.)',
        level: 'B2',
        category: 'nouns',
        sub_category: '🟣 NOMINALIZATION',
        tags: ['Nouns', 'Nominalization', 'Suffixes'],
        summary: 'Turning verbs into nouns using suffixes like -ung, -e, -tion.',
        related_vocab: [],
        related_rules: ['nouns/nominalization-null'],
        content_path: '/data/grammar/nouns/nominalization-suffixes.mdx'
    },
    {
        slug: 'nouns/infinitive-nouns',
        title: 'Infinitive nouns',
        level: 'B2',
        category: 'nouns',
        sub_category: '🟣 NOMINALIZATION',
        tags: ['Nouns', 'Infinitive'],
        summary: 'Using the infinitive as a neuter noun: das Arbeiten, das Lesen.',
        related_vocab: [],
        related_rules: ['nouns/prep-nominal'],
        content_path: '/data/grammar/nouns/infinitive-nouns.mdx'
    },
    {
        slug: 'nouns/prep-nominal',
        title: 'Preposition + noun structures',
        level: 'B2',
        category: 'nouns',
        sub_category: '🟣 NOMINALIZATION',
        tags: ['Nouns', 'Prepositions'],
        summary: 'Professional phrasing: beim Arbeiten, zum Verkauf, nach der Ankunft.',
        related_vocab: [],
        related_rules: ['nouns/infinitive-nouns'],
        content_path: '/data/grammar/nouns/prep-nominal.mdx'
    },
    {
        slug: 'nouns/nvv-entscheidung',
        title: '“eine Entscheidung treffen”',
        level: 'B2',
        category: 'nouns',
        sub_category: '🔵 NOUN-VERB STRUCTURES (CRITICAL)',
        tags: ['Nouns', 'NVV'],
        summary: 'Specific combination meaning "to make a decision".',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/nouns/nvv-entscheidung.mdx'
    },
    {
        slug: 'nouns/nvv-massnahmen',
        title: '“Maßnahmen ergreifen”',
        level: 'B2',
        category: 'nouns',
        sub_category: '🔵 NOUN-VERB STRUCTURES (CRITICAL)',
        tags: ['Nouns', 'NVV'],
        summary: 'Specific combination meaning "to take measures".',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/nouns/nvv-massnahmen.mdx'
    },
    {
        slug: 'nouns/nvv-betrieb',
        title: '“in Betrieb nehmen”',
        level: 'B2',
        category: 'nouns',
        sub_category: '🔵 NOUN-VERB STRUCTURES (CRITICAL)',
        tags: ['Nouns', 'NVV'],
        summary: 'Specific combination meaning "to put into operation".',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/nouns/nvv-betrieb.mdx'
    },

    // ==========================================
    // 🔷 6. ADJECTIVES SYSTEM [A1–B2]
    // ==========================================
    {
        slug: 'adjectives/strong-endings',
        title: 'Strong endings',
        level: 'A2',
        category: 'adjectives',
        sub_category: '🟢 BASIC SYSTEM',
        tags: ['Adjectives', 'Endings', 'Strong'],
        summary: 'Adjective endings when no article is present.',
        related_vocab: [],
        related_rules: ['adjectives/weak-endings'],
        content_path: '/data/grammar/adjectives/strong-endings.mdx'
    },
    {
        slug: 'adjectives/weak-endings',
        title: 'Weak endings',
        level: 'A2',
        category: 'adjectives',
        sub_category: '🟢 BASIC SYSTEM',
        tags: ['Adjectives', 'Endings', 'Weak'],
        summary: 'Adjective endings when a definite article is present.',
        related_vocab: [],
        related_rules: ['adjectives/strong-endings'],
        content_path: '/data/grammar/adjectives/weak-endings.mdx'
    },
    {
        slug: 'adjectives/mixed-endings',
        title: 'Mixed endings',
        level: 'A2',
        category: 'adjectives',
        sub_category: '🟢 BASIC SYSTEM',
        tags: ['Adjectives', 'Endings', 'Mixed'],
        summary: 'Adjective endings used with ein/kein/mein words.',
        related_vocab: [],
        related_rules: ['adjectives/weak-endings'],
        content_path: '/data/grammar/adjectives/mixed-endings.mdx'
    },
    {
        slug: 'adjectives/predicative',
        title: 'Predicate adjectives',
        level: 'A1',
        category: 'adjectives',
        sub_category: '🟢 BASIC SYSTEM',
        tags: ['Adjectives', 'Predicative'],
        summary: 'When adectives do not take an ending (predicate position).',
        related_vocab: [],
        related_rules: ['adjectives/strong-endings'],
        content_path: '/data/grammar/adjectives/predicative.mdx'
    },
    {
        slug: 'adjectives/comparison-regular',
        title: 'Comparative / superlative',
        level: 'A2',
        category: 'adjectives',
        sub_category: '🔵 COMPARISON',
        tags: ['Adjectives', 'Comparison'],
        summary: 'Regular degrees of comparison.',
        related_vocab: [],
        related_rules: ['adjectives/comparison-irregular'],
        content_path: '/data/grammar/adjectives/comparison-regular.mdx'
    },
    {
        slug: 'adjectives/comparison-irregular',
        title: 'Irregular forms',
        level: 'B1',
        category: 'adjectives',
        sub_category: '🔵 COMPARISON',
        tags: ['Adjectives', 'Comparison', 'Irregular'],
        summary: 'Exceptions like gut – besser – am besten.',
        related_vocab: [],
        related_rules: ['adjectives/comparison-regular'],
        content_path: '/data/grammar/adjectives/comparison-irregular.mdx'
    },
    {
        slug: 'adjectives/equality',
        title: 'Equality / inequality',
        level: 'A2',
        category: 'adjectives',
        sub_category: '🔵 COMPARISON',
        tags: ['Adjectives', 'Comparison', 'Equality'],
        summary: 'Expressing equality (genauso... wie) and inequality (als).',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/adjectives/equality.mdx'
    },
    {
        slug: 'adjectives/proportional',
        title: 'je… desto system',
        level: 'B2',
        category: 'adjectives',
        sub_category: '🔵 COMPARISON',
        tags: ['Adjectives', 'Comparison', 'Proportional'],
        summary: 'Proportional comparison: Je mehr, desto besser.',
        related_vocab: [],
        related_rules: ['adjectives/comparison-regular'],
        content_path: '/data/grammar/adjectives/proportional.mdx'
    },
    {
        slug: 'adjectives/participles',
        title: 'Participles as adjectives',
        level: 'B2',
        category: 'adjectives',
        sub_category: '🟣 ADVANCED',
        tags: ['Adjectives', 'Participles'],
        summary: 'Using Partizip I and Partizip II as adjectives.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/adjectives/participles.mdx'
    },
    {
        slug: 'adjectives/extended-constructions',
        title: 'Extended adjective constructions (B2 critical)',
        level: 'B2',
        category: 'adjectives',
        sub_category: '🟣 ADVANCED',
        tags: ['Adjectives', 'Complex'],
        summary: 'Complex adjective phrases common in technical documentation.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/adjectives/extended-constructions.mdx'
    },
    {
        slug: 'adjectives/fixed-prepositions',
        title: 'Adjective + preposition system',
        level: 'B2',
        category: 'adjectives',
        sub_category: '🟣 ADVANCED',
        tags: ['Adjectives', 'Prepositions'],
        summary: 'Combinations like stolz auf, interessiert an, verantwortlich für.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/adjectives/fixed-prepositions.mdx'
    },
    {
        slug: 'adjectives/extended-participle',
        title: 'Extended Participle Constructions',
        level: 'B2',
        category: 'adjectives',
        tags: ['Adjectives', 'Participles', 'Complex'],
        summary: 'Complex adjective phrases common in technical documentation.',
        related_vocab: [],
        related_rules: ['adjectives/participle-ii'],
        content_path: '/data/grammar/adjectives/extended-participle.mdx'
    },
    {
        slug: 'adjectives/fixed-prepositions',
        title: 'Adjectives with Prepositions',
        level: 'B2',
        category: 'adjectives',
        sub_category: '🟣 ADVANCED',
        tags: ['Adjectives', 'Prepositions'],
        summary: 'Combinations like stolz auf, interessiert an, verantwortlich für.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/adjectives/fixed-prepositions.mdx'
    },

    // ==========================================
    // 🔷 7. STRUCTURE & WORD ORDER [A1–B2]
    // ==========================================
    {
        slug: 'structure/verb-second',
        title: 'Verb second (main sentence)',
        level: 'A1',
        category: 'structure',
        sub_category: '🟢 CORE STRUCTURE',
        tags: ['Structure', 'Word Order', 'Main Clause'],
        summary: 'In a main clause statement, the verb is always in the second position.',
        related_vocab: [],
        related_rules: ['structure/verb-first'],
        content_path: '/data/grammar/structure/verb-second.mdx'
    },
    {
        slug: 'structure/verb-first',
        title: 'Verb first (questions/commands)',
        level: 'A1',
        category: 'structure',
        sub_category: '🟢 CORE STRUCTURE',
        tags: ['Structure', 'Word Order', 'Questions'],
        summary: 'The verb comes first in yes/no questions and commands.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/verb-first.mdx'
    },
    {
        slug: 'structure/verb-last',
        title: 'Verb last (subordinate clauses)',
        level: 'A2',
        category: 'structure',
        sub_category: '🟢 CORE STRUCTURE',
        tags: ['Structure', 'Word Order', 'Subordinate'],
        summary: 'In subordinate clauses, the conjugated verb moves to the very end.',
        related_vocab: [],
        related_rules: ['structure/subordinating-conjunctions'],
        content_path: '/data/grammar/structure/verb-last.mdx'
    },
    {
        slug: 'structure/tekamolo',
        title: 'TeKaMoLo system',
        level: 'B1',
        category: 'structure',
        sub_category: '🟢 CORE STRUCTURE',
        tags: ['Structure', 'Word Order', 'TeKaMoLo'],
        summary: 'Standard adverb order: Temporal, Kausal, Modal, Lokal.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/tekamolo.mdx'
    },
    {
        slug: 'structure/coordinating-conjunctions',
        title: 'Coordinating conjunctions',
        level: 'A1',
        category: 'structure',
        sub_category: '🔵 CONNECTORS',
        tags: ['Structure', 'Conjunctions', 'ADUSO'],
        summary: 'Position 0 connectors: und, aber, oder, denn, sondern.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/coordinating-conjunctions.mdx'
    },
    {
        slug: 'structure/subordinating-conjunctions',
        title: 'Subordinating conjunctions',
        level: 'A2',
        category: 'structure',
        sub_category: '🔵 CONNECTORS',
        tags: ['Structure', 'Conjunctions', 'Verb Kicker'],
        summary: 'Connectors that kick the verb to the end: weil, dass, wenn, ob, während, etc.',
        related_vocab: [],
        related_rules: ['structure/verb-last'],
        content_path: '/data/grammar/structure/subordinating-conjunctions.mdx'
    },
    {
        slug: 'structure/two-part-conjunctions',
        title: 'sowohl… als auch / nicht nur… sondern auch',
        level: 'B2',
        category: 'structure',
        sub_category: '🟣 ADVANCED CONNECTORS (B2)',
        tags: ['Structure', 'Conjunctions', 'Complex'],
        summary: 'Paired connectors for advanced description.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/two-part-conjunctions.mdx'
    },
    {
        slug: 'structure/entweder-oder',
        title: 'entweder… oder / je… desto',
        level: 'B2',
        category: 'structure',
        sub_category: '🟣 ADVANCED CONNECTORS (B2)',
        tags: ['Structure', 'Conjunctions', 'Complex'],
        summary: 'Paired connectors for alternative and proportional descriptions.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/entweder-oder.mdx'
    },
    {
        slug: 'structure/adverbial-conjunctions',
        title: 'deshalb, trotzdem, außerdem, etc.',
        level: 'B2',
        category: 'structure',
        sub_category: '🔴 ADVERBIAL CONNECTORS (CRITICAL)',
        tags: ['Structure', 'Conjunctions', 'Inversion'],
        summary: 'Connectors taking position 1 (verb follows immediately): deshalb, trotzdem, sonst.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/adverbial-conjunctions.mdx'
    },
    {
        slug: 'structure/inversion-rule',
        title: 'inversion rule (verb position)',
        level: 'A2',
        category: 'structure',
        sub_category: '🔴 ADVERBIAL CONNECTORS (CRITICAL)',
        tags: ['Structure', 'Word Order', 'Inversion'],
        summary: 'The rule where the subject and verb swap positions after an adverb or connector.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/inversion-rule.mdx'
    },
    {
        slug: 'structure/thinking-info-order',
        title: 'Information order',
        level: 'B2',
        category: 'structure',
        sub_category: '🔥 SENTENCE THINKING (NEW)',
        tags: ['Thinking', 'Information Order'],
        summary: 'How to order information for maximum clarity and impact.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/thinking-info-order.mdx'
    },
    {
        slug: 'structure/thinking-emphasis',
        title: 'Emphasis',
        level: 'B2',
        category: 'structure',
        sub_category: '🔥 SENTENCE THINKING (NEW)',
        tags: ['Thinking', 'Emphasis'],
        summary: 'Using word order to create emphasis in German sentences.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/thinking-emphasis.mdx'
    },
    {
        slug: 'structure/thinking-natural-flow',
        title: 'Natural German flow',
        level: 'B2',
        category: 'structure',
        sub_category: '🔥 SENTENCE THINKING (NEW)',
        tags: ['Thinking', 'Flow'],
        summary: 'Mastering the natural rhythm and information flow of native-sounding sentences.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/thinking-natural-flow.mdx'
    },

    // ==========================================
    // 🔷 8. RELATIVE CLAUSES & PRONOUNS [B1–B2]
    // ==========================================
    {
        slug: 'relative-clauses/basics',
        title: 'Basic relative clauses',
        level: 'B1',
        category: 'relative-clauses',
        sub_category: 'Relative Clauses',
        tags: ['Structure', 'Relative Clauses'],
        summary: 'Basics of relative clauses using der/die/das vs welcher/welche.',
        related_vocab: [],
        related_rules: ['relative-clauses/prepositions'],
        content_path: '/data/grammar/relative-clauses/basics.mdx'
    },
    {
        slug: 'relative-clauses/prepositions',
        title: 'Preposition + relative pronouns',
        level: 'B1',
        category: 'relative-clauses',
        sub_category: 'Relative Clauses',
        tags: ['Structure', 'Relative Clauses', 'Prepositions'],
        summary: 'Relative clauses starting with prepositions like "mit dem", "auf den".',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/prepositions.mdx'
    },
    {
        slug: 'relative-clauses/genitive',
        title: 'Genitive relative forms',
        level: 'B2',
        category: 'relative-clauses',
        sub_category: 'Relative Clauses',
        tags: ['Structure', 'Relative Clauses', 'Genitive'],
        summary: 'Using "dessen" and "deren" in relative clauses.',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/genitive.mdx'
    },
    {
        slug: 'relative-clauses/wo-wohin',
        title: 'wo / wohin / woher',
        level: 'B2',
        category: 'relative-clauses',
        sub_category: 'Relative Clauses',
        tags: ['Structure', 'Relative Clauses', 'Location'],
        summary: 'Using Wo/Wohin/Woher as relative connection pointers.',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/wo-wohin.mdx'
    },
    {
        slug: 'relative-clauses/indefinite',
        title: 'indefinite relative pronouns',
        level: 'B2',
        category: 'relative-clauses',
        sub_category: 'Relative Clauses',
        tags: ['Structure', 'Relative Clauses', 'Indefinite'],
        summary: 'Using wer, wen, wem in relative clauses.',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/indefinite.mdx'
    },

    // ==========================================
    // 🔷 9. NEGATION & QUESTIONS [A1–B2]
    // ==========================================
    {
        slug: 'negation/nicht-vs-kein',
        title: 'nicht vs kein',
        level: 'A1',
        category: 'negation',
        sub_category: 'Negation',
        tags: ['Negation', 'Basics'],
        summary: 'The difference between negating a noun (kein) and an action/adjective (nicht).',
        related_vocab: [],
        related_rules: ['negation/nicht-position'],
        content_path: '/data/grammar/negation/nicht-vs-kein.mdx'
    },
    {
        slug: 'negation/nicht-position',
        title: 'position of nicht',
        level: 'A2',
        category: 'negation',
        sub_category: 'Negation',
        tags: ['Negation', 'Word Order'],
        summary: 'Where to place "nicht" in a sentence.',
        related_vocab: [],
        related_rules: ['negation/nicht-vs-kein'],
        content_path: '/data/grammar/negation/nicht-position.mdx'
    },
    {
        slug: 'negation/yes-no-questions',
        title: 'yes/no questions',
        level: 'A1',
        category: 'negation',
        sub_category: 'Questions',
        tags: ['Questions', 'Basics'],
        summary: 'Forming basic Yes/No questions.',
        related_vocab: [],
        related_rules: ['negation/indirect-questions'],
        content_path: '/data/grammar/negation/yes-no-questions.mdx'
    },
    {
        slug: 'negation/w-questions',
        title: 'W-questions',
        level: 'A1',
        category: 'negation',
        sub_category: 'Questions',
        tags: ['Questions', 'W-Words'],
        summary: 'Forming questions with W-words (wer, was, wie, etc.).',
        related_vocab: [],
        related_rules: ['negation/indirect-questions'],
        content_path: '/data/grammar/negation/w-questions.mdx'
    },
    {
        slug: 'negation/indirect-questions',
        title: 'indirect questions',
        level: 'B1',
        category: 'negation',
        sub_category: 'Questions',
        tags: ['Questions', 'Indirect'],
        summary: 'Polite or reported questions using "ob" and w-words.',
        related_vocab: [],
        related_rules: ['negation/w-questions'],
        content_path: '/data/grammar/negation/indirect-questions.mdx'
    },
    {
        slug: 'negation/negative-prefixes',
        title: 'negative prefixes',
        level: 'B2',
        category: 'negation',
        sub_category: 'Negation',
        tags: ['Negation', 'Prefixes'],
        summary: 'Creating opposites with prefixes like un-, in-, nicht-.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/negation/negative-prefixes.mdx'
    },

    // ==========================================
    // 🔷 10. NUMBERS, TIME & DATE [A1–B1]
    // ==========================================
    {
        slug: 'numbers/cardinal',
        title: 'numbers',
        level: 'A1',
        category: 'numbers',
        sub_category: 'Numbers & Time',
        tags: ['Numbers', 'Counting'],
        summary: 'Counting from 0 to 1,000,000.',
        related_vocab: [],
        related_rules: ['numbers/ordinal'],
        content_path: '/data/grammar/numbers/cardinal.mdx'
    },
    {
        slug: 'numbers/ordinal',
        title: 'ordinal numbers',
        level: 'A2',
        category: 'numbers',
        sub_category: 'Numbers & Time',
        tags: ['Numbers', 'Ordinal'],
        summary: 'Ordering items: der erste, zweite, dritte...',
        related_vocab: [],
        related_rules: ['numbers/cardinal'],
        content_path: '/data/grammar/numbers/ordinal.mdx'
    },
    {
        slug: 'numbers/time',
        title: 'time expressions',
        level: 'A1',
        category: 'numbers',
        sub_category: 'Numbers & Time',
        tags: ['Numbers', 'Time'],
        summary: 'Telling time and understanding common time expressions.',
        related_vocab: [],
        related_rules: ['numbers/time-prepositions'],
        content_path: '/data/grammar/numbers/time.mdx'
    },
    {
        slug: 'numbers/date',
        title: 'date structure',
        level: 'A2',
        category: 'numbers',
        sub_category: 'Numbers & Time',
        tags: ['Numbers', 'Date'],
        summary: 'Saying and writing dates: im Jahr 2024, am 5. Mai.',
        related_vocab: [],
        related_rules: ['numbers/ordinal'],
        content_path: '/data/grammar/numbers/date.mdx'
    },
    {
        slug: 'numbers/time-prepositions',
        title: 'time prepositions',
        level: 'A2',
        category: 'numbers',
        sub_category: 'Numbers & Time',
        tags: ['Numbers', 'Time', 'Prepositions'],
        summary: 'Using um, am, im, and von... bis correctly.',
        related_vocab: [],
        related_rules: ['numbers/time'],
        content_path: '/data/grammar/numbers/time-prepositions.mdx'
    },

    // ==========================================
    // 🔷 11. WORD FORMATION SYSTEM [NEW 🔥 CRITICAL]
    // ==========================================
    {
        slug: 'word-formation/prefix-meaning',
        title: 'Prefix meaning system (ver-, be-, ent-, zer-)',
        level: 'B2',
        category: 'word-formation',
        sub_category: 'Word Building',
        tags: ['Word Formation', 'Prefixes'],
        summary: 'Understand the logic behind common German prefixes and how they change verb meanings.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/word-formation/prefix-meaning.mdx'
    },
    {
        slug: 'word-formation/suffix-meaning',
        title: 'Suffix meaning system',
        level: 'B2',
        category: 'word-formation',
        sub_category: 'Word Building',
        tags: ['Word Formation', 'Suffixes'],
        summary: 'How suffixes determine word class and add specific shades of meaning.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/word-formation/suffix-meaning.mdx'
    },
    {
        slug: 'word-formation/word-building-logic',
        title: 'Word building logic',
        level: 'B2',
        category: 'word-formation',
        sub_category: 'Word Building',
        tags: ['Word Formation', 'Logic'],
        summary: 'The "Lego" principle of German word formation: combining blocks for precision.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/word-formation/word-building-logic.mdx'
    },
    {
        slug: 'word-formation/meaning-transformation',
        title: 'Meaning transformation patterns',
        level: 'B2',
        category: 'word-formation',
        sub_category: 'Word Building',
        tags: ['Word Formation', 'Patterns'],
        summary: 'Common patterns of how words shift meaning through suffix and prefix changes.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/word-formation/meaning-transformation.mdx'
    },

    // ==========================================
    // 🔷 12. ERROR SYSTEM [NEW 🔥]
    // ==========================================
    {
        slug: 'error-system/top-50-mistakes',
        title: 'Top 50 learner mistakes',
        level: 'B1',
        category: 'error-system',
        sub_category: 'Common Errors',
        tags: ['Errors', 'Mistakes'],
        summary: 'The most frequent errors learners make and how to fix them for good.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/error-system/top-50-mistakes.mdx'
    },
    {
        slug: 'error-system/case-confusion',
        title: 'Case confusion errors',
        level: 'B1',
        category: 'error-system',
        sub_category: 'Common Errors',
        tags: ['Errors', 'Cases'],
        summary: 'Stop mixing up Accusative and Dative with these specific diagnostic rules.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/error-system/case-confusion.mdx'
    },
    {
        slug: 'error-system/word-order-mistakes',
        title: 'Word order mistakes',
        level: 'B1',
        category: 'error-system',
        sub_category: 'Common Errors',
        tags: ['Errors', 'Word Order'],
        summary: 'Fixing the "Verb position" problem once and for all.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/error-system/word-order-mistakes.mdx'
    },
    {
        slug: 'error-system/modal-misuse',
        title: 'Modal misuse',
        level: 'B1',
        category: 'error-system',
        sub_category: 'Common Errors',
        tags: ['Errors', 'Modals'],
        summary: 'Common ways students use modals incorrectly in professional settings.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/error-system/modal-misuse.mdx'
    },
    {
        slug: 'error-system/incorrect-vs-correct',
        title: 'Real incorrect vs correct examples',
        level: 'B2',
        category: 'error-system',
        sub_category: 'Common Errors',
        tags: ['Errors', 'Examples'],
        summary: 'Side-by-side comparisons of common mistakes and their professional corrections.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/error-system/incorrect-vs-correct.mdx'
    },

    // ==========================================
    // 🔷 13. SPOKEN vs WRITTEN GERMAN [NEW]
    // ==========================================
    {
        slug: 'spoken-written/spoken-shortcuts',
        title: 'Spoken shortcuts (hab, geh, etc.)',
        level: 'A2',
        category: 'spoken-written',
        sub_category: 'Styles',
        tags: ['Spoken', 'Shortcuts'],
        summary: 'How natives shorten words in everyday speech.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/spoken-written/spoken-shortcuts.mdx'
    },
    {
        slug: 'spoken-written/formal-german',
        title: 'Formal German (emails, reports)',
        level: 'B2',
        category: 'spoken-written',
        sub_category: 'Styles',
        tags: ['Formal', 'Professional'],
        summary: 'The structures required for high-level professional communication.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/spoken-written/formal-german.mdx'
    },
    {
        slug: 'spoken-written/when-to-use',
        title: 'When to use which',
        level: 'B1',
        category: 'spoken-written',
        sub_category: 'Styles',
        tags: ['Context', 'Usage'],
        summary: 'Navigating the spectrum between casual speech and formal writing.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/spoken-written/when-to-use.mdx'
    },

    // ==========================================
    // 🔷 14. REAL GERMAN [NEW 🔥]
    // ==========================================
    {
        slug: 'real-german/idioms',
        title: 'Idioms',
        level: 'B2',
        category: 'real-german',
        sub_category: 'Natural Phrasing',
        tags: ['Idioms', 'Authentic'],
        summary: 'Common German idioms that make you sound like a native.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/real-german/idioms.mdx'
    },
    {
        slug: 'real-german/natural-expressions',
        title: 'Natural expressions',
        level: 'B1',
        category: 'real-german',
        sub_category: 'Natural Phrasing',
        tags: ['Expressions', 'Authentic'],
        summary: 'The building blocks of natural German conversation.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/real-german/natural-expressions.mdx'
    },
    {
        slug: 'real-german/everyday-shortcuts',
        title: 'Everyday shortcuts',
        level: 'A2',
        category: 'real-german',
        sub_category: 'Natural Phrasing',
        tags: ['Shortcuts', 'Daily'],
        summary: 'Essential shortcuts for everyday tasks and interactions.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/real-german/everyday-shortcuts.mdx'
    },
    {
        slug: 'real-german/native-phrasing',
        title: 'Native phrasing patterns',
        level: 'B2',
        category: 'real-german',
        sub_category: 'Natural Phrasing',
        tags: ['Patterns', 'Authentic'],
        summary: 'Typical structures natives use that aren\'t usually in standard textbooks.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/real-german/native-phrasing.mdx'
    },

    // ==========================================
    // 🔷 15. PROFESSIONAL GERMAN [B2 🔥]
    // ==========================================
    {
        slug: 'professional/emails',
        title: 'Emails',
        level: 'B2',
        category: 'professional',
        sub_category: 'Workplace',
        tags: ['Professional', 'Emails'],
        summary: 'Master the art of professional email writing in German.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/professional/emails.mdx'
    },
    {
        slug: 'professional/reports',
        title: 'Reports',
        level: 'B2',
        category: 'professional',
        sub_category: 'Workplace',
        tags: ['Professional', 'Reports'],
        summary: 'Learn to write clear, structured professional reports.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/professional/reports.mdx'
    },
    {
        slug: 'professional/technical-manuals',
        title: 'Technical manuals',
        level: 'B2',
        category: 'professional',
        sub_category: 'Workplace',
        tags: ['Professional', 'Technical'],
        summary: 'Understanding and writing technical documentation and manuals.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/professional/technical-manuals.mdx'
    },
    {
        slug: 'professional/workplace-communication',
        title: 'Workplace communication',
        level: 'B2',
        category: 'professional',
        sub_category: 'Workplace',
        tags: ['Professional', 'Communication'],
        summary: 'Navigate meetings, discussions, and daily workplace interactions.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/professional/workplace-communication.mdx'
    }
];

// Helper functions
export function getGrammarPageBySlug(slug: string): GrammarPage | undefined {
    return GRAMMAR_SITEMAP.find(page => page.slug === slug);
}

export function getGrammarPagesByCategory(category: string): GrammarPage[] {
    return GRAMMAR_SITEMAP.filter(page => page.category === category);
}

export function getGrammarPagesByLevel(level: string): GrammarPage[] {
    return GRAMMAR_SITEMAP.filter(page => page.level === level);
}
