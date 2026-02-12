'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GRAMMAR_SITEMAP } from '@/data/grammar-sitemap';

export default function Sidebar() {
    const pathname = usePathname();

    // Group by category
    const categories: Record<string, typeof GRAMMAR_SITEMAP> = {};

    GRAMMAR_SITEMAP.forEach(page => {
        if (!categories[page.category]) {
            categories[page.category] = [];
        }
        categories[page.category].push(page);
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
                    <p className="text-xs text-slate-500 mt-2 ml-7">Browse all lessons</p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-6" />

                <nav className="space-y-4 px-2">
                    {Object.entries(categories).map(([category, pages]) => (
                        <div key={category} className="mb-6">
                            <h3 className="px-4 mb-3 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                                {category.replace(/-/g, ' ')}
                            </h3>
                            <div className="space-y-0.5">
                                {pages.map(page => {
                                    const href = `/grammar/${page.slug}`;
                                    const isActive = pathname === href;

                                    return (
                                        <Link
                                            key={page.slug}
                                            href={href}
                                            className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive
                                                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 font-medium'
                                                }`}
                                        >
                                            {page.title}
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
