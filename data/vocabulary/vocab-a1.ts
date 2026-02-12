import { VocabEntry } from '@/lib/types';

// Sample A1 vocabulary (first 20 words for demo)
export const VOCAB_A1: VocabEntry[] = [
    {
        id: 'vocab-001',
        word: 'Der Tisch',
        slug: 'tisch',
        level: 'A1',
        gender: 'der',
        plural: 'die Tische',
        logic_hint: 'Ends in -isch, usually masculine',
        type: 'noun',
        memory_hook: 'Think: A TISH (dish) is on the table.',
        collocations: ['den Tisch decken', 'am Tisch sitzen'],
        common_patterns: ['Der Tisch ist groß', 'Auf dem Tisch'],
        related_rules: ['/grammar/articles/suffix-rule-gender', '/grammar/cases/nominative-logic'],
        examples: [
            { de: 'Der Tisch ist groß.', en: 'The table is big.', grammar_focus: 'Nominative' },
            { de: 'Ich sehe den Tisch.', en: 'I see the table.', grammar_focus: 'Accusative' },
            { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is on the table.', grammar_focus: 'Dative' },
        ],
    },
    {
        id: 'vocab-002',
        word: 'Die Lösung',
        slug: 'loesung',
        level: 'A1',
        gender: 'die',
        plural: 'die Lösungen',
        logic_hint: 'Ends in -ung, always feminine',
        type: 'noun',
        memory_hook: 'LOE-sung sounds like "solution" - both end in "-tion/-ung"',
        collocations: ['eine Lösung finden', 'die richtige Lösung'],
        common_patterns: ['Die Lösung ist einfach', 'eine gute Lösung'],
        related_rules: ['/grammar/articles/feminine-groups', '/grammar/articles/suffix-rule-gender'],
        examples: [
            { de: 'Die Lösung ist einfach.', en: 'The solution is simple.', grammar_focus: 'Nominative' },
            { de: 'Ich habe die Lösung.', en: 'I have the solution.', grammar_focus: 'Accusative' },
        ],
    },
    {
        id: 'vocab-003',
        word: 'haben',
        slug: 'haben',
        level: 'A1',
        type: 'verb',
        memory_hook: 'HABEN = to HAVE (both start with HA)',
        collocations: ['Zeit haben', 'Hunger haben', 'Angst haben'],
        common_patterns: ['Ich habe...', 'Er hat...', 'Wir haben...'],
        related_rules: ['/grammar/verbs/perfect-sein-haben'],
        examples: [
            { de: 'Ich habe einen Hund.', en: 'I have a dog.', grammar_focus: 'Present tense' },
            { de: 'Ich habe gegessen.', en: 'I have eaten.', grammar_focus: 'Perfect tense' },
            { de: 'Ich hatte Zeit.', en: 'I had time.', grammar_focus: 'Past tense' },
        ],
    },
    {
        id: 'vocab-004',
        word: 'sein',
        slug: 'sein',
        level: 'A1',
        type: 'verb',
        memory_hook: 'SEIN = to BE - essential for describing things',
        collocations: ['müde sein', 'glücklich sein', 'zu Hause sein'],
        common_patterns: ['Ich bin...', 'Du bist...', 'Er ist...'],
        related_rules: ['/grammar/verbs/perfect-sein-haben', '/grammar/cases/nominative-logic'],
        examples: [
            { de: 'Ich bin Student.', en: 'I am a student.', grammar_focus: 'Present tense' },
            { de: 'Ich bin gegangen.', en: 'I have gone.', grammar_focus: 'Perfect tense' },
            { de: 'Er war müde.', en: 'He was tired.', grammar_focus: 'Past tense' },
        ],
    },
    {
        id: 'vocab-005',
        word: 'Das Haus',
        slug: 'haus',
        level: 'A1',
        gender: 'das',
        plural: 'die Häuser',
        logic_hint: 'Buildings are often neuter',
        type: 'noun',
        memory_hook: 'HAUS sounds like House - remember the H',
        collocations: ['nach Hause gehen', 'zu Hause sein'],
        common_patterns: ['Das Haus ist groß', 'Im Haus'],
        related_rules: ['/grammar/articles/suffix-rule-gender'],
        examples: [
            { de: 'Das Haus ist groß.', en: 'The house is big.', grammar_focus: 'Nominative' },
            { de: 'Ich kaufe das Haus.', en: 'I buy the house.', grammar_focus: 'Accusative' },
        ],
    },
];

// Helper function to get all vocabulary
export function getAllVocab(): VocabEntry[] {
    return [...VOCAB_A1];
}

// Helper function to get vocab by slug
export function getVocabBySlug(slug: string): VocabEntry | undefined {
    return getAllVocab().find(v => v.slug === slug);
}

// Helper function to get vocab by level
export function getVocabByLevel(level: string): VocabEntry[] {
    return getAllVocab().filter(v => v.level === level);
}
