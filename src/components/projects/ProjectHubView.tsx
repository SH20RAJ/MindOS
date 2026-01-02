"use client";

import { Plus, LayoutGrid, Activity, Play, Search, Filter, Cpu, ArrowUpRight, BarChart } from "lucide-react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/mock/data";

export function ProjectHubView() {
    const projects = MOCK_PROJECTS;
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-indigo-500/30">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[10px] font-mono tracking-wider uppercase">
                                System / Hub
                            </span>
                            <div className="h-px flex-1 w-12 bg-white/10" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
                            PROJECT HUB
                        </h1>
                        <p className="text-muted-foreground font-mono text-sm flex items-center gap-2">
                            <span className="text-orange-500">●</span> {projects.length} ACTIVE PROTOCOLS
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-xs text-zinc-500 font-mono">SYNC STATUS</span>
                            <span className="text-sm font-bold text-orange-400 flex items-center gap-2">
                                <Activity className="w-3 h-3 animate-pulse" /> LIVE
                            </span>
                        </div>
                    </div>
                </header>

                {/* Controls & Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search protocols..."
                                className="w-full h-12 bg-zinc-900/50 border border-white/10 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-zinc-600"
                            />
                        </div>
                        <button className="h-12 px-6 flex items-center gap-2 bg-zinc-900/50 border border-white/10 rounded-xl hover:bg-zinc-900 hover:border-white/20 transition-all text-sm font-medium text-zinc-400 hover:text-white">
                            <Filter className="w-4 h-4" />
                            <span>Filter</span>
                        </button>
                    </div>
                    <div className="md:col-span-4 flex justify-end">
                        <button className="w-full md:w-auto h-12 px-6 flex items-center justify-center gap-2 bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-all text-sm font-bold uppercase tracking-wide">
                            <Plus className="w-4 h-4" />
                            <span>Initialize Protocol</span>
                        </button>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => {
                        const completed = project.milestones.filter(m => m.isCompleted).length;
                        const total = project.milestones.length;
                        const percent = Math.round((completed / total) * 100);

                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="group relative bg-zinc-900/30 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-[320px]"
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-8 flex flex-col h-full relative z-10">
                                    {/* Card Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                            <Cpu className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-white/5 px-2 py-1 rounded-full">
                                                {project.id}
                                            </span>
                                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full border ${project.status === 'in_progress'
                                                    ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                                    : 'bg-zinc-800 border-zinc-700 text-zinc-500'
                                                }`}>
                                                {project.status.replace('_', ' ')}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Card Footer: Metrics */}
                                    <div className="mt-6 pt-6 border-t border-white/5">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                                                <BarChart className="w-3 h-3" /> COMPETENCE
                                            </span>
                                            <span className="text-xl font-mono font-bold text-white tracking-tighter">
                                                {percent}%
                                            </span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                                style={{ width: `${percent}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                    {/* New Project Workflow (Visual Placeholder) */}
                    <button className="group relative border border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-zinc-900/30 hover:border-zinc-700 transition-all h-[320px]">
                        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 group-hover:bg-zinc-800 transition-all duration-300">
                            <Plus className="w-6 h-6 text-zinc-500 group-hover:text-white" />
                        </div>
                        <div className="text-center">
                            <span className="block font-mono text-xs uppercase tracking-widest font-bold text-zinc-500 group-hover:text-white transition-colors">
                                Initialize Protocol
                            </span>
                            <span className="text-[10px] text-zinc-600 mt-1 block group-hover:text-zinc-500">
                                Create new learning arc
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
