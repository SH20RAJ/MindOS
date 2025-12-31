"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
    {
        phase: "Phase 1: Foundation",
        status: "complete",
        items: [
            "15+ Scientific Tools Implementation",
            "MindRepeater (Spaced Repetition)",
            "MindQuiz (Active Recall)",
            "Personalized Project Onboarding"
        ]
    },
    {
        phase: "Phase 2: Expansion",
        status: "in-progress",
        items: [
            "MindCloud (Second Brain)",
            "Global Resource Finder",
            "Mobile App (React Native)",
            "Offline Mode"
        ]
    },
    {
        phase: "Phase 3: Intelligence",
        status: "upcoming",
        items: [
            "AI Tutor (Topic Locked)",
            "Real-time Confusion Detection",
            "Collaborative Study Rooms",
            "Institutional Dashboard"
        ]
    }
];

export function Roadmap() {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                        Living Roadmap
                    </h2>
                    <p className="text-muted-foreground font-mono">
                        Our journey to build the ultimate learning operating system.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roadmapItems.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`
                                relative p-8 border rounded-lg h-full
                                ${phase.status === 'complete' ? 'bg-white/5 border-green-500/20' : ''}
                                ${phase.status === 'in-progress' ? 'bg-blue-900/10 border-blue-500/30' : ''}
                                ${phase.status === 'upcoming' ? 'bg-black border-white/10 border-dashed' : ''}
                            `}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                {phase.status === 'complete' && <CheckCircle2 className="text-green-500 w-6 h-6" />}
                                {phase.status === 'in-progress' && <Clock className="text-blue-500 w-6 h-6 animate-pulse" />}
                                {phase.status === 'upcoming' && <Circle className="text-muted-foreground w-6 h-6" />}

                                <h3 className={`font-bold uppercase tracking-tight ${phase.status === 'upcoming' ? 'text-muted-foreground' : 'text-white'}`}>
                                    {phase.phase}
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
