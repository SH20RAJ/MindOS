"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Brain, CheckCircle2, School, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export default function SchoolLandingPage() {
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
                                href="/school/signup"
                                className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                Launch Your Node <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/school/demo"
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                View Demo School
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Brain,
                                title: "Retention Tracking",
                                description: "Don't just grade exams. Visualize the decay of knowledge over time and intervene before students forget."
                            },
                            {
                                icon: Users,
                                title: "Unified Student ID",
                                description: "Your courses integrate directly into students' personal MindOS graphs. They leave with a permanent digital brain."
                            },
                            {
                                icon: BarChart3,
                                title: "Cognitive Analytics",
                                description: "Measure the ROI of your curriculum. See which topics stick and which ones fade away."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-indigo-500/30 transition-colors">
                                <feature.icon className="w-10 h-10 text-indigo-400 mb-6" />
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8">Launch a Digital Campus in Minutes.</h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Create Your Organization", desc: "Set up your school profile, branding, and admin team." },
                                    { step: "02", title: "Map Your Curriculum", desc: "Build courses as 'Knowledge Graphs' instead of just file folders." },
                                    { step: "03", title: "Invite Students", desc: "Students join via email. Course nodes are pushed to their MindOS instantly." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="text-3xl font-black text-indigo-500/20">{step.step}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 aspect-square flex flex-col items-center justify-center text-center">
                                <School className="w-24 h-24 text-indigo-400 mb-6" />
                                <div className="text-2xl font-bold text-white mb-2">Quantum University</div>
                                <div className="text-gray-400 text-sm mb-8">est. 2026</div>
                                <div className="w-full max-w-xs bg-black/50 rounded-lg p-4 border border-white/10 text-left space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">Active Students</span>
                                        <span className="text-xs font-bold text-white">1,248</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 w-[75%]" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                        <span className="text-[10px] text-gray-400">System Optimization: 98%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black mb-6">Ready to upgrade your institution?</h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Join 500+ forward-thinking schools managing their retention with MindOS.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
                            Partner With Us
                        </button>
                        <span className="text-sm text-gray-500">
                            <ShieldCheck className="w-4 h-4 inline mr-1" /> Enterprise Security Included
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
