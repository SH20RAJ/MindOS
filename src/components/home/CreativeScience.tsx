"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Repeat, Network, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const scienceFeatures = [
    {
        id: "spaced-repetition",
        title: "Spaced Repetition",
        description: "Optimal scheduling to beat the forgetting curve.",
        icon: Repeat,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: "active-recall",
        title: "Active Recall",
        description: "Testing yourself is 50% more effective than re-reading.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        id: "knowledge-graph",
        title: "Knowledge Graph",
        description: "Connect ideas like neurons in a brain.",
        icon: Network,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: "interleaving",
        title: "Interleaving",
        description: "Mix subjects to strengthen neural pathways.",
        icon: Layers,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    }
];

export function CreativeScienceWithScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative min-h-[200vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Neural Network Animation Effect */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black" />
                </div>

                <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6"
                        >
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">Science</span>
                            <br />of Learning.
                        </motion.h2>
                        <p className="text-xl text-muted-foreground max-w-lg mb-8">
                            We didn't invent learning. We just optimized it using cognitive science principles that turn information into long-term memory.
                        </p>
                    </div>

                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square">
                            {scienceFeatures.map((feature, index) => {
                                // Calculate rotation and position based on index
                                const rotation = index * (360 / scienceFeatures.length);

                                return (
                                    <motion.div
                                        key={feature.id}
                                        className={cn(
                                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-2xl p-6 border backdrop-blur-xl flex flex-col justify-between transition-all duration-500",
                                            feature.bg, feature.border
                                        )}
                                        initial={{ opacity: 0, scale: 0.8, rotate: rotation, x: "-50%", y: "-50%" }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            rotate: rotation,
                                            x: `calc(-50% + ${Math.cos(rotation * (Math.PI / 180)) * 150}px)`,
                                            y: `calc(-50% + ${Math.sin(rotation * (Math.PI / 180)) * 150}px)`
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
                                    >
                                        <feature.icon className={cn("w-12 h-12 mb-4", feature.color)} />
                                        <div>
                                            <h3 className={cn("text-2xl font-bold mb-2", feature.color)}>{feature.title}</h3>
                                            <p className="text-white/70 text-sm">{feature.description}</p>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                                            <motion.div
                                                className={cn("h-full", feature.color.replace('text-', 'bg-'))}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Center Core */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center z-0 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                                animate={{ boxShadow: ["0 0 20px rgba(255,255,255,0.2)", "0 0 60px rgba(255,255,255,0.5)", "0 0 20px rgba(255,255,255,0.2)"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Brain className="w-16 h-16 text-black" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
