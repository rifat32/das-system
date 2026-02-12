'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAllVocab } from '@/data/vocabulary/vocab-a1';

export default function VocabSidebar() {
    const pathname = usePathname();
    const allVocab = getAllVocab();

    // Group by level
    const levels: Record<string, typeof allVocab> = {};

    allVocab.forEach(word => {
        if (!levels[word.level]) {
            levels[word.level] = [];
        }
        levels[word.level].push(word);
    });

    return (
        <aside className="w-full h-full bg-white dark:bg-slate-900 custom-scrollbar overflow-y-auto border-r border-slate-200 dark:border-slate-800">
            <div className="py-6">
                {/* Vocab Home Link */}
                <div className="px-4 mb-6">
                    <Link
                        href="/vocabulary"
                        className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-lg group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12l9-9m-9 9l9 9" />
                        </svg>
                        Vocabulary
                    </Link>
                    <p className="text-xs text-slate-500 mt-2 ml-7">Explore all words</p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-6" />

                <nav className="space-y-4 px-2">
                    {Object.entries(levels).sort().map(([level, words]) => (
                        <div key={level} className="mb-6">
                            <h3 className="px-4 mb-3 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                                {level} Vocabulary
                            </h3>
                            <div className="space-y-0.5">
                                {words.map(word => {
                                    const href = `/vocabulary/${word.slug}`;
                                    const isActive = pathname === href;

                                    return (
                                        <Link
                                            key={word.slug}
                                            href={href}
                                            className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive
                                                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 font-medium'
                                                }`}
                                        >
                                            {word.word}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
