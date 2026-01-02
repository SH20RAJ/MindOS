"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock Assessment Questions
const QUESTIONS = [
    {
        id: 1,
        text: "How familiar are you with the core concepts?",
        type: "slider",
    },
    {
        id: 2,
        text: "Have you built anything with this technology before?",
        type: "boolean",
    },
    {
        id: 3,
        text: "What is your biggest blocker specifically?",
        type: "text",
    }
];

export default function BaselinePage() {
    const [step, setStep] = useState(0);
    const [confidence, setConfidence] = useState(50);

    const isLastStep = step === QUESTIONS.length;

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

            <div className="max-w-3xl w-full relative z-10">
                {/* Progress */}
                <div className="mb-12 flex items-center justify-between text-xs font-mono text-blue-400 uppercase tracking-widest">
                    <span>Baseline Assessment</span>
                    <span>Step {Math.min(step + 1, QUESTIONS.length)} / {QUESTIONS.length}</span>
                </div>

                {!isLastStep ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            {QUESTIONS[step].text}
                        </h1>

                        {/* Dynamic Input based on type */}
                        <div className="min-h-[200px] flex flex-col justify-center">
                            {QUESTIONS[step].type === 'slider' && (
                                <div className="space-y-8">
                                    <div className="flex justify-between text-sm text-muted-foreground font-mono uppercase">
                                        <span>Novice</span>
                                        <span>Expert</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={confidence}
                                        onChange={(e) => setConfidence(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                    <div className="text-center text-6xl font-black text-blue-500">
                                        {confidence}%
                                    </div>
                                </div>
                            )}

                            {QUESTIONS[step].type === 'boolean' && (
                                <div className="grid grid-cols-2 gap-6">
                                    <button
                                        onClick={() => setStep(step + 1)}
                                        className="h-32 rounded-2xl bg-zinc-900 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500 transition-all flex items-center justify-center text-xl font-bold"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setStep(step + 1)}
                                        className="h-32 rounded-2xl bg-zinc-900 border border-white/10 hover:bg-red-500/20 hover:border-red-500 transition-all flex items-center justify-center text-xl font-bold"
                                    >
                                        No
                                    </button>
                                </div>
                            )}

                            {QUESTIONS[step].type === 'text' && (
                                <textarea
                                    className="w-full h-40 bg-zinc-900/50 border border-white/10 rounded-xl p-6 text-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                                    placeholder="Type your answer here..."
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            setStep(step + 1);
                                        }
                                    }}
                                />
                            )}
                        </div>

                        {/* Navigation */}
                        {QUESTIONS[step].type !== 'boolean' && (
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setStep(step + 1)}
                                    className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
                                >
                                    Continue
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-8"
                    >
                        <div className="w-24 h-24 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-12 h-12 text-blue-500" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Baseline Established</h1>
                            <p className="text-muted-foreground text-xl">
                                We've generated your initial cognitive map.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Link
                                href="/learn/map"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
                            >
                                View Concept Graph
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
