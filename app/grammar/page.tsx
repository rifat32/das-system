import { GRAMMAR_SITEMAP } from '@/data/grammar-sitemap';
import Link from 'next/link';
import LevelBadge from '@/components/ui/LevelBadge';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { GrammarCategory } from '@/lib/types';

const CATEGORY_INFO: Record<GrammarCategory, { title: string, description: string, icon: string, color: string }> = {
    'articles': { 
        title: 'Articles & Gender', 
        description: 'Master the suffix rules and biological logic to predict der, die, das with 90% accuracy.', 
        icon: '💎', 
        color: 'from-blue-500 to-indigo-600' 
    },
    'cases': { 
        title: 'Case System', 
        description: 'The 4 Forces: Nominative, Accusative, Dative, and Genitive. Understand roles, not just endings.', 
        icon: '⚖️', 
        color: 'from-emerald-500 to-teal-600' 
    },
    'verbs': { 
        title: 'Verb System', 
        description: 'From basic tenses to the complex prefix system and modal logic. Action to control.', 
        icon: '⚡', 
        color: 'from-orange-500 to-red-600' 
    },
    'passive': { 
        title: 'Passive & Alternatives', 
        description: 'Process vs State passive and the critical B2 alternatives like "lassen + sich".', 
        icon: '🔄', 
        color: 'from-purple-500 to-pink-600' 
    },
    'nouns': { 
        title: 'Noun System', 
        description: 'Precision grammar: N-Deklination and the golden Noun-Verb combinations.', 
        icon: '🏗️', 
        color: 'from-cyan-500 to-blue-600' 
    },
    'adjectives': { 
        title: 'Adjective System', 
        description: 'Endings, comparisons, and the advanced extended adjective constructions.', 
        icon: '🎨', 
        color: 'from-yellow-500 to-amber-600' 
    },
    'structure': { 
        title: 'Structure & Word Order', 
        description: 'The ultimate guide to verb position, Tekamolo, and natural sentence flow.', 
        icon: '🧩', 
        color: 'from-indigo-500 to-blue-700' 
    },
    'relative-clauses': { 
        title: 'Relative Clauses', 
        description: 'Connecting ideas seamlessly with relative pronouns and prepositional links.', 
        icon: '🔗', 
        color: 'from-violet-500 to-purple-600' 
    },
    'negation': { 
        title: 'Negation & Questions', 
        description: 'Mastering "nicht" vs "kein" and the logic of indirect questions.', 
        icon: '❓', 
        color: 'from-rose-500 to-red-700' 
    },
    'numbers': { 
        title: 'Numbers & Time', 
        description: 'Dates, time, and counting. The foundation of daily interaction.', 
        icon: '📅', 
        color: 'from-slate-500 to-slate-700' 
    },
    'word-formation': { 
        title: 'Word Formation System (NEW 🔥 CRITICAL)', 
        description: 'Unlock the Lego-like logic of German. Prefixes and suffixes decoded.', 
        icon: '🔥', 
        color: 'from-amber-400 to-orange-500' 
    },
    'error-system': { 
        title: 'Error System (NEW 🔥)', 
        description: 'The top 50 learner mistakes and how to fix them with diagnostic rules.', 
        icon: '🛡️', 
        color: 'from-red-500 to-orange-600' 
    },
    'spoken-written': { 
        title: 'Spoken vs Written (NEW)', 
        description: 'Navigate the distance between casual talk and professional documentation.', 
        icon: '🗣️', 
        color: 'from-sky-500 to-blue-600' 
    },
    'real-german': { 
        title: 'Real German (NEW 🔥)', 
        description: 'Authentic idioms and natural phrasing patterns used by natives.', 
        icon: '🥨', 
        color: 'from-orange-600 to-yellow-700' 
    },
    'professional': { 
        title: 'Professional German (B2 🔥)', 
        description: 'Workplace communication: Emails, reports, and technical manuals.', 
        icon: '💼', 
        color: 'from-indigo-600 to-slate-800' 
    }
};

export default function GrammarIndexPage() {
    // Group unique categories
    const categoryIds = Array.from(new Set(GRAMMAR_SITEMAP.map(p => p.category))) as GrammarCategory[];

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <Breadcrumb items={[{ label: 'Grammar', href: '/grammar' }]} />

            <div className="mt-8 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
                    The 15-Category <span className="text-emerald-600">DAS System</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                    Master German through high-precision micro-logic. Our structure mirrors how native speakers think, 
                    breaking down complex rules into manageable mental blocks.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryIds.map((catId) => {
                    const info = CATEGORY_INFO[catId];
                    if (!info) return null;

                    return (
                        <Link
                            key={catId}
                            href={`/grammar#${catId}`}
                            className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col h-full"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${info.color}`} />
                            
                            <div className="p-8">
                                <div className="text-4xl mb-6 bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {info.icon}
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                                    {info.title}
                                </h2>
                                
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    {info.description}
                                </p>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                                    Explore Modules
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -right-4 -bottom-4 text-8xl opacity-[0.03] dark:opacity-[0.05] pointer-events-none grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500">
                                {info.icon}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Detailed module sections */}
            <div className="mt-32 space-y-32">
                {categoryIds.map(catId => {
                    const pages = GRAMMAR_SITEMAP.filter(p => p.category === catId);
                    const info = CATEGORY_INFO[catId];

                    return (
                        <section key={catId} id={catId} className="scroll-mt-24">
                            <div className="flex items-end gap-6 mb-12">
                                <span className="text-5xl">{info?.icon}</span>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-wide italic">
                                        {info?.title}
                                    </h3>
                                    <div className={`h-1 w-32 bg-gradient-to-r ${info?.color} rounded-full`} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pages.map(page => (
                                    <Link
                                        key={page.slug}
                                        href={`/grammar/${page.slug}`}
                                        className="group bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 flex flex-col"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <LevelBadge level={page.level} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 tabular-nums">
                                                {page.sub_category.split(' ').pop()}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                                            {page.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                                            {page.summary}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {page.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded uppercase font-bold tracking-tighter">#{tag}</span>
                                            ))}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
