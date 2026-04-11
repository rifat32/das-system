'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GRAMMAR_SITEMAP } from '@/data/grammar-sitemap';
import { GrammarCategory, GrammarPage } from '@/lib/types';

const CATEGORY_LABELS: Record<GrammarCategory, string> = {
    'articles': '🔷 1. ARTICLES & GENDER (A1–A2)',
    'cases': '🔷 2. CASE SYSTEM — THE 4 FORCES (A1–B2)',
    'verbs': '🔷 3. VERB SYSTEM — ACTION TO CONTROL (A1–B2)',
    'passive': '🔷 4. PASSIVE & ALTERNATIVES (B1–B2)',
    'nouns': '🔷 5. NOUN SYSTEM — PRECISION LANGUAGE (B1–B2)',
    'adjectives': '🔷 6. ADJECTIVES SYSTEM (A1–B2)',
    'structure': '🔷 7. STRUCTURE & WORD ORDER (A1–B2)',
    'relative-clauses': '🔷 8. RELATIVE CLAUSES & PRONOUNS (B1–B2)',
    'negation': '🔷 9. NEGATION & QUESTIONS (A1–B2)',
    'numbers': '🔷 10. NUMBERS, TIME & DATE (A1–B1)',
    'word-formation': '🔷 11. WORD FORMATION SYSTEM (NEW 🔥)',
    'error-system': '🔷 12. ERROR SYSTEM (NEW 🔥)',
    'spoken-written': '🔷 13. SPOKEN vs WRITTEN GERMAN (NEW)',
    'real-german': '🔷 14. REAL GERMAN (NEW 🔥)',
    'professional': '🔷 15. PROFESSIONAL GERMAN (B2 🔥)'
};

export default function Sidebar() {
    const pathname = usePathname();

    // Group by category, then by sub_category
    const groupedCategories: Record<string, Record<string, GrammarPage[]>> = {};

    GRAMMAR_SITEMAP.forEach(page => {
        if (!groupedCategories[page.category]) {
            groupedCategories[page.category] = {};
        }
        if (!groupedCategories[page.category][page.sub_category]) {
            groupedCategories[page.category][page.sub_category] = [];
        }
        groupedCategories[page.category][page.sub_category].push(page);
    });

    return (
        <aside className="w-full h-full bg-white dark:bg-slate-900 custom-scrollbar overflow-y-auto border-r border-slate-200 dark:border-slate-800">
            <div className="py-6">
                {/* Grammar Home Link */}
                <div className="px-4 mb-6">
                    <Link
                        href="/grammar"
                        className="flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-lg group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12l9-9m-9 9l9 9" />
                        </svg>
                        German Grammar
                    </Link>
                    <p className="text-xs text-slate-500 mt-2 ml-7 uppercase tracking-tighter font-semibold">The 15-Category System</p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-6" />

                <nav className="space-y-8 px-2 pb-20">
                    {Object.entries(groupedCategories).map(([category, subCategories]) => (
                        <div key={category} className="mb-2">
                            <h3 className="px-4 mb-4 text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider leading-relaxed">
                                {CATEGORY_LABELS[category as GrammarCategory] || category.replace(/-/g, ' ')}
                            </h3>
                            
                            <div className="space-y-6 ml-2 border-l-2 border-slate-100 dark:border-slate-800/50 pl-2">
                                {Object.entries(subCategories).map(([subCategory, pages]) => (
                                    <div key={subCategory}>
                                        <h4 className="px-2 mb-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                            {subCategory}
                                        </h4>
                                        <div className="space-y-0.5">
                                            {pages.map(page => {
                                                const href = `/grammar/${page.slug}`;
                                                const isActive = pathname === href;

                                                return (
                                                    <Link
                                                        key={page.slug}
                                                        href={href}
                                                        className={`block px-3 py-2 text-sm rounded-md transition-all relative group ${isActive
                                                            ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold'
                                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium'
                                                            }`}
                                                    >
                                                        {isActive && (
                                                            <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-1 h-4 bg-emerald-500 rounded-full" />
                                                        )}
                                                        <span className="truncate">{page.title}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
