"use client";

import { Project } from "@/types/learning";
import { BrainCircuit, Lock, Unlock } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectConceptMap({ project }: { project: Project }) {
    // Mock graphical nodes for visualization
    const nodes = [
        { id: '1', label: 'Linear Algebra', x: 50, y: 50, status: 'mastered' },
        { id: '2', label: 'Superposition', x: 200, y: 50, status: 'unlocked' },
        { id: '3', label: 'Entanglement', x: 125, y: 150, status: 'locked' },
        { id: '4', label: 'Qubits', x: 275, y: 150, status: 'locked' },
    ];

    return (
        <div className="h-[600px] bg-zinc-950 border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1),transparent)]" />

            {/* Mock Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <line x1="30%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="70%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5,5" />
            </svg>

            {/* Central Hub */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm z-10"
            >
                <div className="text-center">
                    <BrainCircuit className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <span className="text-xs font-bold text-blue-200 uppercase">Core</span>
                </div>
            </motion.div>

            {/* Satellite Nodes */}
            <div className="absolute top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-zinc-900 border border-emerald-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <span className="text-[10px] font-bold text-emerald-500">Algebra</span>
                </div>
            </div>

            <div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-zinc-900 border border-orange-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    <span className="text-[10px] font-bold text-orange-500">Physics</span>
                </div>
            </div>

            <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-50">
                <div className="w-20 h-20 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-zinc-700" />
                </div>
            </div>

            <div className="absolute bottom-6 left-6 text-xs font-mono text-zinc-500">
                GRAPH ENGINE v2.1 • {nodes.length} NODES
            </div>
        </div>
    );
}
