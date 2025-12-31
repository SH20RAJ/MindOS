"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Circle, Clock, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const roadmapItems = [
    {
        phase: "Phase 1: Foundation",
        subtitle: "Core Cognitive Engine",
        status: "complete",
        date: "Q4 2024",
        items: [
            "15+ Scientific Tools Implementation",
            "MindRepeater (Spaced Repetition Algorithms)",
            "MindQuiz (Active Recall Engine)",
            "Personalized Project Onboarding"
        ]
    },
    {
        phase: "Phase 2: Expansion",
        subtitle: "Ecosystem Growth",
        status: "in-progress",
        date: "Q1 2025",
        items: [
            "MindCloud (Second Brain Integration)",
            "Global Resource Finder & Scraping",
            "Mobile App (React Native Beta)",
            "Offline First Architecture"
        ]
    },
    {
        phase: "Phase 3: Intelligence",
        subtitle: "Neural Synthesis",
        status: "upcoming",
        date: "Q2 2025",
        items: [
            "AI Tutor (Topic Locked Context)",
            "Real-time Confusion Detection",
            "Collaborative Study Rooms",
            "Institutional Dashboard"
        ]
    },
    {
        phase: "Phase 4: Transcendence",
        subtitle: "Direct Neural Interface",
        status: "future",
        date: "2026+",
        items: [
            "BCI Integration Research",
            "Thought-to-Note Prototypes",
            "Collective Intelligence Grid"
        ]
    }
];

export function Roadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-32 px-4 bg-black relative overflow-hidden" ref={containerRef}>
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2)_0%,transparent_50%)]" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        LIVE DEVELOPMENT
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                        Living Roadmap
                    </h2>
                    <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
                        We are building the operating system for the future of human intelligence.
                        <br />
                        <span className="text-sm opacity-50 block mt-2">See what we're deploying next.</span>
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Spine */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    {/* Active Spine (Animated) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[20px] md:left-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    />

                    <div className="space-y-24">
                        {roadmapItems.map((phase, index) => {
                            const isEven = index % 2 === 0;
                            const isComplete = phase.status === "complete";
                            const isInProgress = phase.status === "in-progress";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={cn(
                                        "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0",
                                        !isEven && "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-black z-20 md:-translate-x-1/2 translate-x-[-7px] md:translate-x-[-8px] flex items-center justify-center bg-zinc-800">
                                        {isComplete && <div className="w-full h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />}
                                        {isInProgress && <div className="w-full h-full bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}
                                        {!isComplete && !isInProgress && <div className="w-2 h-2 bg-zinc-600 rounded-full" />}
                                    </div>

                                    {/* Content Card */}
                                    <div className={cn(
                                        "ml-16 md:ml-0 md:w-1/2 px-4 md:px-12",
                                        isEven ? "md:text-right" : "md:text-left"
                                    )}>
                                        <div className="inline-block">
                                            <span className={cn(
                                                "text-xs font-mono mb-2 block",
                                                isComplete ? "text-emerald-500" : isInProgress ? "text-blue-500" : "text-zinc-500"
                                            )}>
                                                {phase.date} • {phase.status.toUpperCase()}
                                            </span>
                                            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{phase.phase}</h3>
                                            <p className="text-lg text-white/60 mb-6">{phase.subtitle}</p>

                                            <ul className={cn(
                                                "space-y-3",
                                                isEven ? "md:items-end" : "md:items-start",
                                                "flex flex-col items-start"
                                            )}>
                                                {phase.items.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-400 group hover:text-white transition-colors">
                                                        {isEven ? (
                                                            <>
                                                                <span className="hidden md:block">{item}</span>
                                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors" />
                                                                <span className="md:hidden">{item}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors" />
                                                                <span>{item}</span>
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="md:w-1/2" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
