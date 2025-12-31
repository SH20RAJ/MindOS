"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
    {
        question: "What is the primary function of the hippocampus?",
        options: ["Motor Control", "Memory Consolidation", "Visual Processing", "Regulation of Heart Rate"],
        correct: 1
    },
    {
        question: "Which neurotransmitter is associated with reward?",
        options: ["Serotonin", "Dopamine", "Cortisol", "Adrenaline"],
        correct: 1
    }
];

export function QuizGame() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (index: number) => {
        if (selected !== null) return;
        setSelected(index);

        if (index === questions[current].correct) {
            setScore(s => s + 100);
        }

        setTimeout(() => {
            if (current < questions.length - 1) {
                setCurrent(c => c + 1);
                setSelected(null);
            } else {
                setIsFinished(true);
            }
        }, 1000);
    };

    return (
        <div className="bg-black border border-white/20 p-6 rounded-xl font-mono relative overflow-hidden max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
                <span className="text-xs uppercase text-muted-foreground animate-pulse">{">>>"} QUIZ_TERMINAL_V1</span>
                <span className="text-accent font-bold">SCORE: {score.toString().padStart(6, '0')}</span>
            </div>

            {!isFinished ? (
                <>
                    <div className="h-1 w-full bg-white/10 mb-6 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                        />
                    </div>

                    <h3 className="text-xl font-bold mb-6 min-h-[60px]">
                        {questions[current].question}
                    </h3>

                    <div className="space-y-3">
                        {questions[current].options.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(i)}
                                disabled={selected !== null}
                                className={cn(
                                    "w-full text-left p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all flex items-center justify-between group",
                                    selected === i && i === questions[current].correct && "bg-green-500/20 border-green-500 text-green-500",
                                    selected === i && i !== questions[current].correct && "bg-red-500/20 border-red-500 text-red-500",
                                    selected !== null && i === questions[current].correct && "border-green-500 text-green-500" // Show correct if wrong
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-muted-foreground group-hover:text-white transition-colors">[{String.fromCharCode(65 + i)}]</span>
                                    {opt}
                                </span>
                                {selected === i && <ArrowRight className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center py-8">
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-black uppercase mb-2">Mission Complete</h2>
                    <p className="text-muted-foreground mb-6">Final Score: {score}</p>
                    <button
                        onClick={() => { setIsFinished(false); setCurrent(0); setScore(0); setSelected(null); }}
                        className="px-6 py-2 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Replay
                    </button>
                </div>
            )}

            {/* CRT Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%] opacity-20" />
        </div>
    );
}
