"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useUser } from "@stackframe/stack";

export function LaunchDashboard() {
    const user = useUser();

    return (
        <section className="h-[60vh] md:h-[80vh] bg-zinc-950 border-t border-white/5 relative flex items-center justify-center overflow-hidden group">
            {/* Hover Reveal Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 text-center max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tighter">
                        UPGRADE YOUR<br />COGNITION.
                    </h2>

                    <Link href={user ? "/dashboard" : "/handler/sign-up"}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-10 py-5 rounded-full text-lg md:text-xl font-bold tracking-wide hover:bg-zinc-200 transition-colors flex items-center gap-3 mx-auto"
                        >
                            {user ? "ENTER MINDOS" : "LAUNCH DASHBOARD"} <ArrowUpRight className="w-5 h-5" />
                        </motion.button>
                    </Link>

                    <p className="mt-8 text-sm text-zinc-500 font-mono">
                        v1.0.0 • STABLE • PUBLIC BETA
                    </p>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />
        </section>
    );
}
