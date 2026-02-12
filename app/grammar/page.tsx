import { GRAMMAR_SITEMAP } from '@/data/grammar-sitemap';
import Link from 'next/link';
import LevelBadge from '@/components/ui/LevelBadge';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function GrammarIndexPage() {
    // Group by category
    const categories: Record<string, typeof GRAMMAR_SITEMAP> = {};
    GRAMMAR_SITEMAP.forEach(page => {
        if (!categories[page.category]) categories[page.category] = [];
        categories[page.category].push(page);
    });

    return (
        <div className="p-4 md:p-8 max-w-6xl">
            <Breadcrumb items={[{ label: 'Grammar', href: '/grammar' }]} />

            <div className="mt-6 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">German Grammar</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                    Master German through micro-logic patterns. Each lesson focuses on one mental rule to help you understand, not just memorize.
                </p>
            </div>

            <div className="space-y-16">
                {Object.entries(categories).map(([categoryName, pages]) => (
                    <section key={categoryName}>
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-2xl font-bold capitalize text-slate-800 dark:text-slate-100">{categoryName}</h2>
                            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pages.map(page => (
                                <Link
                                    key={page.slug}
                                    href={`/grammar/${page.slug}`}
                                    className="group bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-800 hover:border-primary active:scale-[0.98]"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <LevelBadge level={page.level} />
                                        <div className="flex gap-2">
                                            {page.tags.slice(0, 1).map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                                        {page.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {page.summary}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
