import { CEFRLevel } from '@/lib/types';

interface LevelBadgeProps {
    level: CEFRLevel;
}

const levelColors: Record<CEFRLevel, string> = {
    'A1': 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700',
    'A2': 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700',
    'B1': 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700',
    'B2': 'bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700',
    'C1': 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700',
    'C2': 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700',
};

export default function LevelBadge({ level }: LevelBadgeProps) {
    return (
        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold border-2 ${levelColors[level]} shadow-sm uppercase tracking-wider`}>
            {level}
        </span>
    );
}
