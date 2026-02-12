import Link from 'next/link';
import { GRAMMAR_SITEMAP, getGrammarPageBySlug } from '@/data/grammar-sitemap';

interface PaginationProps {
    currentSlug: string;
}

export default function Pagination({ currentSlug }: PaginationProps) {
    const currentIndex = GRAMMAR_SITEMAP.findIndex(p => p.slug === currentSlug);

    if (currentIndex === -1) return null;

    const prevPage = currentIndex > 0 ? GRAMMAR_SITEMAP[currentIndex - 1] : null;
    const nextPage = currentIndex < GRAMMAR_SITEMAP.length - 1 ? GRAMMAR_SITEMAP[currentIndex + 1] : null;

    return (
        <div className="flex justify-between items-stretch gap-4 mt-16 pt-8 border-t-2 border-slate-200 dark:border-slate-800">
            <div className="flex-1">
                {prevPage && (
                    <Link
                        href={`/grammar/${prevPage.slug}`}
                        className="flex flex-col h-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group shadow-sm hover:shadow-md"
                    >
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </span>
                        <span className="text-primary dark:text-primary font-semibold text-base group-hover:text-primary-hover line-clamp-2">
                            {prevPage.title}
                        </span>
                    </Link>
                )}
            </div>

            <div className="flex-1">
                {nextPage && (
                    <Link
                        href={`/grammar/${nextPage.slug}`}
                        className="flex flex-col h-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group shadow-sm hover:shadow-md items-end text-right"
                    >
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            Next
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className="text-primary dark:text-primary font-semibold text-base group-hover:text-primary-hover line-clamp-2">
                            {nextPage.title}
                        </span>
                    </Link>
                )}
            </div>
        </div>
    );
}
