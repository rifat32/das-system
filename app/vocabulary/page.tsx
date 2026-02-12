import { getAllVocab } from '@/data/vocabulary/vocab-a1';
import Link from 'next/link';
import LevelBadge from '@/components/ui/LevelBadge';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function VocabularyIndexPage() {
    const allVocab = getAllVocab();

    // Group by level
    const levels = ['A1', 'A2', 'B1', 'B2'] as const;
    const vocabByLevel = levels.map(level => ({
        level,
        words: allVocab.filter(v => v.level === level)
    }));

    return (
        <div className="p-4 md:p-8 max-w-6xl">
            <Breadcrumb items={[{ label: 'Vocabulary', href: '/vocabulary' }]} />

            <div className="mt-6 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">German Vocabulary</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                    Learn vocabulary with memory hooks, logic patterns, and cross-linked grammar rules.
                </p>
            </div>

            <div className="space-y-16">
                {vocabByLevel.map(({ level, words }) => (
                    <section key={level}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <LevelBadge level={level} />
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{words.length} words</h2>
                            </div>
                            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {words.map(word => (
                                <Link
                                    key={word.id}
                                    href={`/vocabulary/${word.slug}`}
                                    className="group bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-800 hover:border-emerald-500 active:scale-[0.98]"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${word.gender === 'der' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                                            word.gender === 'die' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200' :
                                                word.gender === 'das' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200' :
                                                    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
                                            }`}>
                                            {word.gender || word.type}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                                        {word.word}
                                    </h3>
                                    {word.plural && (
                                        <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-3">{word.plural}</p>
                                    )}
                                    {word.memory_hook && (
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic line-clamp-2 border-l-2 border-slate-200 dark:border-slate-800 pl-3">
                                            {word.memory_hook}
                                        </p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
