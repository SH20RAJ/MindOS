"use client";

import Link from "next/link";
import { LayoutGrid, GraduationCap, BrainCircuit, ArrowRight, Activity, Zap, HardDrive } from "lucide-react";
import { FocusTimer } from "@/components/dashboard/FocusTimer";
import { DailyReviewStack } from "@/components/dashboard/DailyReviewStack";

export function DashboardView() {
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-indigo-500/30">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[10px] font-mono tracking-wider uppercase">
                                v2.4.0-RC
                            </span>
                            <div className="h-px flex-1 w-12 bg-white/10" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
                            COMMAND CENTER
                        </h1>
                        <p className="text-muted-foreground font-mono text-sm flex items-center gap-2">
                            <span className="text-emerald-500">●</span> {currentDate}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-xs text-zinc-500 font-mono">SYSTEM STATUS</span>
                            <span className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                <Activity className="w-3 h-3 animate-pulse" /> NOMINAL
                            </span>
                        </div>
                        <div className="w-px h-8 bg-white/10 hidden md:block" />
                        <div className="flex gap-2">
                            <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer" title="Settings">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer" title="Notifications">
                                <Zap className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full auto-rows-[minmax(180px,auto)]">

                    {/* Primary Widget: MindCloud (Spans 8 cols, 2 rows) */}
                    <Link href="/mindcloud" className="md:col-span-8 md:row-span-2 group relative p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-zinc-900 duration-500 overflow-hidden isolate">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                                    <BrainCircuit className="w-8 h-8" />
                                </div>
                                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                            </div>

                            <div className="mt-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">MindCloud</h2>
                                <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed">
                                    Your second brain. visual knowledge graphs, spaced repetition, and resource management.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-zinc-500 group-hover:text-blue-300 transition-colors">
                                <span>3,429 NODES</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                <span>12 ACTIVE GRAPHS</span>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <BrainCircuit className="absolute -bottom-12 -right-12 w-96 h-96 text-white/[0.02] -rotate-12 group-hover:scale-110 transition-transform duration-700 ease-out" />
                    </Link>

                    {/* Secondary Widget: Focus Timer (Spans 4 cols, 1 row) */}
                    <div className="md:col-span-4 md:row-span-1">
                        <FocusTimer />
                    </div>

                    {/* Tertiary Widget: Daily Review (Spans 4 cols, 2 rows) - Acts as Sidebar bottom */}
                    <div className="md:col-span-4 md:row-span-2 h-full">
                        <DailyReviewStack />
                    </div>

                    {/* Quaternary Widget: Project Hub (Spans 4 cols, 1 row) */}
                    <Link href="/projects" className="md:col-span-4 md:row-span-1 group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 transition-all hover:bg-zinc-900 duration-300 flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex justify-between items-start relative z-10">
                            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <LayoutGrid className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all" />
                        </div>

                        <div className="mt-4 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Project Hub</h3>
                            <p className="text-zinc-500 text-sm">Goals & Sprints</p>
                        </div>
                    </Link>

                    {/* Quinary Widget: School (Spans 4 cols, 1 row) */}
                    <Link href="/school" className="md:col-span-4 md:row-span-1 group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-zinc-900 duration-300 flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex justify-between items-start relative z-10">
                            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all" />
                        </div>

                        <div className="mt-4 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">School</h3>
                            <p className="text-zinc-500 text-sm">Assignments & Grades</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
