"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal, Brain, Zap, Clock, ArrowRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import { CreativeBadges } from "@/components/ui/creative-badges";

const SLIDE_DURATION = 5000; // 5 seconds per slide

const pitchBadges = [
    { id: "p1", label: "Recall", color: "from-cyan-500/80 to-blue-500/80", size: "lg", rotation: -6, zIndex: 1, offsetX: -80, offsetY: -40 },
    { id: "p2", label: "Retain", color: "from-green-500/80 to-emerald-500/80", size: "lg", rotation: 4, zIndex: 2, offsetX: 80, offsetY: -40 },
    { id: "p3", label: "Learn", color: "from-pink-500/80 to-purple-500/80", size: "lg", rotation: 0, zIndex: 3, offsetX: 0, offsetY: 60 },
] as const;

const slides = [
    {
        id: "intro",
        content: (
            <div className="text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20"
                >
                    <Brain className="w-12 h-12 text-blue-400" />
                </motion.div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mix-blend-difference">
                    IMAGINE<br />A WORLD
                </h1>
                <p className="text-2xl text-muted-foreground font-mono">
                    Where you never forget what you learn.
                </p>
            </div>
        )
    },
    {
        id: "pain",
        content: (
            <div className="max-w-4xl space-y-12">
                <h2 className="text-4xl md:text-7xl font-bold text-red-500 tracking-tight">
                    THE REALITY
                </h2>
                <div className="space-y-6">
                    <p className="text-3xl md:text-5xl font-light text-white/80">
                        You spend <span className="text-white font-bold">1,000+ hours</span> studying.
                    </p>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-3xl md:text-5xl font-light text-white/40 blur-[1px]"
                    >
                        But 80% is lost in 24 hours.
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: "solution",
        content: (
            <div className="text-center space-y-8">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-4 border-dashed border-white/20 rounded-full mx-auto mb-8"
                />
                <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter">
                    MIND<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">OS</span>
                </h1>
                <p className="text-xl md:text-3xl font-mono text-white/60">
                    The Operating System for your Brain.
                </p>
            </div>
        )
    },
    {
        id: "science",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <Clock className="w-12 h-12 text-blue-500" />
                        <h3 className="text-4xl font-bold">Spaced Repetition</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <Zap className="w-12 h-12 text-yellow-500" />
                        <h3 className="text-4xl font-bold">Active Recall</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <Terminal className="w-12 h-12 text-purple-500" />
                        <h3 className="text-4xl font-bold">Dual Coding</h3>
                    </div>
                </div>
                <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
                    <p className="text-2xl font-mono leading-relaxed">
                        "We don't just store notes. We convert them into neural pathways using 15+ proven cognitive algorithms."
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "badges",
        content: (
            <div className="w-full flex-col flex items-center">
                <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">POWERED BY SCIENCE</h2>
                {/* @ts-ignore - types mismatch on exact literal types vs string, ignorable for demo */}
                <CreativeBadges badges={pitchBadges} />
            </div>
        )
    },
    {
        id: "cta",
        content: (
            <div className="text-center space-y-12">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
                    JOIN THE<br />REVOLUTION
                </h2>
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-xl font-bold hover:scale-105 transition-transform"
                >
                    Start Learning Free <ArrowRight className="w-6 h-6" />
                </Link>
                <div className="flex justify-center gap-8 text-muted-foreground font-mono text-sm">
                    <span>OPEN SOURCE</span>
                    <span>•</span>
                    <span>AI POWERED</span>
                    <span>•</span>
                    <span>FREE FOREVER</span>
                </div>
            </div>
        )
    }
];

export function PitchDeck() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, [isPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setIsPlaying(false);
    };

    const togglePlay = () => setIsPlaying(!isPlaying);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            } else if (e.key === " ") {
                e.preventDefault();
                togglePlay();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isPlaying]);

    // Scroll Navigation
    useEffect(() => {
        let lastScrollTime = 0;
        const cooldown = 1000;

        const handleWheel = (e: WheelEvent) => {
            const now = Date.now();
            if (now - lastScrollTime < cooldown) return;

            if (e.deltaY > 50) {
                nextSlide();
                lastScrollTime = now;
            } else if (e.deltaY < -50) {
                prevSlide();
                lastScrollTime = now;
            }
        };

        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center px-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full flex items-center justify-center min-h-[60vh]"
                    >
                        {slides[currentIndex].content}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Bar & Controls */}
            <div className="absolute bottom-12 left-0 right-0 px-12">
                <div className="max-w-xl mx-auto flex items-center gap-6">
                    <button
                        onClick={togglePlay}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                        title={isPlaying ? "Pause (Space)" : "Play (Space)"}
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5 text-white/50 group-hover:text-white" />
                        ) : (
                            <Play className="w-5 h-5 text-white/50 group-hover:text-white" />
                        )}
                    </button>

                    <span className="font-mono text-xs text-muted-foreground">0{currentIndex + 1}</span>

                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            key={currentIndex}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={isPlaying ? { duration: SLIDE_DURATION / 1000, ease: "linear" } : { duration: 0 }}
                            className="h-full bg-white"
                            style={{ width: isPlaying ? "100%" : "0%" }} // Force reset if paused
                        />
                    </div>

                    <span className="font-mono text-xs text-muted-foreground">0{slides.length}</span>

                    <button onClick={nextSlide} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Terminal Decoration */}
            <div className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>MINDOS_TERMINAL_V1.0</span>
            </div>

            <div className="absolute top-8 right-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-green-500">ONLINE</span>
            </div>
        </div>
    );
}
