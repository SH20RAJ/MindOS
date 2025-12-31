"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CinematicHero() {
    return (
        <section className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-12 max-w-5xl px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 className="text-[12vw] md:text-[150px] font-black tracking-tighter text-white leading-[0.8] mix-blend-difference select-none">
                        MINDOS
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col items-center gap-6"
                >
                    <p className="text-xl md:text-2xl text-muted-foreground font-mono tracking-[0.2em] uppercase">
                        The Operating System for your Brain
                    </p>

                    <Link
                        href="/about"
                        className="text-sm text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white/60 pb-1 mt-4 flex items-center gap-2 group"
                    >
                        Our Mission <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll to Launch</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
                </div>
            </motion.div>
        </section>
    );
}
