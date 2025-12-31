"use client";

import { motion } from "framer-motion";
import { FileUp, Database, BrainCircuit, Play, FileText, Globe, Youtube, Plus } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export interface CognitiveItem {
    id: number;
    title: string;
    type: string;
    status: string;
    retention: number;
}

interface CognitivePipelineProps {
    initialItems: CognitiveItem[];
}

export function CognitivePipeline({ initialItems }: CognitivePipelineProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[600px]">
            {/* Stage 1: Ingest (Source) */}
            <div className="group relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                <div className="p-6 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-3 text-blue-400 mb-2">
                        <FileUp className="w-5 h-5" />
                        <span className="font-mono text-xs uppercase tracking-widest">Stage 01</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Source Ingestion</h3>
                </div>

                <div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto">
                    {/* Add Button */}
                    <button className="w-full h-32 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-3 text-muted-foreground hover:bg-white/5 hover:border-white/20 transition-all group/btn">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                            <Plus className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium">Drop PDFs, Links, or Notes</span>
                    </button>

                    {/* Pending Items */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mt-4 block">Processing Queue</h4>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex items-start gap-3">
                            <div className="p-2 bg-red-500/20 rounded text-red-500">
                                <Youtube className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-white font-medium truncate">Quantum Mechanics 101 - Lecture 04</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-blue-500 animate-pulse" />
                                    </div>
                                    <span className="text-[10px] text-blue-400 font-mono">EXTRACTING...</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex items-start gap-3 opacity-50">
                            <div className="p-2 bg-orange-500/20 rounded text-orange-500">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-white font-medium truncate">Griffiths_Quantum_Ch2.pdf</p>
                                <span className="text-[10px] text-zinc-500 font-mono">WAITING</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stage 2: Synthesis (Graph) */}
            <div className="group relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                <div className="p-6 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-3 text-purple-400 mb-2">
                        <Database className="w-5 h-5" />
                        <span className="font-mono text-xs uppercase tracking-widest">Stage 02</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Neural Synthesis</h3>
                </div>

                <div className="flex-1 relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)]">
                    {/* Placeholder for Graph Visualization */}
                    <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center opacity-10" />

                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-64 h-64 border border-purple-500/30 rounded-full flex items-center justify-center relative"
                    >
                        <div className="absolute inset-0 rounded-full border border-purple-500/10 scale-150" />
                        <BrainCircuit className="w-16 h-16 text-purple-500/50" />
                    </motion.div>

                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                            <span>NODES: 142</span>
                            <span>CONNECTIONS: 843</span>
                        </div>
                        <button className="w-full py-3 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors font-bold text-sm uppercase tracking-wide">
                            Expand Knowledge Graph
                        </button>
                    </div>
                </div>
            </div>

            {/* Stage 3: Retain (Simulation) */}
            <div className="group relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                <GlowingEffect blur={20} glow={true} spread={40} className="text-emerald-500/10" />

                <div className="p-6 border-b border-white/10 bg-white/5 relative z-10">
                    <div className="flex items-center gap-3 text-emerald-400 mb-2">
                        <BrainCircuit className="w-5 h-5" />
                        <span className="font-mono text-xs uppercase tracking-widest">Stage 03</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Active Simulation</h3>
                </div>

                <div className="flex-1 p-6 flex flex-col items-center justify-center text-center relative z-10">
                    <div className="mb-8">
                        <div className="text-6xl font-black text-white mb-2">12</div>
                        <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Cards Due Now</div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative w-full py-6 rounded-xl bg-white text-black font-black text-xl uppercase tracking-tighter overflow-hidden mb-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Start Session <Play className="w-5 h-5 fill-current" />
                        </span>
                    </motion.button>

                    <div className="w-full grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-2xl font-bold text-emerald-400">94%</div>
                            <div className="text-[10px] text-muted-foreground font-mono uppercase">Retention</div>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-2xl font-bold text-blue-400">2.5h</div>
                            <div className="text-[10px] text-muted-foreground font-mono uppercase">Wait Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
