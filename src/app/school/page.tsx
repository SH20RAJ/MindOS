"use client";

import Link from "next/link";
import { ArrowRight, Brain, GraduationCap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function SchoolLanding() {
    return (
        <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <div className="relative z-10 text-center max-w-4xl px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-8">
                    <Brain className="w-3 h-3" />
                    BETA ACCESS FOR INSTITUTIONS
                </div>

                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
                    THE COGNITIVE<br />CLASSROOM
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-2xl mx-auto mb-12">
                    Don't just teach. Install knowledge.
                    <br />
                    The first Learning Operating System that guarantees retention.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Link href="/school/dashboard" className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        Enter Admin Portal <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button className="px-8 py-4 bg-black border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors">
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
