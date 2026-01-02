"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle, Target, Workflow, Play } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/learning";
import { cn } from "@/lib/utils";

interface EnhancedProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: EnhancedProjectCardProps) {
    const completedMilestones = project.milestones.filter(m => m.isCompleted).length;
    const progress = Math.round((completedMilestones / project.milestones.length) * 100) || 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative w-full h-full"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative h-full bg-zinc-950 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-white/20 transition-colors">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <Workflow className="w-3 h-3" />
                            <span>{project.status.replace('_', ' ')}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                            {project.title}
                        </h3>
                    </div>
                </div>

                {/* Milestones Preview */}
                <div className="space-y-3 mb-8 flex-1">
                    {project.milestones.slice(0, 3).map((milestone) => (
                        <div key={milestone.id} className="flex items-center gap-3 text-sm text-zinc-400">
                            {milestone.isCompleted ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            ) : (
                                <Circle className="w-4 h-4 text-zinc-700 flex-shrink-0" />
                            )}
                            <span className={cn(milestone.isCompleted && "line-through opacity-50")}>
                                {milestone.title}
                            </span>
                        </div>
                    ))}
                    {project.milestones.length > 3 && (
                        <div className="px-7 text-xs text-muted-foreground italic">
                            + {project.milestones.length - 3} more milestones
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground">
                        <span>PROGRESS</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-blue-500"
                        />
                    </div>
                </div>

                {/* Action */}
                <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/btn"
                >
                    <span className="text-sm font-bold text-white">Open Project</span>
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
