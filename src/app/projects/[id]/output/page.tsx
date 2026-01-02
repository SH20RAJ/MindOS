"use client";

import { FileOutput, Download, ExternalLink, Box, CheckCircle2, FileJson, FileCode, Video } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectOutputPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <header>
                <h1 className="text-4xl font-black text-white mb-2">Project Output</h1>
                <p className="text-zinc-400">Final deliverables and generated artifacts for this neural session.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Deliverable Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="col-span-1 md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4">
                        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" />
                            COMPILED
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/20">
                            <Box className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Linear Algebra Mastery Module</h2>
                        <p className="text-zinc-400 mb-8 max-w-md">
                            A comprehensive synthesized package containing the NumPy transformation script, 3 mindmaps, and the final quiz results.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                                <Download className="w-4 h-4" /> Download Package
                            </button>
                            <button className="px-6 py-3 bg-zinc-800 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-700 transition-colors">
                                <ExternalLink className="w-4 h-4" /> View Deployment
                            </button>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-500" />
                </motion.div>

                {/* Stats / Metadata */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6"
                    >
                        <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Artifacts</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                <FileCode className="w-5 h-5 text-blue-400" />
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">transform.py</div>
                                    <div className="text-xs text-zinc-500">2.4 KB • Python Script</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                <FileJson className="w-5 h-5 text-yellow-400" />
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">structure.json</div>
                                    <div className="text-xs text-zinc-500">14 KB • Mindmap Data</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                <Video className="w-5 h-5 text-red-400" />
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">session_rec.mp4</div>
                                    <div className="text-xs text-zinc-500">142 MB • Recording</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Terminal Output Preview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-black border border-white/10 rounded-2xl overflow-hidden"
            >
                <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 text-xs font-mono text-zinc-500">build_log.txt</div>
                </div>
                <div className="p-6 font-mono text-sm text-zinc-400 leading-relaxed">
                    <p><span className="text-emerald-500">➜</span>  Initializing compilaton...</p>
                    <p>   &gt; Analyzing vector space constraints</p>
                    <p>   &gt; Optimizing eigen-decomposition algorithms</p>
                    <p>   &gt; Verified linear independence</p>
                    <p className="text-white mt-2">✓ BUILD SUCCESSFUL in 420ms</p>
                    <p className="mt-2 text-zinc-600">   Output generated at /dist/linear_algebra_v1</p>
                </div>
            </motion.div>
        </div>
    );
}
