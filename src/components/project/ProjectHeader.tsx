"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, Flame } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProjectHeaderProps {
    title: string;
    description: string;
    mastery: number;
    streak: number;
}

export function ProjectHeader({ title, description, mastery, streak }: ProjectHeaderProps) {
    return (
        <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-xl z-20">
            <div className="max-w-[1600px] mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Title & context */}
                    <div className="space-y-4 flex-1">
                        <Link href="/mindcloud" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                                    {title}
                                </h1>
                                <div className="px-2 py-1 bg-white/10 rounded text-xs font-mono text-emerald-400 border border-emerald-500/20">
                                    ACTIVE
                                </div>
                            </div>
                            <p className="text-muted-foreground font-mono max-w-2xl">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Stats & Mastery */}
                    <div className="flex items-center gap-8">
                        {/* Streak */}
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
                                <Flame className="w-5 h-5 fill-orange-500" /> {streak} Days
                            </div>
                            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                                Cognitive Streak
                            </span>
                        </div>

                        {/* Mastery Ring */}
                        <div className="relative w-24 h-24 flex items-center justify-center">
                            {/* Background Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
                                <motion.circle
                                    cx="48" cy="48" r="40"
                                    stroke="#10b981"
                                    strokeWidth="6"
                                    fill="transparent"
                                    strokeLinecap="round"
                                    strokeDasharray="251.2"
                                    initial={{ strokeDashoffset: 251.2 }}
                                    animate={{ strokeDashoffset: 251.2 - (251.2 * mastery) / 100 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </svg>
                            <div className="text-center">
                                <span className="block text-2xl font-black text-white">{mastery}%</span>
                                <span className="block text-[10px] text-muted-foreground font-mono uppercase">Mastery</span>
                            </div>

                            {/* Glow */}
                            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.2)] pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
