"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Target, Rocket, Brain, ChevronLeft, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NewProjectWizard() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        intent: "",
        title: "",
        description: ""
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
        else router.push('/projects');
    };

    const handleSubmit = () => {
        // Here we would actually save the project to the store/DB
        // For now, simple simulation
        setTimeout(() => {
            router.push('/projects/quantum'); // Redirect to our demo project
        }, 1500);
    };

    return (
        <div className="w-full max-w-2xl">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12 px-2">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2 relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 bg-black ${step >= s ? "border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "border-zinc-800 text-zinc-600"
                            }`}>
                            {step > s ? <Check className="w-5 h-5" /> : <span className="font-mono text-sm font-bold">{s}</span>}
                        </div>
                        <span className={`text-[10px] uppercase font-bold tracking-widest absolute -bottom-6 whitespace-nowrap transition-colors duration-500 ${step >= s ? "text-white" : "text-zinc-800"
                            }`}>
                            {s === 1 ? "Intent" : s === 2 ? "Scope" : "Launch"}
                        </span>

                        {/* Connecting Line */}
                        {s < 3 && (
                            <div className="absolute top-5 left-10 w-[calc(100vw/3)] max-w-[200px] h-0.5 bg-zinc-900 -z-0">
                                <div
                                    className="h-full bg-white transition-all duration-700 ease-out"
                                    style={{ width: step > s ? "100%" : "0%" }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden min-h-[400px]">
                <AnimatePresence mode="wait">

                    {/* STEP 1: INTENT */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <h1 className="text-3xl font-black text-white">Choose Your Path</h1>
                                <p className="text-zinc-500">What is the primary objective of this project?</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { id: 'skill', label: 'Master a Skill', icon: Target, desc: 'Deep capability acquisition' },
                                    { id: 'build', label: 'Build Product', icon: Rocket, desc: 'Project-based execution' },
                                    { id: 'exam', label: 'Ace Exam', icon: Brain, desc: 'High-retention study' },
                                    { id: 'explore', label: 'Curiosity', icon: Sparkles, desc: 'Open-ended research' },
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => {
                                            setFormData({ ...formData, intent: type.id });
                                            handleNext();
                                        }}
                                        className="group p-6 text-left border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-[1.02]"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                                            <type.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-white mb-1">{type.label}</h3>
                                        <p className="text-xs text-zinc-500">{type.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: DETAILS */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <h1 className="text-3xl font-black text-white">Define Scope</h1>
                                <p className="text-zinc-500">Give your project a clear identity.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="e.g. Quantum Physics 101"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        autoFocus
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Success Criteria (The Goal)</label>
                                    <textarea
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 transition-colors resize-none h-32"
                                        placeholder="I will know I've succeeded when..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: CONFIRM */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-8 py-8"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center animate-pulse">
                                <Brain className="w-10 h-10 text-white" />
                            </div>

                            <div>
                                <h1 className="text-3xl font-black text-white mb-2">Systems Ready</h1>
                                <p className="text-zinc-400 max-w-sm mx-auto">
                                    Initializing cognitive environment for <span className="text-white font-bold">{formData.title || "New Project"}</span>...
                                </p>
                            </div>

                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 max-w-sm mx-auto text-sm text-zinc-400 font-mono">
                                &gt; Generating Concept Map... OK<br />
                                &gt; Calibrating AI Tutor... OK<br />
                                &gt; Establishing Milestones... OK
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute bottom-8 right-8 left-8 flex justify-between items-center">
                    {step < 3 && (
                        <>
                            <button
                                onClick={handleBack}
                                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                            >
                                <ChevronLeft className="w-4 h-4" /> Back
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={step === 2 && !formData.title}
                                className={`bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 ${step === 2 && !formData.title ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {step === 2 ? "Create Project" : "Next"} <ArrowRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
