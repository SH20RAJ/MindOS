"use client";

import { ArrowLeft, Check, RefreshCw, ThumbsUp, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Flashcard Deck
const DECK = [
    {
        id: 1,
        question: "What is the primary difference between Supervised and Unsupervised Learning?",
        answer: "Supervised learning uses labeled data (input-output pairs), while Unsupervised learning finds patterns in unlabeled data.",
        tag: "ML Basics"
    },
    {
        id: 2,
        question: "Explain the concept of 'Spaced Repetition'.",
        answer: "A learning technique where reviews are spaced out at increasing intervals to exploit the psychology of the spacing effect.",
        tag: "Cognitive Science"
    },
    {
        id: 3,
        question: "What is a 'Gradient Descent'?",
        answer: "An optimization algorithm used to minimize some function by iteratively moving in the direction of steepest descent.",
        tag: "Calculus"
    }
];

export default function ReviewSessionPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [finished, setFinished] = useState(false);

    const handleNext = () => {
        setIsRevealed(false);
        if (currentIndex < DECK.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div className="min-h-screen bg-black text-white p-6 font-sans flex flex-col items-center justify-center">
                <div className="max-w-md w-full text-center space-y-8">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h1 className="text-3xl font-black">Session Complete!</h1>
                    <p className="text-gray-400">You've reviewed {DECK.length} cards today.</p>

                    <div className="flex gap-4 justify-center">
                        <Link href="/dashboard" className="px-6 py-3 bg-zinc-900 border border-white/10 rounded-xl font-bold hover:bg-zinc-800 transition-colors">
                            Dashboard
                        </Link>
                        <button onClick={() => { setFinished(false); setCurrentIndex(0); }} className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" /> Review Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentCard = DECK[currentIndex];

    return (
        <div className="min-h-screen bg-black text-white p-6 font-sans flex flex-col items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                <Link href="/dashboard" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Command Center
                </Link>

                <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-mono uppercase tracking-wider">
                                Card {currentIndex + 1} of {DECK.length}
                            </div>
                            <span className="text-zinc-500 text-xs font-mono uppercase">{currentCard.tag}</span>
                        </div>

                        <h1 className="text-2xl font-bold leading-tight min-h-[100px]">
                            {currentCard.question}
                        </h1>
                    </div>

                    <div className="flex-1 flex items-center justify-center py-8">
                        {!isRevealed ? (
                            <button
                                onClick={() => setIsRevealed(true)}
                                className="text-zinc-500 italic hover:text-white transition-colors animate-pulse"
                            >
                                Tap to reveal answer
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-lg text-indigo-200 leading-relaxed"
                            >
                                {currentCard.answer}
                            </motion.div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleNext}
                            className="py-4 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all font-bold"
                        >
                            Forgot
                        </button>
                        <button
                            onClick={handleNext}
                            className="py-4 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-white transition-all font-bold"
                        >
                            Recalled
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
