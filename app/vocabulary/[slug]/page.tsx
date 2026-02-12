import { getAllVocab, getVocabBySlug } from '@/data/vocabulary/vocab-a1';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LevelBadge from '@/components/ui/LevelBadge';
import MemoryHook from '@/components/ui/MemoryHook';
import QuizComponent from '@/components/ui/QuizComponent';
import AudioButton from '@/components/ui/AudioButton';
import AdSlot from '@/components/ui/AdSlot';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const allVocab = getAllVocab();
    return allVocab.map((entry) => ({
        slug: entry.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const entry = getVocabBySlug(resolvedParams.slug);

    if (!entry) return {};

    return {
        title: `${entry.word} - German ${entry.type} - DAS System`,
        description: `Learn the German ${entry.type} "${entry.word}" with memory hooks, examples, and interactive quizzes. ${entry.logic_hint || ''}`,
        keywords: [entry.word, 'German vocabulary', entry.level, entry.type, entry.gender || ''].filter(Boolean),
    };
}

export default async function VocabularyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const entry = getVocabBySlug(resolvedParams.slug);

    if (!entry) {
        notFound();
    }

    const breadcrumbItems = [
        { label: 'Vocabulary', href: '/vocabulary' },
        { label: entry.level, href: `/vocabulary/level/${entry.level.toLowerCase()}` },
        { label: entry.word, href: `/vocabulary/${entry.slug}` },
    ];

    return (
        <div className="p-4 md:p-8 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex items-center gap-3 mb-6">
                <LevelBadge level={entry.level} />
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold uppercase tracking-wider">
                    {entry.type}
                </span>
                {entry.gender && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${entry.gender === 'der' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                        entry.gender === 'die' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200' :
                            'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                        }`}>
                        {entry.gender}
                    </span>
                )}
            </div>

            {/* Word Header */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{entry.word}</h1>
                    <AudioButton word={entry.word} audioUrl={entry.audio_url} />
                </div>
                {entry.plural && (
                    <p className="text-xl text-slate-500 dark:text-slate-400 italic">
                        Plural: <span className="font-semibold text-slate-700 dark:text-slate-200">{entry.plural}</span>
                    </p>
                )}
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
                {/* Memory Hook */}
                {entry.memory_hook && (
                    <div className="relative group">
                        <MemoryHook text={entry.memory_hook} />
                    </div>
                )}

                {/* Logic Hint */}
                {entry.logic_hint && (
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-sm">
                        <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Logic Pattern
                        </h3>
                        <p className="text-emerald-800 dark:text-emerald-100 leading-relaxed italic">{entry.logic_hint}</p>
                    </div>
                )}

                {/* Common Patterns block */}
                {entry.common_patterns.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                            Common Patterns
                        </h2>
                        <div className="space-y-3">
                            {entry.common_patterns.map((pattern, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="font-medium text-slate-700 dark:text-slate-200">{pattern}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Collocations block */}
                {entry.collocations.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Collocations</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {entry.collocations.map((collocation, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 transition-colors">
                                    <span className="font-semibold text-slate-800 dark:text-slate-100">{collocation}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Examples */}
                {entry.examples.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Usage Examples</h2>
                        <div className="space-y-4">
                            {entry.examples.map((example, idx) => (
                                <div key={idx} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-md transition-all">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">{example.de}</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">{example.en}</p>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1.5 rounded-lg">
                                        Focus: {example.grammar_focus}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Interactive Quiz Placeholder */}
                <div className="py-10 border-t border-slate-100 dark:border-slate-800">
                    <QuizComponent
                        question={`Translate: ${entry.examples[0]?.en || 'The ' + entry.type + ' is important.'}`}
                        correctAnswer={entry.examples[0]?.de || entry.word}
                    />
                </div>

                {/* Related Grammar Rules */}
                {entry.related_rules.length > 0 && (
                    <div className="p-8 bg-slate-50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 text-lg">📚</span>
                            Connect the Grammar
                        </h3>
                        <div className="grid gap-3">
                            {entry.related_rules.map((rule, idx) => (
                                <Link
                                    key={idx}
                                    href={rule}
                                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-sm transition-all group"
                                >
                                    <span className="font-bold text-slate-700 dark:text-slate-200 capitalize group-hover:text-emerald-600">
                                        {rule.split('/').pop()?.replace(/-/g, ' ')}
                                    </span>
                                    <svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="pt-10">
                    <AdSlot position="bottom" />
                </div>
            </div>
        </div>
    );
}
