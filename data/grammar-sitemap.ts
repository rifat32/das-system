import { GrammarPage } from '@/lib/types';

// Grammar sitemap based on the B2-BERUF COMPLETE SYSTEM
export const GRAMMAR_SITEMAP: GrammarPage[] = [
    // ==========================================
    // ARTICLES & GENDER [A1–A2]
    // ==========================================
    {
        slug: 'articles/suffix-rule-gender',
        title: 'The Suffix Rule: Predicting Gender',
        level: 'A1',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Patterns'],
        summary: 'Predict noun gender without memorization using suffix rules.',
        related_vocab: [],
        related_rules: ['articles/feminine-groups', 'articles/masculine-groups', 'articles/neuter-groups'],
        content_path: '/data/grammar/articles/suffix-rule-gender.mdx'
    },
    {
        slug: 'articles/feminine-groups',
        title: 'Feminine Groups: -ung, -heit, -keit',
        level: 'A1',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Feminine'],
        summary: 'Master feminine noun patterns: -ung, -heit, -keit, -schaft, -ion, -tät.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/feminine-groups.mdx'
    },
    {
        slug: 'articles/masculine-groups',
        title: 'Masculine Groups: -ling, -or, -ig',
        level: 'A1',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Masculine'],
        summary: 'Identify masculine nouns using -ling, -or, -ig, -ismus, -er (agent) patterns.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/masculine-groups.mdx'
    },
    {
        slug: 'articles/neuter-groups',
        title: 'Neuter Groups: -chen, -lein, -um',
        level: 'A1',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Neuter'],
        summary: 'Recognize neuter nouns with -chen, -lein, -um, -ment, -nis suffixes.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/neuter-groups.mdx'
    },
    {
        slug: 'articles/biological-exceptions',
        title: 'The Biological Exception (Der/Die)',
        level: 'A1',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Exceptions'],
        summary: 'Understand when biological gender overrides grammatical suffix rules.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/biological-exceptions.mdx'
    },
    {
        slug: 'articles/compound-nouns',
        title: 'Compound Nouns: The Last Word Rules',
        level: 'A2',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Compounds'],
        summary: 'The last word determines the gender of the entire compound noun.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/compound-nouns.mdx'
    },
    {
        slug: 'articles/no-suffix-meaning',
        title: 'Noun Gender: No Suffix? Look at Meaning',
        level: 'A2',
        category: 'articles',
        tags: ['Nouns', 'Gender', 'Meaning'],
        summary: 'Predict gender based on meaning when no suffix is present.',
        related_vocab: [],
        related_rules: ['articles/suffix-rule-gender'],
        content_path: '/data/grammar/articles/no-suffix-meaning.mdx'
    },

    // ==========================================
    // CASES: THE FOUR FACES [A1–B1]
    // ==========================================
    {
        slug: 'cases/nominative',
        title: 'The Nominative: Subject (Who?)',
        level: 'A1',
        category: 'cases',
        tags: ['Cases', 'Nominative', 'Subject'],
        summary: 'The subject of the sentence: Who is doing the action?',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/nominative.mdx'
    },
    {
        slug: 'cases/accusative',
        title: 'The Accusative: Direct Object (What?)',
        level: 'A1',
        category: 'cases',
        tags: ['Cases', 'Accusative', 'Direct Object'],
        summary: 'The direct object: What is being affected by the action?',
        related_vocab: [],
        related_rules: ['cases/nominative'],
        content_path: '/data/grammar/cases/accusative.mdx'
    },
    {
        slug: 'cases/accusative-prepositions',
        title: 'Accusative Prepositions',
        level: 'A2',
        category: 'cases',
        tags: ['Cases', 'Prepositions', 'Accusative'],
        summary: 'Prepositions that always take the accusative: durch, für, ohne, um, gegen, entlang.',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/accusative-prepositions.mdx'
    },
    {
        slug: 'cases/dative',
        title: 'The Dative: Indirect Object (To Whom?)',
        level: 'A2',
        category: 'cases',
        tags: ['Cases', 'Dative', 'Indirect Object'],
        summary: 'The indirect object: To whom or for whom is the action done?',
        related_vocab: [],
        related_rules: ['cases/accusative'],
        content_path: '/data/grammar/cases/dative.mdx'
    },
    {
        slug: 'cases/dative-verbs',
        title: 'Dative Verbs',
        level: 'B1',
        category: 'cases',
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
        tags: ['Cases', 'Prepositions', 'Dative'],
        summary: 'Prepositions that always take the dative: aus, bei, mit, nach, seit, von, zu, gegenüber.',
        related_vocab: [],
        related_rules: ['cases/dative'],
        content_path: '/data/grammar/cases/dative-prepositions.mdx'
    },
    {
        slug: 'cases/two-way-prepositions',
        title: 'Two-Way Prepositions: Wo vs. Wohin',
        level: 'A2',
        category: 'cases',
        tags: ['Cases', 'Prepositions', 'Two-Way'],
        summary: 'Location (Wo + Dative) vs. Direction (Wohin + Accusative).',
        related_vocab: [],
        related_rules: ['cases/two-way-list'],
        content_path: '/data/grammar/cases/two-way-prepositions.mdx'
    },
    {
        slug: 'cases/two-way-list',
        title: 'Two-Way Prepositions List',
        level: 'A2',
        category: 'cases',
        tags: ['Cases', 'Prepositions', 'List'],
        summary: 'The 9 Wechselpräpositionen: in, auf, unter, über, vor, hinter, neben, zwischen.',
        related_vocab: [],
        related_rules: ['cases/two-way-prepositions'],
        content_path: '/data/grammar/cases/two-way-list.mdx'
    },
    {
        slug: 'cases/two-way-dative-verbs',
        title: 'Two-Way: Verbs Forcing Dative',
        level: 'B1',
        category: 'cases',
        tags: ['Cases', 'Verbs', 'Two-Way'],
        summary: 'Positional verbs that use Dative: bleiben, stehen, liegen, sitzen, hängen (position).',
        related_vocab: [],
        related_rules: ['cases/two-way-prepositions'],
        content_path: '/data/grammar/cases/two-way-dative-verbs.mdx'
    },
    {
        slug: 'cases/two-way-accusative-verbs',
        title: 'Two-Way: Verbs Forcing Accusative',
        level: 'B1',
        category: 'cases',
        tags: ['Cases', 'Verbs', 'Two-Way'],
        summary: 'Directional verbs that use Accusative: stellen, legen, setzen, hängen (action).',
        related_vocab: [],
        related_rules: ['cases/two-way-prepositions'],
        content_path: '/data/grammar/cases/two-way-accusative-verbs.mdx'
    },
    {
        slug: 'cases/genitive',
        title: 'The Genitive: Possession',
        level: 'B1',
        category: 'cases',
        tags: ['Cases', 'Genitive', 'Possession'],
        summary: 'Expressing possession with the Genitive case (des, der, des).',
        related_vocab: [],
        related_rules: ['cases/genitive-prepositions'],
        content_path: '/data/grammar/cases/genitive.mdx'
    },
    {
        slug: 'cases/genitive-prepositions',
        title: 'Genitive Prepositions',
        level: 'B2',
        category: 'cases',
        tags: ['Cases', 'Prepositions', 'Genitive'],
        summary: 'Prepositions requiring Genitive: während, wegen, trotz, statt, aufgrund, innerhalb, außerhalb.',
        related_vocab: [],
        related_rules: ['cases/genitive'],
        content_path: '/data/grammar/cases/genitive-prepositions.mdx'
    },

    // ==========================================
    // VERBS: FROM ACTION TO REPORT [A1–B2]
    // ==========================================
    {
        slug: 'verbs/present-tense',
        title: 'Present Tense: Regular & Irregular',
        level: 'A1',
        category: 'verbs',
        tags: ['Verbs', 'Present Tense'],
        summary: 'The basic building block: conjugating verbs in the present tense.',
        related_vocab: [],
        related_rules: ['verbs/perfect-sein-haben'],
        content_path: '/data/grammar/verbs/present-tense.mdx'
    },
    {
        slug: 'verbs/perfect-sein-haben',
        title: 'Perfect Tense: Sein vs. Haben',
        level: 'A1',
        category: 'verbs',
        tags: ['Verbs', 'Perfect Tense', 'Auxiliary'],
        summary: 'When to use "sein" (movement/state change) vs. "haben" in the perfect tense.',
        related_vocab: [],
        related_rules: ['verbs/past-participles-regular'],
        content_path: '/data/grammar/verbs/perfect-sein-haben.mdx'
    },
    {
        slug: 'verbs/past-participles-regular',
        title: 'Past Participles: Regular (ge–t)',
        level: 'A1',
        category: 'verbs',
        tags: ['Verbs', 'Participles', 'Regular'],
        summary: 'Forming standard past participles with ge- prefix and -t ending.',
        related_vocab: [],
        related_rules: ['verbs/past-participles-irregular'],
        content_path: '/data/grammar/verbs/past-participles-regular.mdx'
    },
    {
        slug: 'verbs/past-participles-irregular',
        title: 'Past Participles: Irregular (ge–en)',
        level: 'A1',
        category: 'verbs',
        tags: ['Verbs', 'Participles', 'Irregular'],
        summary: 'Forming irregular past participles ending in -en.',
        related_vocab: [],
        related_rules: ['verbs/past-participles-regular'],
        content_path: '/data/grammar/verbs/past-participles-irregular.mdx'
    },
    {
        slug: 'verbs/past-participles-no-ge',
        title: 'Past Participles: No ge–',
        level: 'A2',
        category: 'verbs',
        tags: ['Verbs', 'Participles', 'Exceptions'],
        summary: 'Verbs that do not take the ge- prefix (inseparable verbs, -ieren verbs).',
        related_vocab: [],
        related_rules: ['verbs/inseparable-prefixes'],
        content_path: '/data/grammar/verbs/past-participles-no-ge.mdx'
    },
    {
        slug: 'verbs/simple-past',
        title: 'Simple Past (Präteritum)',
        level: 'A2',
        category: 'verbs',
        tags: ['Verbs', 'Past Tense', 'Präteritum'],
        summary: 'The written past form: war, hatte, wurde.',
        related_vocab: [],
        related_rules: ['verbs/simple-past-modals'],
        content_path: '/data/grammar/verbs/simple-past.mdx'
    },
    {
        slug: 'verbs/simple-past-modals',
        title: 'Simple Past: Modal Verbs',
        level: 'A2',
        category: 'verbs',
        tags: ['Verbs', 'Modals', 'Past Tense'],
        summary: 'Using modal verbs in the past: konnte, musste, wollte, sollte, durfte.',
        related_vocab: [],
        related_rules: ['verbs/simple-past'],
        content_path: '/data/grammar/verbs/simple-past-modals.mdx'
    },
    {
        slug: 'verbs/future-i',
        title: 'Future I: werden + Infinitiv',
        level: 'B1',
        category: 'verbs',
        tags: ['Verbs', 'Future Tense'],
        summary: 'Expressing future intent or assumption (Vermutung).',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/verbs/future-i.mdx'
    },
    {
        slug: 'verbs/separable-prefixes',
        title: 'Separable Prefixes',
        level: 'A2',
        category: 'verbs',
        tags: ['Verbs', 'Prefixes', 'Separable'],
        summary: 'Common separable prefixes: an-, auf-, mit-, vor-, zu-, ab-, bei-, ein-, fest-, her-.',
        related_vocab: [],
        related_rules: ['verbs/separable-position'],
        content_path: '/data/grammar/verbs/separable-prefixes.mdx'
    },
    {
        slug: 'verbs/separable-position',
        title: 'Separable Prefixes: Verb Kick',
        level: 'A2',
        category: 'verbs',
        tags: ['Verbs', 'Prefixes', 'Word Order'],
        summary: 'The prefix moves to the end of the main clause.',
        related_vocab: [],
        related_rules: ['verbs/separable-prefixes'],
        content_path: '/data/grammar/verbs/separable-position.mdx'
    },
    {
        slug: 'verbs/inseparable-prefixes',
        title: 'Inseparable Prefixes',
        level: 'B1',
        category: 'verbs',
        tags: ['Verbs', 'Prefixes', 'Inseparable'],
        summary: 'Prefixes that stay attached: be-, ver-, er-, ent-, zer-, ge-, emp-, miss-.',
        related_vocab: [],
        related_rules: ['verbs/dual-prefixes'],
        content_path: '/data/grammar/verbs/inseparable-prefixes.mdx'
    },
    {
        slug: 'verbs/dual-prefixes',
        title: 'Dual Prefixes',
        level: 'B1',
        category: 'verbs',
        tags: ['Verbs', 'Prefixes', 'Dual'],
        summary: 'Prefixes that can be separable or inseparable depending on meaning: um-, über-, unter-, durch-, hinter-.',
        related_vocab: [],
        related_rules: ['verbs/inseparable-prefixes'],
        content_path: '/data/grammar/verbs/dual-prefixes.mdx'
    },
    {
        slug: 'verbs/modal-present',
        title: 'Modal Verbs: Present Tense',
        level: 'A2',
        category: 'verbs',
        tags: ['Verbs', 'Modals', 'Present'],
        summary: 'Current ability/necessity: kann, muss, darf, soll, will, mag.',
        related_vocab: [],
        related_rules: ['verbs/modal-past'],
        content_path: '/data/grammar/verbs/modal-present.mdx'
    },
    {
        slug: 'verbs/modal-past',
        title: 'Modal Verbs: Past Tense',
        level: 'B1',
        category: 'verbs',
        tags: ['Verbs', 'Modals', 'Past'],
        summary: 'Past ability/necessity: konnte, musste, durfte, sollte, wollte, mochte.',
        related_vocab: [],
        related_rules: ['verbs/modal-present'],
        content_path: '/data/grammar/verbs/modal-past.mdx'
    },
    {
        slug: 'verbs/modal-subjunctive',
        title: 'Modal Verbs: Subjunctive Meaning',
        level: 'B1',
        category: 'verbs',
        tags: ['Verbs', 'Modals', 'Subjunctive'],
        summary: 'Polite or hypothetical: sollte, könnte, müsste, dürfte, wollte.',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-polite'],
        content_path: '/data/grammar/verbs/modal-subjunctive.mdx'
    },
    {
        slug: 'verbs/modal-objective',
        title: 'Modal Verbs: Objective Statement',
        level: 'B2',
        category: 'verbs',
        tags: ['Verbs', 'Modals', 'Advanced'],
        summary: 'Using sollen/wollen for "they say / claim".',
        related_vocab: [],
        related_rules: ['verbs/modal-subjunctive'],
        content_path: '/data/grammar/verbs/modal-objective.mdx'
    },
    {
        slug: 'verbs/konjunktiv-i',
        title: 'Konjunktiv I: Reported Speech',
        level: 'B2',
        category: 'verbs',
        tags: ['Verbs', 'Subjunctive', 'Reported Speech'],
        summary: 'Documenting customer complaints or what someone said (Er sagte, er habe...).',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-forms'],
        content_path: '/data/grammar/verbs/konjunktiv-i.mdx'
    },
    {
        slug: 'verbs/konjunktiv-ii-forms',
        title: 'Konjunktiv II: If I Were... (Forms)',
        level: 'B2',
        category: 'verbs',
        tags: ['Verbs', 'Subjunctive', 'Conditional'],
        summary: 'Hypothetical scenarios using wäre, hätte, würde.',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-polite'],
        content_path: '/data/grammar/verbs/konjunktiv-ii-forms.mdx'
    },
    {
        slug: 'verbs/konjunktiv-ii-polite',
        title: 'Konjunktiv II: Polite Requests',
        level: 'B2',
        category: 'verbs',
        tags: ['Verbs', 'Subjunctive', 'Polite'],
        summary: 'Professional communication: Ich hätte gern..., Könnten Sie?',
        related_vocab: [],
        related_rules: ['verbs/konjunktiv-ii-forms'],
        content_path: '/data/grammar/verbs/konjunktiv-ii-polite.mdx'
    },
    {
        slug: 'verbs/futur-ii',
        title: 'Futur II: Assumptions about Past',
        level: 'B2',
        category: 'verbs',
        tags: ['Verbs', 'Future II', 'Assumption'],
        summary: 'Speculating about completed actions: Er wird gelesen haben.',
        related_vocab: [],
        related_rules: ['verbs/future-i'],
        content_path: '/data/grammar/verbs/futur-ii.mdx'
    },
    {
        slug: 'verbs/lassen',
        title: 'Lassen + Infinitiv: Causative',
        level: 'B2',
        category: 'verbs',
        tags: ['Verbs', 'Lassen', 'Causative'],
        summary: 'Ordering or arranging services: Ich lasse den Wagen reparieren.',
        related_vocab: [],
        related_rules: ['passive/lassen-sich'],
        content_path: '/data/grammar/verbs/lassen.mdx'
    },

    // ==========================================
    // PASSIVE VOICE & ALTERNATIVES [B1–B2]
    // ==========================================
    {
        slug: 'passive/vorgangspassiv',
        title: 'Vorgangspassiv (Process)',
        level: 'B1',
        category: 'passive',
        tags: ['Passive', 'Process', 'Werden'],
        summary: 'Focus on the action: Die Maschine wird repariert (werden + Partizip 2).',
        related_vocab: [],
        related_rules: ['passive/zustandspassiv'],
        content_path: '/data/grammar/passive/vorgangspassiv.mdx'
    },
    {
        slug: 'passive/zustandspassiv',
        title: 'Zustandspassiv (Result)',
        level: 'B1',
        category: 'passive',
        tags: ['Passive', 'Result', 'Sein'],
        summary: 'Focus on the result: Die Maschine ist repariert (sein + Partizip 2).',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/zustandspassiv.mdx'
    },
    {
        slug: 'passive/passive-modals',
        title: 'Passive with Modal Verbs',
        level: 'B1',
        category: 'passive',
        tags: ['Passive', 'Modals'],
        summary: 'Obligation or ability in passive: Die Maschine muss repariert werden.',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/passive-modals.mdx'
    },
    {
        slug: 'passive/sein-zu',
        title: 'Passiversatz: sein + zu (Must)',
        level: 'B2',
        category: 'passive',
        tags: ['Passive', 'Alternative', 'Advanced'],
        summary: 'Formal necessity: Die Maschine ist zu reparieren (must be repaired).',
        related_vocab: [],
        related_rules: ['passive/passive-modals'],
        content_path: '/data/grammar/passive/sein-zu.mdx'
    },
    {
        slug: 'passive/lassen-sich',
        title: 'Passiversatz: lassen + sich (Can)',
        level: 'B2',
        category: 'passive',
        tags: ['Passive', 'Alternative', 'Advanced'],
        summary: 'Possibility: Das Problem lässt sich lösen (can be solved).',
        related_vocab: [],
        related_rules: ['verbs/lassen'],
        content_path: '/data/grammar/passive/lassen-sich.mdx'
    },
    {
        slug: 'passive/impersonal',
        title: 'Unpersönliches Passiv',
        level: 'B2',
        category: 'passive',
        tags: ['Passive', 'Impersonal'],
        summary: 'General actions: Hier wird gearbeitet / Es wird getanzt.',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/impersonal.mdx'
    },
    {
        slug: 'passive/recipient',
        title: 'Bekommen-Passiv',
        level: 'B2',
        category: 'passive',
        tags: ['Passive', 'Recipient'],
        summary: 'Recipient passive: Er bekommt das Buch geschenkt.',
        related_vocab: [],
        related_rules: ['passive/vorgangspassiv'],
        content_path: '/data/grammar/passive/recipient.mdx'
    },

    // ==========================================
    // NOUNS: PRECISION & FORMALITY [B1–B2]
    // ==========================================
    {
        slug: 'nouns/n-declension-weak',
        title: 'N-Deklination: Weak Masculine',
        level: 'B1',
        category: 'nouns',
        tags: ['Nouns', 'N-Deklination', 'Masculine'],
        summary: 'Masculine nouns adding -n: der Kunde → den Kunden.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-list'],
        content_path: '/data/grammar/nouns/n-declension-weak.mdx'
    },
    {
        slug: 'nouns/n-declension-nationalities',
        title: 'N-Deklination: Nationalities',
        level: 'B1',
        category: 'nouns',
        tags: ['Nouns', 'N-Deklination', 'Nationalities'],
        summary: 'Nationalities ending in -e: der Franzose → den Franzosen.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-weak'],
        content_path: '/data/grammar/nouns/n-declension-nationalities.mdx'
    },
    {
        slug: 'nouns/n-declension-professions',
        title: 'N-Deklination: Professions',
        level: 'B1',
        category: 'nouns',
        tags: ['Nouns', 'N-Deklination', 'Professions'],
        summary: 'Professions like der Kollege → den Kollegen.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-weak'],
        content_path: '/data/grammar/nouns/n-declension-professions.mdx'
    },
    {
        slug: 'nouns/n-declension-animals',
        title: 'N-Deklination: Animals',
        level: 'B1',
        category: 'nouns',
        tags: ['Nouns', 'N-Deklination', 'Animals'],
        summary: 'Animals like der Löwe → den Löwen.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-weak'],
        content_path: '/data/grammar/nouns/n-declension-animals.mdx'
    },
    {
        slug: 'nouns/n-declension-list',
        title: 'N-Deklination: Complete List',
        level: 'B1',
        category: 'nouns',
        tags: ['Nouns', 'N-Deklination', 'List'],
        summary: 'Important N-Dek noun list: der Herr, der Mensch, der Name, etc.',
        related_vocab: [],
        related_rules: ['nouns/n-declension-weak'],
        content_path: '/data/grammar/nouns/n-declension-list.mdx'
    },
    {
        slug: 'nouns/nominalization-suffixes',
        title: 'Nominalisierung: Suffixes',
        level: 'B2',
        category: 'nouns',
        tags: ['Nouns', 'Nominalization', 'Suffixes'],
        summary: 'Turning verbs into nouns using suffixes like -ung, -e, -tion.',
        related_vocab: [],
        related_rules: ['nouns/nominalization-null'],
        content_path: '/data/grammar/nouns/nominalization-suffixes.mdx'
    },
    {
        slug: 'nouns/nominalization-null',
        title: 'Nominalisierung: Null Suffix',
        level: 'B2',
        category: 'nouns',
        tags: ['Nouns', 'Nominalization'],
        summary: 'Verb stems becoming nouns: besuchen → der Besuch.',
        related_vocab: [],
        related_rules: ['nouns/nominalization-suffixes'],
        content_path: '/data/grammar/nouns/nominalization-null.mdx'
    },
    {
        slug: 'nouns/infinitive-nouns',
        title: 'Infinitive as Noun',
        level: 'B2',
        category: 'nouns',
        tags: ['Nouns', 'Infinitive'],
        summary: 'Using the infinitive as a neuter noun: das Arbeiten, das Lesen.',
        related_vocab: [],
        related_rules: ['nouns/prep-nominal'],
        content_path: '/data/grammar/nouns/infinitive-nouns.mdx'
    },
    {
        slug: 'nouns/prep-nominal',
        title: 'Preposition + Nominal Phrase',
        level: 'B2',
        category: 'nouns',
        tags: ['Nouns', 'Prepositions'],
        summary: 'Professional phrasing: beim Arbeiten, zum Verkauf, nach der Ankunft.',
        related_vocab: [],
        related_rules: ['nouns/infinitive-nouns'],
        content_path: '/data/grammar/nouns/prep-nominal.mdx'
    },
    {
        slug: 'nouns/nvv-functional',
        title: 'Nomen-Verb-Verbindungen',
        level: 'B2',
        category: 'nouns',
        tags: ['Nouns', 'NVV', 'Professional'],
        summary: 'Function verb structures for professional contexts (e.g., eine Frage stellen).',
        related_vocab: [],
        related_rules: ['nouns/nvv-list'],
        content_path: '/data/grammar/nouns/nvv-functional.mdx'
    },
    {
        slug: 'nouns/nvv-list',
        title: 'Common NVV List',
        level: 'B2',
        category: 'nouns',
        tags: ['Nouns', 'NVV', 'List'],
        summary: 'List of critical NVVs: in Betrieb nehmen, zur Verfügung stellen, etc.',
        related_vocab: [],
        related_rules: ['nouns/nvv-functional'],
        content_path: '/data/grammar/nouns/nvv-list.mdx'
    },

    // ==========================================
    // ADJECTIVES: FROM SIMPLE TO COMPLEX [A1–B2]
    // ==========================================
    {
        slug: 'adjectives/strong-endings',
        title: 'Strong Endings: No Article',
        level: 'A2',
        category: 'adjectives',
        tags: ['Adjectives', 'Endings', 'Strong'],
        summary: 'Adjective endings when no article is present.',
        related_vocab: [],
        related_rules: ['adjectives/weak-endings'],
        content_path: '/data/grammar/adjectives/strong-endings.mdx'
    },
    {
        slug: 'adjectives/weak-endings',
        title: 'Weak Endings: Der/Die/Das',
        level: 'A2',
        category: 'adjectives',
        tags: ['Adjectives', 'Endings', 'Weak'],
        summary: 'Adjective endings when a definite article is present.',
        related_vocab: [],
        related_rules: ['adjectives/strong-endings'],
        content_path: '/data/grammar/adjectives/weak-endings.mdx'
    },
    {
        slug: 'adjectives/mixed-endings',
        title: 'Mixed Endings: Ein– Words',
        level: 'A2',
        category: 'adjectives',
        tags: ['Adjectives', 'Endings', 'Mixed'],
        summary: 'Adjective endings used with ein/kein/mein words.',
        related_vocab: [],
        related_rules: ['adjectives/weak-endings'],
        content_path: '/data/grammar/adjectives/mixed-endings.mdx'
    },
    {
        slug: 'adjectives/predicative',
        title: 'Adjectives Without Endings',
        level: 'A1',
        category: 'adjectives',
        tags: ['Adjectives', 'Predicative'],
        summary: 'When adectives do not take an ending (predicate position).',
        related_vocab: [],
        related_rules: ['adjectives/strong-endings'],
        content_path: '/data/grammar/adjectives/predicative.mdx'
    },
    {
        slug: 'adjectives/comparison-regular',
        title: 'Comparative & Superlative',
        level: 'A2',
        category: 'adjectives',
        tags: ['Adjectives', 'Comparison'],
        summary: 'Regular degrees of comparison.',
        related_vocab: [],
        related_rules: ['adjectives/comparison-irregular'],
        content_path: '/data/grammar/adjectives/comparison-regular.mdx'
    },
    {
        slug: 'adjectives/comparison-irregular',
        title: 'Irregular Comparatives',
        level: 'B1',
        category: 'adjectives',
        tags: ['Adjectives', 'Comparison', 'Irregular'],
        summary: 'Exceptions like gut – besser – am besten.',
        related_vocab: [],
        related_rules: ['adjectives/comparison-regular'],
        content_path: '/data/grammar/adjectives/comparison-irregular.mdx'
    },
    {
        slug: 'adjectives/equality',
        title: 'Equality: genauso... wie',
        level: 'A2',
        category: 'adjectives',
        tags: ['Adjectives', 'Comparison', 'Equality'],
        summary: 'Expressing equality using "genauso... wie".',
        related_vocab: [],
        related_rules: ['adjectives/inequality'],
        content_path: '/data/grammar/adjectives/equality.mdx'
    },
    {
        slug: 'adjectives/inequality',
        title: 'Inequality: als',
        level: 'A2',
        category: 'adjectives',
        tags: ['Adjectives', 'Comparison', 'Inequality'],
        summary: 'Expressing inequality using "als".',
        related_vocab: [],
        related_rules: ['adjectives/equality'],
        content_path: '/data/grammar/adjectives/inequality.mdx'
    },
    {
        slug: 'adjectives/proportional',
        title: 'Proportional: je... desto',
        level: 'B2',
        category: 'adjectives',
        tags: ['Adjectives', 'Comparison', 'Proportional'],
        summary: 'Proportional comparison: Je mehr, desto besser.',
        related_vocab: [],
        related_rules: ['adjectives/comparison-regular'],
        content_path: '/data/grammar/adjectives/proportional.mdx'
    },
    {
        slug: 'adjectives/participle-i',
        title: 'Partizip I: Active Meaning',
        level: 'B2',
        category: 'adjectives',
        tags: ['Adjectives', 'Participles', 'Active'],
        summary: 'Using Partizip I as an adjective for ongoing actions (die kochende Suppe).',
        related_vocab: [],
        related_rules: ['adjectives/participle-ii'],
        content_path: '/data/grammar/adjectives/participle-i.mdx'
    },
    {
        slug: 'adjectives/participle-ii',
        title: 'Partizip II: Finished Meaning',
        level: 'B2',
        category: 'adjectives',
        tags: ['Adjectives', 'Participles', 'Passive'],
        summary: 'Using Partizip II as an adjective for completed actions (das verkaufte Auto).',
        related_vocab: [],
        related_rules: ['adjectives/participle-i'],
        content_path: '/data/grammar/adjectives/participle-ii.mdx'
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
        tags: ['Adjectives', 'Prepositions'],
        summary: 'Combinations like stolz auf, interessiert an, verantwortlich für.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/adjectives/fixed-prepositions.mdx'
    },

    // ==========================================
    // STRUCTURE & WORD ORDER [A1–B2]
    // ==========================================
    {
        slug: 'structure/verb-second',
        title: 'Verb Second: Statements',
        level: 'A1',
        category: 'structure',
        tags: ['Structure', 'Word Order', 'Main Clause'],
        summary: 'In a main clause statement, the verb is always in the second position.',
        related_vocab: [],
        related_rules: ['structure/verb-first'],
        content_path: '/data/grammar/structure/verb-second.mdx'
    },
    {
        slug: 'structure/verb-first',
        title: 'Verb First: Commands & Questions',
        level: 'A1',
        category: 'structure',
        tags: ['Structure', 'Word Order', 'Questions'],
        summary: 'The verb comes first in yes/no questions and commands.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/verb-first.mdx'
    },
    {
        slug: 'structure/verb-last',
        title: 'Verb Last: Subordinate Clauses',
        level: 'A2',
        category: 'structure',
        tags: ['Structure', 'Word Order', 'Subordinate'],
        summary: 'In subordinate clauses, the conjugated verb moves to the very end.',
        related_vocab: [],
        related_rules: ['structure/subordinating-conjunctions'],
        content_path: '/data/grammar/structure/verb-last.mdx'
    },
    {
        slug: 'structure/tekamolo',
        title: 'TeKaMoLo',
        level: 'B1',
        category: 'structure',
        tags: ['Structure', 'Word Order', 'TeKaMoLo'],
        summary: 'Standard adverb order: Temporal, Kausal, Modal, Lokal.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/tekamolo.mdx'
    },
    {
        slug: 'structure/coordinating-conjunctions',
        title: 'Coordinating Conjunctions',
        level: 'A1',
        category: 'structure',
        tags: ['Structure', 'Conjunctions', 'ADUSO'],
        summary: 'Position 0 connectors: und, aber, oder, denn, sondern.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/coordinating-conjunctions.mdx'
    },
    {
        slug: 'structure/subordinating-conjunctions',
        title: 'Subordinating Conjunctions',
        level: 'A2',
        category: 'structure',
        tags: ['Structure', 'Conjunctions', 'Verb Kicker'],
        summary: 'Connectors that kick the verb to the end: weil, dass, wenn, ob, während, etc.',
        related_vocab: [],
        related_rules: ['structure/verb-last'],
        content_path: '/data/grammar/structure/subordinating-conjunctions.mdx'
    },
    {
        slug: 'structure/two-part-conjunctions',
        title: 'Two-Part Conjunctions',
        level: 'B2',
        category: 'structure',
        tags: ['Structure', 'Conjunctions', 'Complex'],
        summary: 'Paired connectors: sowohl... als auch, weder... noch, je... desto.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/structure/two-part-conjunctions.mdx'
    },
    {
        slug: 'structure/adverbial-conjunctions',
        title: 'Adverbial Conjunctions (Inversion)',
        level: 'B2',
        category: 'structure',
        tags: ['Structure', 'Conjunctions', 'Inversion'],
        summary: 'Connectors taking position 1 (verb follows immediately): deshalb, trotzdem, sonst.',
        related_vocab: [],
        related_rules: ['structure/verb-second'],
        content_path: '/data/grammar/structure/adverbial-conjunctions.mdx'
    },

    // ==========================================
    // RELATIVE CLAUSES & PRONOUNS [B1–B2]
    // ==========================================
    {
        slug: 'relative-clauses/basics',
        title: 'Relative Clauses: Der/Die/Das',
        level: 'B1',
        category: 'relative-clauses',
        tags: ['Structure', 'Relative Clauses'],
        summary: 'Basics of relative clauses using der/die/das vs welcher/welche.',
        related_vocab: [],
        related_rules: ['relative-clauses/prepositions'],
        content_path: '/data/grammar/relative-clauses/basics.mdx'
    },
    {
        slug: 'relative-clauses/prepositions',
        title: 'Relative Clauses with Prepositions',
        level: 'B1',
        category: 'relative-clauses',
        tags: ['Structure', 'Relative Clauses', 'Prepositions'],
        summary: 'Relative clauses starting with prepositions like "mit dem", "auf den".',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/prepositions.mdx'
    },
    {
        slug: 'relative-clauses/genitive',
        title: 'Relative Clauses: Genitive',
        level: 'B2',
        category: 'relative-clauses',
        tags: ['Structure', 'Relative Clauses', 'Genitive'],
        summary: 'Using "dessen" and "deren" in relative clauses.',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/genitive.mdx'
    },
    {
        slug: 'relative-clauses/wo-wohin',
        title: 'Relative Clauses: Wo / Wohin',
        level: 'B2',
        category: 'relative-clauses',
        tags: ['Structure', 'Relative Clauses', 'Location'],
        summary: 'Using Wo/Wohin/Woher as relative connection pointers.',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/wo-wohin.mdx'
    },
    {
        slug: 'relative-clauses/indefinite',
        title: 'Indefinite Relative Pronouns',
        level: 'B2',
        category: 'relative-clauses',
        tags: ['Structure', 'Relative Clauses', 'Indefinite'],
        summary: 'Using wer, wen, wem in relative clauses.',
        related_vocab: [],
        related_rules: ['relative-clauses/basics'],
        content_path: '/data/grammar/relative-clauses/indefinite.mdx'
    },

    // ==========================================
    // NEGATION & QUESTIONS [A1–B2]
    // ==========================================
    {
        slug: 'negation/nicht-vs-kein',
        title: 'Nicht vs. Kein',
        level: 'A1',
        category: 'negation',
        tags: ['Negation', 'Basics'],
        summary: 'The difference between negating a noun (kein) and an action/adjective (nicht).',
        related_vocab: [],
        related_rules: ['negation/nicht-position'],
        content_path: '/data/grammar/negation/nicht-vs-kein.mdx'
    },
    {
        slug: 'negation/nicht-position',
        title: 'Position of Nicht',
        level: 'A2',
        category: 'negation',
        tags: ['Negation', 'Word Order'],
        summary: 'Where to place "nicht" in a sentence.',
        related_vocab: [],
        related_rules: ['negation/nicht-vs-kein'],
        content_path: '/data/grammar/negation/nicht-position.mdx'
    },
    {
        slug: 'negation/questions-basics',
        title: 'Ja/Nein vs. W-Questions',
        level: 'A1',
        category: 'negation',
        tags: ['Questions', 'Basics'],
        summary: 'Forming basic Yes/No questions and W-Word questions.',
        related_vocab: [],
        related_rules: ['negation/indirect-questions'],
        content_path: '/data/grammar/negation/questions-basics.mdx'
    },
    {
        slug: 'negation/indirect-questions',
        title: 'Indirect Questions',
        level: 'B1',
        category: 'negation',
        tags: ['Questions', 'Indirect'],
        summary: 'Polite or reported questions using "ob" and w-words.',
        related_vocab: [],
        related_rules: ['negation/questions-basics'],
        content_path: '/data/grammar/negation/indirect-questions.mdx'
    },
    {
        slug: 'negation/negative-prefixes',
        title: 'Negative Prefixes',
        level: 'B2',
        category: 'negation',
        tags: ['Negation', 'Prefixes'],
        summary: 'Creating opposites with prefixes like un-, in-, nicht-.',
        related_vocab: [],
        related_rules: [],
        content_path: '/data/grammar/negation/negative-prefixes.mdx'
    },

    // ==========================================
    // NUMBERS, TIME & DATE [A1–B1]
    // ==========================================
    {
        slug: 'numbers/cardinal',
        title: 'Cardinal Numbers',
        level: 'A1',
        category: 'numbers',
        tags: ['Numbers', 'Counting'],
        summary: 'Counting from 0 to 1,000,000.',
        related_vocab: [],
        related_rules: ['numbers/ordinal'],
        content_path: '/data/grammar/numbers/cardinal.mdx'
    },
    {
        slug: 'numbers/ordinal',
        title: 'Ordinal Numbers',
        level: 'A2',
        category: 'numbers',
        tags: ['Numbers', 'Ordinal'],
        summary: 'Ordering items: der erste, zweite, dritte...',
        related_vocab: [],
        related_rules: ['numbers/cardinal'],
        content_path: '/data/grammar/numbers/ordinal.mdx'
    },
    {
        slug: 'numbers/time',
        title: 'Time: Uhr vs. Stunde',
        level: 'A1',
        category: 'numbers',
        tags: ['Numbers', 'Time'],
        summary: 'Telling time and understanding the difference between Uhr and Stunde.',
        related_vocab: [],
        related_rules: ['numbers/time-prepositions'],
        content_path: '/data/grammar/numbers/time.mdx'
    },
    {
        slug: 'numbers/date',
        title: 'Dates',
        level: 'A2',
        category: 'numbers',
        tags: ['Numbers', 'Date'],
        summary: 'Saying and writing dates: im Jahr 2024, am 5. Mai.',
        related_vocab: [],
        related_rules: ['numbers/ordinal'],
        content_path: '/data/grammar/numbers/date.mdx'
    },
    {
        slug: 'numbers/time-prepositions',
        title: 'Time Prepositions',
        level: 'A2',
        category: 'numbers',
        tags: ['Numbers', 'Time', 'Prepositions'],
        summary: 'Using um, am, im, and von... bis correctly.',
        related_vocab: [],
        related_rules: ['numbers/time'],
        content_path: '/data/grammar/numbers/time-prepositions.mdx'
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
