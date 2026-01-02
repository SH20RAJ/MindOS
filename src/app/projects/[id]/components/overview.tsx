"use client";

import { Project } from "@/types/learning";
import { Activity, Clock, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectOverview({ project }: { project: Project }) {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
                    <div className="flex items-center gap-3 text-zinc-400 mb-2">
                        <Activity className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Velocity</span>
                    </div>
                    <div className="text-3xl font-black text-white">4.2 <span className="text-sm font-normal text-zinc-600">tasks/day</span></div>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
                    <div className="flex items-center gap-3 text-zinc-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Total Time</span>
                    </div>
                    <div className="text-3xl font-black text-white">12h <span className="text-sm font-normal text-zinc-600">30m</span></div>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
                    <div className="flex items-center gap-3 text-zinc-400 mb-2">
                        <Target className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Milestones</span>
                    </div>
                    <div className="text-3xl font-black text-white">
                        {project.milestones.filter(m => m.isCompleted).length}
                        <span className="text-zinc-600"> / {project.milestones.length}</span>
                    </div>
                </div>
            </motion.div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-8 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Current Directive</h3>
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-emerald-400">Processing: Linear Algebra Basics</span>
                    </div>
                </div>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                    Start Session <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
