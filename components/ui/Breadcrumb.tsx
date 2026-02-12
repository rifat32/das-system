import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="text-sm text-slate-600 dark:text-slate-400 mb-6 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800">
            <ol className="flex items-center space-x-2 flex-wrap">
                <li>
                    <Link href="/" className="hover:text-primary transition-colors font-medium">
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <span className="text-slate-400">/</span>
                        {index === items.length - 1 ? (
                            <span className="text-slate-900 dark:text-white font-semibold">{item.label}</span>
                        ) : (
                            <Link href={item.href} className="hover:text-primary transition-colors font-medium">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
