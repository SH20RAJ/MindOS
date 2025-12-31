"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-900 to-purple-900 rounded-full blur-[120px] opacity-30 animate-pulse" />
            </div>

            <div className="relative z-10 text-center max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 mix-blend-difference select-none">
                        THE<br />MISSION
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-mono tracking-wide">
                        To build the operating system for your brain.
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
