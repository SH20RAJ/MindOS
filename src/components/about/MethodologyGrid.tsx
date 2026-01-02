"use client";

import { motion } from "framer-motion";
import { Brain, Repeat, Zap, Shuffle, GitBranch, Layers, Clock, Activity } from "lucide-react";

const methodologies = [
    {
        icon: Repeat,
        title: "Spaced Repetition",
        description: "Algorithms that predict exactly when you're about to forget, prompting you to review at the perfect moment.",
        color: "text-blue-400"
    },
    {
        icon: Zap,
        title: "Active Recall",
        description: "Testing yourself before you re-read. The act of retrieval strengthens neural pathways more than consumption.",
        color: "text-yellow-400"
    },
    {
        icon: Shuffle,
        title: "Interleaving",
        description: "Mixing related topics (e.g., Physics → Math → Chem) to improve discrimination learning and long-term retention.",
        color: "text-green-400"
    },
    {
        icon: GitBranch,
        title: "Dual Coding",
        description: "Combining verbal and visual information. When you see a diagram and read the text, memory traces are doubled.",
        color: "text-purple-400"
    },
    {
        icon: Layers,
        title: "Elaborative Encoding",
        description: "Connecting new information to what you already know. MindOS prompts you to build analogies and deep links.",
        color: "text-pink-400"
    },
    {
        icon: Clock,
        title: "Ultradian Rhythms",
        description: "Optimizing study sessions to match your brain's natural 90-minute focus cycles for maximum efficiency.",
        color: "text-cyan-400"
    },
    {
        icon: Activity,
        title: "Retention Management",
        description: "A systemic approach to visualizing cognitive decay. We track memory strength across all topics to prevent 'knowledge leaks'.",
        color: "text-rose-400"
    },
    {
        icon: GitBranch,
        title: "Cognitive Push",
        description: "Proactive injection of learning material. Instead of waiting for you to study, the system pushes critical reviews to your queue.",
        color: "text-orange-400"
    },
    {
        icon: Brain,
        title: "The Forgetting Curve",
        description: "Counteracting the natural exponential decay of memory (Ebbinghaus) by strategic reinforcement at calculated intervals.",
        color: "text-indigo-400"
    }
];

export function MethodologyGrid() {
    return (
        <section className="py-24 px-4 bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                        The Core Engine
                    </h2>
                    <p className="text-xl text-muted-foreground font-mono max-w-2xl">
                        MindOS isn't just a note-taking app. It's a cognitive implementation of 15+ proven scientific learning techniques.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {methodologies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className={`p-3 bg-white/5 w-fit rounded-lg mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
