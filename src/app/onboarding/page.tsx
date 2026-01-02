"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Brain, Sparkles, Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types
import { GoalType } from "@/types/learning";
// Store (Placeholder for now, just local state for UI demo)

export default function OnboardingPage() {
    const [intent, setIntent] = useState("");
    const [selectedType, setSelectedType] = useState<GoalType | null>(null);

    const goalTypes: { id: GoalType; label: string; icon: any; desc: string }[] = [
        { id: 'skill', label: 'Master a Skill', icon: Target, desc: 'Deep dive into a specific capability.' },
        { id: 'project', label: 'Build a Project', icon: Rocket, desc: 'Learn by building something real.' },
        { id: 'exam', label: 'Ace an Exam', icon: Brain, desc: 'Optimized for retention and recall.' },
        { id: 'curiosity', label: 'Just Curious', icon: Sparkles, desc: 'Explore a topic without pressure.' },
    ];

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans selection:bg-purple-500/30">
            <div className="max-w-2xl w-full space-y-12">
                {/* Header */}
                <header className="space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                            What is your intent?
                        </h1>
                        <p className="text-xl text-muted-foreground font-mono">
                            Define your vector. The OS will align the curriculum.
                        </p>
                    </motion.div>
                </header>

                {/* Input 1: The "What" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="space-y-4"
                >
                    <label className="text-xs font-mono text-purple-400 uppercase tracking-widest pl-1">
                        I want to learn...
                    </label>
                    <input
                        type="text"
                        value={intent}
                        onChange={(e) => setIntent(e.target.value)}
                        placeholder="e.g. Quantum Mechanics, Next.js 15, Spanish..."
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-6 text-2xl md:text-3xl font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                </motion.div>

                {/* Input 2: The "Why" (Goal Type) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="space-y-4"
                >
                    <label className="text-xs font-mono text-purple-400 uppercase tracking-widest pl-1">
                        My objective is to...
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {goalTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={`p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${selectedType === type.id
                                    ? "bg-purple-500/10 border-purple-500 text-purple-100"
                                    : "bg-zinc-900/30 border-white/5 text-muted-foreground hover:bg-zinc-800"
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <type.icon className="w-5 h-5" />
                                    <span className="font-bold">{type.label}</span>
                                </div>
                                <p className="text-xs opacity-70 leading-relaxed">
                                    {type.desc}
                                </p>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: intent && selectedType ? 1 : 0.5 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-end pt-8"
                >
                    <Link
                        href={intent && selectedType ? "/learn/baseline" : "#"}
                        className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all ${intent && selectedType
                            ? "bg-white text-black hover:scale-105"
                            : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                            }`}
                    >
                        Initialize Baseline Scan
                        <ArrowRight className={`w-5 h-5 transition-transform ${intent && selectedType ? "group-hover:translate-x-1" : ""}`} />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
