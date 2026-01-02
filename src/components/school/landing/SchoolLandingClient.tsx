"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SchoolLandingClient() {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6 tracking-widest uppercase">
                            MindOS for Education (B2B)
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
                            The Operating System <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                For Modern Schools
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop the "Teach & Test" cycle. Deploy a Retention Management System that proves your students are actually learning, tracking cognitive growth in real-time.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/school/register"
                                className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                Launch Your School <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/school/login"
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                Admin Login
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer mockup */}
            <footer className="py-12 text-center text-zinc-600 text-sm">
                MindOS Education © 2026
            </footer>
        </div>
    );
}
