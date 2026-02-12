import Link from 'next/link';
import LevelBadge from '@/components/ui/LevelBadge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Master German Through <span className="text-primary">Logic</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Don&apos;t just memorize words. <strong>Understand the patterns.</strong> Learn German through micro-logic rules,
          forced recall, and the Memory Lock system.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link
            href="/grammar"
            className="inline-flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-emerald-600 hover:to-emerald-800 transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-1 active:scale-95"
          >
            Explore Grammar
          </Link>
          <Link
            href="/vocabulary"
            className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 px-10 py-4 rounded-xl text-lg font-bold hover:border-emerald-500 transition-all shadow-sm hover:-translate-y-1 active:scale-95"
          >
            Learn Vocabulary
          </Link>
        </div>

        <div className="flex gap-4 justify-center items-center flex-wrap pt-4">
          <span className="text-slate-500 font-medium">Start your journey:</span>
          <div className="flex gap-2">
            <Link href="/levels/a1"><LevelBadge level="A1" /></Link>
            <Link href="/levels/a2"><LevelBadge level="A2" /></Link>
            <Link href="/levels/b1"><LevelBadge level="B1" /></Link>
            <Link href="/levels/b2"><LevelBadge level="B2" /></Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Memory Lock System</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="bg-emerald-100 dark:bg-emerald-950/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Micro-Logic Rules</h3>
              <p className="text-slate-500 dark:text-slate-400">One page = One mental rule. We break down the &quot;why&quot; so you can predict the &quot;how&quot;.</p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 dark:bg-blue-950/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Pattern First</h3>
              <p className="text-slate-500 dark:text-slate-400">Master the 90% pattern first. Exceptions are handled as separate, logical subsets.</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 dark:bg-purple-950/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Forced Recall</h3>
              <p className="text-slate-500 dark:text-slate-400">Active learning through prediction tasks and micro-quizzes on every single page.</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 dark:bg-orange-950/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-4xl">🔗</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Cross-Linking</h3>
              <p className="text-slate-500 dark:text-slate-400">Grammar doesn&apos;t live in a vacuum. Every rule links to related vocabulary and cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Grammar Topics */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Learning</h2>
            <p className="text-slate-500">Jump into some of our most popular micro-logic lessons.</p>
          </div>
          <Link href="/grammar" className="text-primary font-bold hover:underline flex items-center gap-2">
            View all 100+ lessons <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              slug: 'articles/suffix-rule-gender',
              cat: 'Articles',
              title: 'The Suffix Rule: Predicting Gender',
              level: 'A1',
              desc: "Don't memorize genders. Look at the ending word pattern."
            },
            {
              slug: 'cases/accusative-direct-object',
              cat: 'Cases',
              title: 'The Accusative: Direct Object',
              level: 'A1',
              desc: 'Master the accusative case with simple actor-object logic.'
            },
            {
              slug: 'verbs/separable-prefix-logic',
              cat: 'Verbs',
              title: 'Separable Prefixes: The Logic',
              level: 'A1',
              desc: 'Understand why and where prefixes move in a sentence.'
            },
            {
              slug: 'structure/tekamolo-word-order',
              cat: 'Structure',
              title: 'TeKaMoLo: Word Order',
              level: 'A2',
              desc: 'One simple mnemonic to master complex German word order.'
            },
            {
              slug: 'structure/verb-kick-nebensatz',
              cat: 'Structure',
              title: 'The Verb Kick: Subordinate Clauses',
              level: 'B1',
              desc: 'The logic behind why verbs "kick" to the end of sentences.'
            },
            {
              slug: 'adjectives/strong-endings',
              cat: 'Adjectives',
              title: 'Strong Endings: No Article',
              level: 'B1',
              desc: 'Adjective endings when the article signal is missing.'
            }
          ].map((topic) => (
            <Link
              key={topic.slug}
              href={`/grammar/${topic.slug}`}
              className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800 hover:border-primary"
            >
              <div className="flex items-start justify-between mb-6">
                <LevelBadge level={topic.level as any} />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">{topic.cat}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {topic.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
