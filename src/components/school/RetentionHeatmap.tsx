"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock Data for the Heatmap
// Topics vs Students
const topics = [
    "Cellular Respiration",
    "Photosynthesis",
    "DNA Replication",
    "Protein Synthesis",
    "Mendelian Genetics",
    "Evolutionary Theory",
    "Ecology Basics"
];

const students = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    name: `Student ${i + 1}`,
    scores: topics.map(() => Math.floor(Math.random() * 100))
}));

export function RetentionHeatmap() {
    const [hoveredCell, setHoveredCell] = useState<{ s: number, t: number } | null>(null);

    const getHeatColor = (score: number) => {
        if (score >= 90) return "bg-emerald-500"; // Mastery
        if (score >= 75) return "bg-emerald-500/60"; // Good
        if (score >= 60) return "bg-yellow-500/60"; // Warning
        if (score >= 40) return "bg-orange-500/60"; // Danger
        return "bg-red-500/80"; // Critical
    };

    return (
        <div className="w-full overflow-x-auto bg-zinc-900/50 border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Live Retention Heatmap • Class 10-A
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Real-time visualization of cognitive decay per topic.
                    </p>
                </div>
                <div className="flex gap-4 text-xs font-mono text-muted-foreground">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded" /> Mastered</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500/60 rounded" /> Fading</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500/80 rounded" /> Critical</div>
                </div>
            </div>

            <div className="min-w-[800px]">
                {/* Header Row (Topics) */}
                <div className="flex mb-2">
                    <div className="w-32 flex-shrink-0" /> {/* Spacer for names */}
                    {topics.map((topic, i) => (
                        <div key={i} className="flex-1 px-1 text-center">
                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tight writing-mode-vertical rotate-180 block h-24 truncate">
                                {topic}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Data Rows */}
                <div className="space-y-1">
                    {students.map((student, sIndex) => (
                        <div key={student.id} className="flex items-center hover:bg-white/5 transition-colors rounded p-1">
                            <div className="w-32 flex-shrink-0 text-xs font-medium text-zinc-400">
                                {student.name}
                            </div>
                            {student.scores.map((score, tIndex) => (
                                <motion.div
                                    key={tIndex}
                                    className="flex-1 px-1 h-8 relative group cursor-pointer"
                                    onHoverStart={() => setHoveredCell({ s: sIndex, t: tIndex })}
                                    onHoverEnd={() => setHoveredCell(null)}
                                >
                                    <div className={cn(
                                        "w-full h-full rounded shadow-sm transition-all duration-300",
                                        getHeatColor(score),
                                        hoveredCell?.s === sIndex && hoveredCell?.t === tIndex ? "scale-110 ring-2 ring-white z-10" : "opacity-80 hover:opacity-100"
                                    )} />

                                    {/* Tooltip */}
                                    {hoveredCell?.s === sIndex && hoveredCell?.t === tIndex && (
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black border border-white/20 p-2 rounded text-xs whitespace-nowrap z-20 shadow-xl">
                                            <div className="font-bold text-white">{score}% Retention</div>
                                            <div className="text-zinc-500">Last reviewed: 2d ago</div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
