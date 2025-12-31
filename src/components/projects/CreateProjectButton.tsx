"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";

export function CreateProjectButton() {
    return (
        <Link href="/projects/new">
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-[320px] w-full rounded-2xl bg-zinc-900/50 border-2 border-dashed border-white/10 hover:border-white/20 transition-colors flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden"
            >
                <div className="w-16 h-16 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center relative z-10">
                    <Plus className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                </div>

                <div className="text-center z-10">
                    <h3 className="text-xl font-bold text-white mb-1">Initialize Project</h3>
                    <p className="text-sm text-muted-foreground font-mono">Start a new cognitive arc</p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
        </Link>
    );
}
