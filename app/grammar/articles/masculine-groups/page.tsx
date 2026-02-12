import { getGrammarPageBySlug } from '@/data/grammar-sitemap';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LevelBadge from '@/components/ui/LevelBadge';
import AdSlot from '@/components/ui/AdSlot';
import Pagination from '@/components/ui/Pagination';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const SLUG = 'articles/masculine-groups';

export async function generateMetadata(): Promise<Metadata> {
    const page = getGrammarPageBySlug(SLUG);
    if (!page) return {};

    return {
        title: `${page.title} - DAS System German Grammar`,
        description: page.summary,
        keywords: [...page.tags, 'German grammar', page.level, page.category],
    };
}

export default function GrammarPage() {
    const page = getGrammarPageBySlug(SLUG);

    if (!page) {
        notFound();
    }

    const breadcrumbItems = [
        { label: 'Grammar', href: '/grammar' },
        { label: page.category.charAt(0).toUpperCase() + page.category.slice(1), href: `/grammar#${page.category}` },
        { label: page.title, href: `/grammar/${page.slug}` },
    ];

    return (
        <div className="lg:grid lg:grid-cols-[1fr,300px] lg:gap-8 p-4 md:p-8 bg-white dark:bg-slate-900 min-h-screen">
            {/* Content Column */}
            <main className="max-w-4xl mx-auto w-full">
                <Breadcrumb items={breadcrumbItems} />

                <div className="flex items-center gap-3 mb-4 mt-4">
                    <LevelBadge level={page.level} />
                    <div className="flex flex-wrap gap-2">
                        {page.tags.map(tag => (
                            <span key={tag} className="text-sm bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                    {page.title}
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-600 dark:text-slate-400 italic mb-10 leading-relaxed border-l-4 border-primary pl-6 py-2">
                        {page.summary}
                    </p>

                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-primary p-8 mb-10 rounded-r-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Core Logic Rule</h2>
                        <p className="text-lg text-slate-700 dark:text-emerald-100 italic leading-relaxed">
                            &quot;German grammar isn&apos;t random. Master the micro-logic, and the language unlocks.
                            In this lesson, we break down the pattern so you can predict it next time.&quot;
                        </p>
                    </div>

                    <div className="h-64 bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center mb-10">
                        <p className="text-slate-500 italic">Full lesson content with interactive modules goes here...</p>
                    </div>
                </div>

                {/* Pagination */}
                <Pagination currentSlug={SLUG} />

                {/* Related Links */}
                {page.related_rules.length > 0 && (
                    <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Keep Learning</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {page.related_rules.map(ruleSlug => {
                                const relatedPage = getGrammarPageBySlug(ruleSlug);
                                if (!relatedPage) return null;
                                return (
                                    <Link
                                        key={ruleSlug}
                                        href={`/grammar/${ruleSlug}`}
                                        className="group flex flex-col p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all hover:shadow-md"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <LevelBadge level={relatedPage.level} />
                                            <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">{relatedPage.category}</span>
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-200 font-semibold group-hover:text-primary transition-colors">
                                            {relatedPage.title}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Bottom Ad */}
                <div className="mt-12">
                    <AdSlot position="bottom" />
                </div>
            </main>

            {/* Right Sidebar Ad (Desktop only) */}
            <aside className="hidden lg:block space-y-8">
                <div className="sticky top-24">
                    <AdSlot position="sidebar" />

                    <div className="mt-8 p-6 bg-slate-900 rounded-xl text-white shadow-xl">
                        <h4 className="font-bold mb-2">Unlock Memory Locks</h4>
                        <p className="text-sm text-slate-300 mb-4">Master German grammar using our micro-logical patterns.</p>
                        <button className="w-full bg-primary hover:bg-primary-hover py-2 rounded-lg font-bold transition-colors">
                            Support DAS System
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
