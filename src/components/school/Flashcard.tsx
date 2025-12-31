"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RotateCcw, Check, X } from "lucide-react";

interface FlashcardProps {
    question: string;
    answer: string;
    category: string;
}

export function Flashcard({ question, answer, category }: FlashcardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="w-96 perspective-1000">
            <div
                className="relative w-full h-60 cursor-pointer transition-transform duration-500 transform-style-3d"
                style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white text-black p-8 rounded-2xl flex flex-col justify-between shadow-2xl">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono uppercase tracking-widest border border-black/10 px-2 py-1 rounded-full">
                            {category}
                        </span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-black/20" />
                            <div className="w-2 h-2 rounded-full bg-black/20" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-center leading-tight">
                        {question}
                    </h3>

                    <div className="text-center">
                        <p className="text-xs font-mono text-black/50 uppercase tracking-widest animate-pulse">
                            Click to Reveal
                        </p>
                    </div>

                    {/* Ticket Stub Perforation */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-r-full" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-l-full" />
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden bg-accent text-white p-8 rounded-2xl flex flex-col justify-between shadow-2xl"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">
                            Answer
                        </span>
                        <button onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}>
                            <RotateCcw className="w-4 h-4 text-white/70" />
                        </button>
                    </div>

                    <p className="text-xl font-medium text-center">
                        {answer}
                    </p>

                    <div className="flex justify-center gap-4 mt-4" onClick={(e) => e.stopPropagation()}>
                        <button className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
                            <Check className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
