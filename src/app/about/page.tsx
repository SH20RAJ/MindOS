"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Sparkles, Zap, Code } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | MindOS",
    description: "The Science of Learning. Discover how we use cognitive science to help you learn 3x faster.",
};

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
            <Hero />
            <Timeline />
            <Philosophy />
        </main>
    );
}

function Hero() {
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
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 mix-blend-difference">
                        THE<br />MISSION
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-mono tracking-wide">
                        To build the operating system for your brain.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-4 relative">
            <div className="max-w-4xl mx-auto space-y-32">
                {[
                    {
                        year: "THE PROBLEM",
                        title: "We Forget 90% of What We Learn",
                        desc: "The human brain isn't designed for information storage in the digital age. It's designed for processing.",
                        icon: Brain,
                        color: "text-red-500"
                    },
                    {
                        year: "THE SOLUTION",
                        title: "Externalize Cognition",
                        desc: "By offloading storage to a system that understands context, we free up cognitive load for creativity and problem-solving.",
                        icon: Zap,
                        color: "text-blue-500"
                    },
                    {
                        year: "THE TECH",
                        title: "AI as a Connective Tissue",
                        desc: "LLMs don't just generate text. They can understand the latent relationships between concepts that you might miss.",
                        icon: Sparkles,
                        color: "text-purple-500"
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col md:flex-row gap-8 items-start relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hidden md:flex flex-col items-center">
                            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent absolute left-8 top-0 bottom-0" />
                            <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 relative">
                                <item.icon className={`w-8 h-8 ${item.color}`} />
                            </div>
                        </div>

                        <div className="flex-1 pt-4">
                            <span className={`font-mono text-sm tracking-widest ${item.color} mb-2 block`}>{item.year}</span>
                            <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function Philosophy() {
    return (
        <section className="py-32 bg-white text-black text-center">
            <div className="max-w-3xl mx-auto px-4">
                <Code className="w-16 h-16 mx-auto mb-8" />
                <h2 className="text-5xl font-black tracking-tighter mb-8">OPEN SOURCE FOREVER.</h2>
                <p className="text-2xl font-medium mb-12">
                    Knowledge should not be gated. We are building MindOS as a public utility for the curious.
                </p>
                <a href="https://github.com/mindos-labs" className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
                    Contribute on GitHub
                </a>
            </div>
        </section>
    );
}
