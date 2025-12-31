"use client";

import { motion } from "framer-motion";

export function OriginStory() {
    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        The <span className="text-red-500">80%</span> Problem
                    </h2>

                    <div className="prose prose-invert prose-lg md:prose-xl leading-relaxed text-muted-foreground">
                        <p>
                            It starts the same way for everyone. You spend hours watching lectures, taking notes, and highlighting textbooks. You feel productive. You feel like you're learning.
                        </p>
                        <p>
                            Then, a week later, you sit down to test yourself... and it's gone.
                        </p>
                        <p className="text-white font-medium border-l-4 border-red-500 pl-6 my-8">
                            Studies show that students forget <strong>80%</strong> of what they study within 24 hours if they don't actively review it.
                        </p>
                        <p>
                            The problem isn't your intelligence. It's not your focus. It's your <strong>Operating System</strong>.
                        </p>
                        <p>
                            Traditional learning is "read-only". It's passive. MindOS captures the "write" access to your brain using cognitive science principles that have been proven for decades but ignored by modern ed-tech.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Ambient background effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
