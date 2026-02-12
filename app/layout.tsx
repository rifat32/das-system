import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAS System - Learn German Through Logic",
  description: "Master German grammar and vocabulary through micro-logic rules, forced recall, and the Memory Lock system. Free, ad-supported German learning.",
  keywords: ["German learning", "German grammar", "German vocabulary", "CEFR", "A1", "A2", "B1", "B2", "language learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 mt-20 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-primary font-bold text-xl mb-4">DAS System</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Master German through logic, not memorization. Learn with micro-logic rules and forced recall techniques.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Learn</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/grammar" className="text-slate-400 hover:text-primary transition-colors">Grammar</Link></li>
                  <li><Link href="/vocabulary" className="text-slate-400 hover:text-primary transition-colors">Vocabulary</Link></li>
                  <li><Link href="/practice" className="text-slate-400 hover:text-primary transition-colors">Practice</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Levels</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/levels/a1" className="text-slate-400 hover:text-primary transition-colors">A1 - Beginner</Link></li>
                  <li><Link href="/levels/a2" className="text-slate-400 hover:text-primary transition-colors">A2 - Elementary</Link></li>
                  <li><Link href="/levels/b1" className="text-slate-400 hover:text-primary transition-colors">B1 - Intermediate</Link></li>
                  <li><Link href="/levels/b2" className="text-slate-400 hover:text-primary transition-colors">B2 - Upper Intermediate</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-500 text-sm">
                © 2026 DAS System - Free German Learning Platform
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
