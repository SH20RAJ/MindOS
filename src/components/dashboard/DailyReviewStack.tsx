"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";

export function DailyReviewStack() {
    return (
        <div className="bg-secondary/20 border border-white/5 rounded-2xl p-6 relative overflow-hidden group h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-1 rounded-full">
                    Daily Review
                </span>
                <Layers className="w-4 h-4 text-muted-foreground" />
            </div>

            <div className="relative flex-1 flex items-center justify-center min-h-[150px]">
                {/* Stack of Cards Visual */}
                {[1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        initial={{ y: index * 4, scale: 1 - index * 0.05, opacity: 1 - index * 0.2 }}
                        whileHover={{ y: index * 10 - 20, rotate: index % 2 === 0 ? 2 : -2 }}
                        className="absolute w-40 h-52 bg-white rounded-xl shadow-2xl border border-gray-200"
                        style={{ zIndex: 3 - index }}
                    >
                        <div className="p-3">
                            <div className="w-full h-24 bg-gray-100 rounded-lg mb-3" />
                            <div className="w-3/4 h-3 bg-gray-100 rounded mb-2" />
                            <div className="w-1/2 h-3 bg-gray-100 rounded" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <p className="text-3xl font-bold text-white mb-1">42 Cards</p>
                <p className="text-sm text-muted-foreground">Due for review today</p>
                <Link href="/mindcloud/review" className="block mt-4 w-full">
                    <button className="w-full py-2 bg-accent text-white rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors">
                        Start Review
                    </button>
                </Link>
            </div>
        </div>
    );
}
