'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-slate-900 border-b border-border sticky top-0 z-[60]">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-16 gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary shrink-0">
                        <span className="bg-primary text-white px-2 py-0.5 rounded">DAS</span>
                        <span className="hidden sm:inline">System</span>
                    </Link>

                    {/* Search Bar - Center */}
                    <div className="hidden md:flex flex-1 max-w-md relative">
                        <input
                            type="text"
                            placeholder="Search grammar, vocabulary..."
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm outline-none"
                        />
                        <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>


                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        <Link href="/grammar" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                            Grammar
                        </Link>
                        <Link href="/vocabulary" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                            Vocabulary
                        </Link>
                        <Link href="/practice" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                            Practice
                        </Link>
                        <div className="h-6 w-px bg-gray-200 dark:bg-slate-700" />
                        <Link href="/login" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                            Sign In
                        </Link>
                        <Link href="/signup" className="inline-flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-emerald-500/10 active:scale-95">
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-border p-4 space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border-transparent text-sm"
                        />
                        <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <nav className="flex flex-col space-y-3">
                        <Link href="/grammar" className="text-lg font-semibold border-b border-gray-50 pb-2">Grammar</Link>
                        <Link href="/vocabulary" className="text-lg font-semibold border-b border-gray-50 pb-2">Vocabulary</Link>
                        <Link href="/practice" className="text-lg font-semibold border-b border-gray-50 pb-2">Practice</Link>
                        <div className="flex gap-4 pt-4">
                            <Link href="/login" className="flex-1 text-center py-2 border border-primary text-primary rounded-lg font-bold">Sign In</Link>
                            <Link href="/signup" className="flex-1 text-center py-2 bg-primary text-white rounded-lg font-bold">Sign Up</Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
