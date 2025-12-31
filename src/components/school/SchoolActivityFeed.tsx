"use client";

import { motion } from "framer-motion";

export function SchoolActivityFeed() {
    return (
        <div className="bg-zinc-900/30 border border-white/10 rounded-xl p-6 h-fit">
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Live Brain Activity</h3>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="flex gap-3 items-start pb-4 border-b border-white/5 last:border-0"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 animate-pulse" />
                        <div>
                            <p className="text-sm text-zinc-300">
                                <span className="font-bold text-white">Student {i + 1}</span> mastered <span className="text-indigo-400">ATP Synthesis</span>.
                            </p>
                            <span className="text-xs text-zinc-600 font-mono">2m ago</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
