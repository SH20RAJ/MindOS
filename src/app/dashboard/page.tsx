"use client";

import Link from "next/link";
import { LayoutGrid, GraduationCap, BrainCircuit, ArrowRight, Activity } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-indigo-500/30">
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter mb-2">OPERATING SYSTEM</h1>
                    <p className="text-muted-foreground font-mono text-sm">Welcome back, Pilot.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-400">SYSTEM NOMINAL</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* MindCloud (Personal Knowledge) */}
                <Link href="/mindcloud" className="group relative p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1">
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <BrainCircuit className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-white">MindCloud</h2>
                    <p className="text-zinc-500 text-sm mb-6 pr-12">
                        Your second brain. Manage notes, resources, and knowledge graphs.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                        ACCESS SYSTEM <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                {/* Project Hub (Active Learning) */}
                <Link href="/projects" className="group relative p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1">
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                        <LayoutGrid className="w-6 h-6 text-orange-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-white">Project Hub</h2>
                    <p className="text-zinc-500 text-sm mb-6 pr-12">
                        Active learning arcs. Manage goals, velocities, and deep work sessions.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
                        ENTER HUB <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                {/* School (Academic) */}
                <Link href="/school" className="group relative p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1">
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                        <GraduationCap className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-white">School</h2>
                    <p className="text-zinc-500 text-sm mb-6 pr-12">
                        Institutional learning. Assignments, retention heatmaps, and grades.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                        OPEN CAMPUS <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
