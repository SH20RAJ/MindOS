"use client";

import { Plus, LayoutGrid, Activity, Search, Filter, Cpu, ArrowUpRight, BarChart, ChevronRight, Zap, Target, MoreVertical, Flame } from "lucide-react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/mock/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Types for better structure
interface Project {
    id: string;
    title: string;
    description: string;
    status: string;
    milestones: { isCompleted: boolean }[];
}

export function ProjectHubView() {
    const projects = MOCK_PROJECTS;
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    // Filter Logic (Could be expanded)
    const activeProjects = projects.length;
    
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">

                {/* Header Section */}
                <motion.header 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col xl:flex-row xl:items-end justify-between gap-8"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400 text-[11px] font-mono tracking-wider uppercase backdrop-blur-md">
                                System // Hub v2.4
                            </span>
                            <div className="h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
                        </div>
                        
                        <div className="relative">
                            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
                                PROJECT HUB
                            </h1>
                            <div className="absolute -top-6 -right-6 hidden md:block">
                                <Zap className="w-6 h-6 text-indigo-500 opacity-50 rotate-12" />
                            </div>
                        </div>

                        <p className="text-zinc-400 font-mono text-sm flex items-center gap-3">
                            <span className="flex items-center gap-1.5 text-emerald-400">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                ONLINE
                            </span>
                            <span className="text-zinc-700">|</span> 
                            <span>{currentDate}</span>
                            <span className="text-zinc-700">|</span> 
                            <span className="text-white font-bold">{activeProjects} Active Protocols</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[300px]">
                        {/* Quick Stats Mini-Dashboard */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-3 backdrop-blur-sm">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Velocity</span>
                                <div className="text-2xl font-mono font-bold text-white mt-1">12.4<span className="text-xs text-zinc-600 ml-1">pts</span></div>
                            </div>
                            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-3 backdrop-blur-sm">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Focus</span>
                                <div className="text-2xl font-mono font-bold text-indigo-400 mt-1">4.2<span className="text-xs text-indigo-900 ml-1">h</span></div>
                            </div>
                        </div>
                    </div>
                </motion.header>

                {/* Controls & Metrics */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="sticky top-4 z-50 bg-[#050505]/80 backdrop-blur-xl p-2 rounded-2xl border border-white/5 shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Search protocols..."
                                className="w-full h-11 bg-zinc-900/50 border border-white/5 rounded-xl pl-11 pr-4 text-sm focus:outline-none focus:bg-zinc-900 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
                            />
                        </div>
                        
                        <div className="flex gap-2">
                            <button className="h-11 px-5 flex items-center gap-2 bg-zinc-900/50 border border-white/5 rounded-xl hover:bg-zinc-900 hover:border-white/10 transition-all text-sm font-medium text-zinc-400 hover:text-white">
                                <Filter className="w-4 h-4" />
                                <span className="hidden sm:inline">Filter</span>
                            </button>
                            
                            <div className="h-8 w-px bg-white/10 my-auto mx-1" />

                            <button className="h-11 px-6 flex items-center gap-2 bg-white text-black rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all text-sm font-bold tracking-tight">
                                <Plus className="w-4 h-4" />
                                <span className="hidden sm:inline">New Protocol</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Project Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
                >
                    {projects.map((project, idx) => {
                        const completed = project.milestones.filter(m => m.isCompleted).length;
                        const total = project.milestones.length;
                        const percent = Math.round((completed / total) * 100);
                        const isHovered = hoveredProject === project.id;

                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="group relative block h-[340px] w-full"
                                >
                                    <div className={cn(
                                        "absolute inset-0 rounded-[28px] border bg-zinc-900/40 backdrop-blur-md transition-all duration-500 ease-out overflow-hidden",
                                        isHovered ? "border-indigo-500/30 shadow-[0_0_40px_rgba(79,70,229,0.15)] bg-zinc-900/80 scale-[1.02]" : "border-white/5"
                                    )}>
                                        {/* Background Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Content Container */}
                                        <div className="absolute inset-0 p-8 flex flex-col">
                                            
                                            {/* Top Row */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={cn(
                                                    "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300",
                                                    isHovered ? "bg-indigo-500 text-white border-indigo-400 rotate-3 shadow-lg" : "bg-zinc-800/50 text-zinc-500 border-white/5"
                                                )}>
                                                    <Cpu className="w-6 h-6" />
                                                </div>
                                                
                                                <div className="flex items-center gap-2">
                                                    <span className={cn(
                                                        "text-[10px] items-center gap-1.5 px-2 py-0.5 rounded-full border hidden sm:flex transition-colors",
                                                        project.status === 'in_progress' 
                                                            ? "bg-blue-500/10 border-blue-500/20 text-blue-400" 
                                                            : "bg-zinc-800 border-white/5 text-zinc-500"
                                                    )}>
                                                        {project.status === 'in_progress' && <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />}
                                                        {project.status.toUpperCase().replace('_', ' ')}
                                                    </span>
                                                    <button className="w-8 h-8 rounded-full bg-transparent hover:bg-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Main Info */}
                                            <div className="flex-1 relative z-10">
                                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors leading-tight">
                                                    {project.title}
                                                </h2>
                                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-400 transition-colors">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Hover Action (View Details) */}
                                            <div className={cn(
                                                "absolute bottom-24 left-8 right-8 transition-all duration-300 transform",
                                                isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
                                            )}>
                                                <div className="text-xs font-bold text-indigo-400 flex items-center gap-2 uppercase tracking-wide">
                                                    View Protocol <ArrowUpRight className="w-3 h-3" />
                                                </div>
                                            </div>

                                            {/* Footer Metrics */}
                                            <div className="pt-6 border-t border-white/5 group-hover:border-indigo-500/10 transition-colors">
                                                <div className="flex items-center justify-between mb-3 text-xs">
                                                    <div className="flex items-center gap-2 text-zinc-400">
                                                        <Target className="w-3 h-3" />
                                                        <span>{completed}/{total} Milestones</span>
                                                    </div>
                                                    <span className="font-mono font-bold text-white">{percent}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${percent}%` }}
                                                        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                                        className="h-full bg-gradient-to-r from-indigo-500 to-blue-400"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* New Project Workflow Trigger */}
                    <motion.button 
                        variants={itemVariants}
                        className="group relative h-[340px] rounded-[28px] border border-dashed border-zinc-800 hover:border-zinc-600 bg-transparent hover:bg-zinc-900/20 transition-all duration-300 flex flex-col items-center justify-center gap-5"
                    >
                        <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
                            <Plus className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-center">
                            <span className="block font-mono text-sm uppercase tracking-widest font-bold text-zinc-500 group-hover:text-white transition-colors">
                                Initialize Protocol
                            </span>
                            <span className="text-xs text-zinc-600 mt-2 block group-hover:text-zinc-500">
                                Start a new learning arc
                            </span>
                        </div>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

