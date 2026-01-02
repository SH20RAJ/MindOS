"use client";

import { ArrowRight, Check, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Mock Project-Specific Deck
const PROJECT_DECK = [
    {
        id: 1,
        question: "How do you calculate the determinant of a 2x2 matrix?",
        answer: "ad - bc for a matrix [[a,b],[c,d]]",
        tag: "Linear Algebra"
    },
    {
        id: 2,
        question: "What is an Eigenvector?",
        answer: "A non-zero vector that changes at most by a scalar factor when that linear transformation is applied to it.",
        tag: "Vectors"
    },
    {
        id: 3,
        question: "Define 'Linear Independence'.",
        answer: "A set of vectors is linearly independent if no vector in the set can be written as a linear combination of the others.",
        tag: "Basis"
    }
];

export default function ProjectReviewPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [finished, setFinished] = useState(false);
    const pathname = usePathname();
    const projectId = pathname.split('/')[2]; // Extract project ID from URL

    const handleNext = () => {
        setIsRevealed(false);
        if (currentIndex < PROJECT_DECK.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div className="h-[600px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-black text-white mb-2">Review Complete!</h2>
                <p className="text-gray-400 mb-8">You've strengthened 3 neural pathways for this project.</p>

                <div className="flex gap-4">
                    <button onClick={() => { setFinished(false); setCurrentIndex(0); }} className="px-6 py-3 bg-zinc-900 border border-white/10 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-800">
                        <RefreshCw className="w-4 h-4" /> Review Again
                    </button>
                    <Link href={`/projects/${projectId}/tutor`} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 flex items-center gap-2">
                        Start AI Session <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    const currentCard = PROJECT_DECK[currentIndex];

    return (
        <div className="max-w-2xl mx-auto py-12">
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-mono uppercase tracking-wider">
                            Card {currentIndex + 1} of {PROJECT_DECK.length}
                        </div>
                        <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{currentCard.tag}</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-white mb-8">
                        {currentCard.question}
                    </h1>
                </div>

                <div className="flex-1 flex items-center justify-center py-8">
                    <AnimatePresence mode="wait">
                        {!isRevealed ? (
                            <motion.button
                                key="reveal"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsRevealed(true)}
                                className="text-zinc-500 italic hover:text-white transition-colors animate-pulse text-lg"
                            >
                                Tap or Press Space to reveal
                            </motion.button>
                        ) : (
                            <motion.div
                                key="answer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xl text-indigo-200 leading-relaxed font-medium text-center"
                            >
                                {currentCard.answer}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <button
                        onClick={handleNext}
                        className="py-4 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all font-bold"
                    >
                        Hard
                    </button>
                    <button
                        onClick={handleNext}
                        className="py-4 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-white transition-all font-bold"
                    >
                        Easy
                    </button>
                </div>
            </div>
        </div>
    );
}
