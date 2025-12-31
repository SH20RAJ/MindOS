"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Circle, Clock, MoreVertical, Play, Trophy } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ProjectDetailPage() {
    const params = useParams();
    // Mock data - normally fetched by ID
    const project = {
        title: "Quantum Physics Integration",
        subtitle: "MASTER CLASS VOL. 1",
        progress: 45,
        modules: [
            { id: 1, title: "Wave-Particle Duality", duration: "45m", complete: true },
            { id: 2, title: "Schrödinger's Equation", duration: "1h 20m", complete: false },
            { id: 3, title: "Quantum Entanglement", duration: "55m", complete: false },
            { id: 4, title: "Heisenberg Uncertainty", duration: "40m", complete: false },
        ]
    };

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
                {/* The Pass (Sidebar info) */}
                <div className="w-full md:w-80 shrink-0">
                    <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Gallery
                    </Link>

                    <div className="bg-secondary border border-white/10 rounded-xl overflow-hidden relative group">
                        {/* Lanyard Hole */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/50 rounded-full" />

                        <div className="p-8 text-center pt-12">
                            <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest bg-black/30 mb-4">
                                Access Granted
                            </span>
                            <h1 className="text-3xl font-black uppercase leading-tight mb-2">
                                {project.title}
                            </h1>
                            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
                                {project.subtitle}
                            </p>

                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-accent w-[45%]" />
                            </div>
                            <p className="text-xs text-right text-muted-foreground font-mono">45% COMPLETE</p>
                        </div>

                        <div className="bg-black/40 p-6 border-t border-dashed border-white/20 flex flex-col gap-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Level</span>
                                <span className="font-bold">Advanced</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">XP Earned</span>
                                <span className="font-bold">1,250</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Streak</span>
                                <span className="font-bold text-green-500">5 Days</span>
                            </div>
                        </div>

                        {/* Holographic Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none group-hover:animate-shine" />
                    </div>
                </div>

                {/* Setlist (Modules) */}
                <div className="flex-1">
                    <header className="mb-8 flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tight text-white/20">Setlist</h2>
                        </div>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-2">
                            <Play className="w-4 h-4 fill-current" />
                            Resume
                        </button>
                    </header>

                    <div className="flex flex-col gap-2">
                        {project.modules.map((module, i) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-center gap-4 p-4 rounded-lg bg-secondary/10 border border-white/5 hover:bg-secondary/30 transition-colors cursor-pointer"
                            >
                                <div className="w-8 h-8 flex items-center justify-center font-mono text-muted-foreground/50 border border-white/10 rounded-full group-hover:border-white/50 transition-colors">
                                    {i + 1}
                                </div>

                                <div className="flex-1">
                                    <h3 className={cn(
                                        "font-bold transition-colors",
                                        module.complete ? "text-muted-foreground line-through decoration-white/20" : "text-white group-hover:text-accent"
                                    )}>
                                        {module.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4 text-muted-foreground">
                                    <span className="text-xs font-mono hidden md:inline-block flex items-center gap-2">
                                        <Clock className="w-3 h-3" />
                                        {module.duration}
                                    </span>
                                    {module.complete ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5" />}
                                    <MoreVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
