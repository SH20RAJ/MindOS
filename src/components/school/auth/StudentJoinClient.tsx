"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StudentJoinClient() {
    return (
        <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            <nav className="p-6 relative z-10">
                <Link href="/school" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> MindOS School
                </Link>
            </nav>

            <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 text-center">
                <div className="max-w-xl w-full">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">Student Access</h1>
                    <p className="text-xl text-gray-400 mb-12">Enter your Class Code.</p>
                    <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex items-center shadow-2xl">
                        <input
                            type="text"
                            placeholder="e.g. PHYS-2026"
                            className="flex-1 bg-transparent border-none text-white text-2xl md:text-4xl font-bold uppercase placeholder:text-zinc-700 px-6 py-4 focus:outline-none tracking-widest text-center"
                            maxLength={9}
                        />
                        <button className="bg-white text-black p-4 md:p-6 rounded-2xl hover:bg-indigo-400 hover:text-white transition-colors">
                            <ArrowRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
