"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Disc } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    progress: number;
    color?: string;
}

export function ProjectCard({ title, category, progress, color = "bg-blue-500" }: ProjectCardProps) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative w-64 h-64 group cursor-pointer perspective-1000"
        >
            {/* The Record (slides out) */}
            <motion.div
                variants={{
                    rest: { x: 0, rotate: 0 },
                    hover: { x: 80, rotate: 180 }
                }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="absolute inset-0 rounded-full bg-black border border-white/20 shadow-xl flex items-center justify-center"
            >
                <div className="absolute inset-2 rounded-full border border-white/10 opacity-50" />
                <div className="absolute inset-8 rounded-full border border-white/10 opacity-30" />

                {/* Center Label */}
                <div className={cn("w-20 h-20 rounded-full flex items-center justify-center", color)}>
                    <div className="w-3 h-3 bg-black rounded-full" />
                </div>

                {/* Grooves / Shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45" />
            </motion.div>

            {/* The Sleeve (stays put, on top) */}
            <div className="absolute inset-0 bg-secondary border border-white/10 rounded-sm shadow-2xl overflow-hidden z-10 flex flex-col justify-end p-6">
                <div className="absolute top-0 right-0 p-4">
                    <span className="text-4xl font-black text-white/5">{progress}%</span>
                </div>

                <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground border border-white/10 rounded-full px-2 py-1 bg-black/50 backdrop-blur-md">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 leading-none uppercase tracking-tight">
                        {title}
                    </h3>
                </div>

                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>
        </motion.div>
    );
}
