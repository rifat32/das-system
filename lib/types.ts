// TypeScript interfaces for DAS System

export interface VocabEntry {
    id: string;
    word: string;
    slug: string;
    level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
    gender?: "der" | "die" | "das";
    plural?: string;
    logic_hint?: string;
    type: "noun" | "verb" | "adjective" | "adverb" | "preposition" | "conjunction";
    memory_hook?: string;
    collocations: string[];
    common_patterns: string[];
    related_rules: string[];
    examples: Example[];
    audio_url?: string;
}

export interface Example {
    de: string;
    en: string;
    grammar_focus: string;
}

export interface GrammarPage {
    slug: string;
    title: string;
    level: "A1" | "A2" | "B1" | "B2";
    category: "articles" | "cases" | "verbs" | "structure" | "adjectives" | "passive" | "nouns" | "relative-clauses" | "negation" | "numbers";
    tags: string[];
    summary: string;
    related_vocab: string[];
    related_rules: string[];
    content_path: string;
}

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type GrammarCategory = "articles" | "cases" | "verbs" | "structure" | "adjectives" | "passive" | "nouns" | "relative-clauses" | "negation" | "numbers";
