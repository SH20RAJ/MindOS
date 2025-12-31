

import Link from "next/link";
import { GraduationCap, LayoutDashboard, Users, BookOpen, Settings, LogOut } from "lucide-react";

export default function SchoolLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // A distinct, more "official" layout for the School System
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
            {/* Top Navigation Bar (School Context) */}
            <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/school" className="flex items-center gap-2 font-black text-xl tracking-tighter">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <span>MINDOS <span className="text-indigo-400">SCHOOL</span></span>
                        </Link>

                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                            <Link href="/school/dashboard" className="hover:text-white transition-colors flex items-center gap-2">
                                <LayoutDashboard className="w-4 h-4" /> Overview
                            </Link>
                            <Link href="/school/classes" className="hover:text-white transition-colors flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Curriculum
                            </Link>
                            <Link href="/school/students" className="hover:text-white transition-colors flex items-center gap-2">
                                <Users className="w-4 h-4" /> Students
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-mono transition-colors">
                            ACADEMIC VIEW
                        </button>
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold text-xs">
                            T
                        </div>
                    </div>
                </div>
            </nav>

            <main className="min-h-[calc(100vh-64px)]">
                {children}
            </main>
        </div>
    );
}
