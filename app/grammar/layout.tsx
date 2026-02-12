'use client';

import Sidebar from '@/components/ui/Sidebar';
import { useState } from 'react';

export default function GrammarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-white dark:bg-slate-900 min-h-screen">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed bottom-6 left-6 z-50 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold hover:scale-105 active:scale-95 transition-all"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <span>Lessons</span>
            </button>

            {/* Left Sidebar Overlay Layer */}
            <div className={`
                fixed inset-0 z-[55] lg:relative lg:z-0 lg:block
                ${isSidebarOpen ? 'block' : 'hidden'}
            `}>
                {/* Mobile Backdrop */}
                <div
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sidebar Container */}
                <div className="relative w-72 h-full lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 border-r border-border bg-white dark:bg-slate-900 overflow-y-auto custom-scrollbar">
                    <Sidebar />
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 min-w-0" onClick={() => setIsSidebarOpen(false)}>
                {children}
            </div>
        </div>
    );
}
