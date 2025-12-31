"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Zap, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
    {
        id: "identity",
        title: "Project Identity",
        description: "What cognitive domain are we mastering?"
    },
    {
        id: "source",
        title: "Knowledge Source",
        description: "Where should MindOS extract truth from?"
    },
    {
        id: "protocol",
        title: "Learning Protocol",
        description: "Set your desired velocity and depth."
    }
];

export function MindFlowWizard() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [isInitializing, setIsInitializing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        sourceUrl: "",
        velocity: "standard"
    });

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(c => c + 1);
        } else {
            handleComplete();
        }
    };

    const handleComplete = () => {
        setIsInitializing(true);
        // Simulate "AI Processing"
        setTimeout(() => {
            router.push("/projects/quantum"); // Redirect to a mock project for now
        }, 2500);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Step Indicators */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10" />
                {steps.map((step, i) => (
                    <div key={step.id} className="flex flex-col items-center gap-2 bg-black px-2">
                        <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2
                            ${i <= currentStep ? "bg-white text-black border-white" : "bg-black text-zinc-500 border-zinc-800"}
                        `}>
                            {i + 1}
                        </div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${i <= currentStep ? "text-white" : "text-zinc-600"}`}>
                            {step.id}
                        </span>
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 min-h-[400px] flex flex-col relative overflow-hidden">
                {isInitializing && (
                    <div className="absolute inset-0 bg-black/90 z-50 flex flex-col items-center justify-center text-center">
                        <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">INITIALIZING NEURAL PATHWAYS</h3>
                        <p className="text-zinc-500 font-mono text-sm">Synthesizing structure from source...</p>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-black text-white mb-2">{steps[currentStep].title}</h2>
                        <p className="text-zinc-400 mb-8">{steps[currentStep].description}</p>

                        {/* Step 1: Identity */}
                        {currentStep === 0 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Project Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Quantum Mechanics 101"
                                        className="w-full bg-black border border-white/10 rounded-lg p-4 text-white placeholder:text-zinc-700 focus:border-white/30 focus:outline-none transition-colors font-bold text-lg"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        autoFocus
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Domain Category</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Academic", "Skill", "Language"].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setFormData({ ...formData, category: cat })}
                                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${formData.category === cat ? "bg-white text-black border-white" : "bg-black text-zinc-500 border-white/10 hover:border-white/20"}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Source */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Primary Source URL (Youtube/PDF/Web)</label>
                                    <input
                                        type="text"
                                        placeholder="https://..."
                                        className="w-full bg-black border border-white/10 rounded-lg p-4 text-white placeholder:text-zinc-700 focus:border-blue-500/50 focus:outline-none transition-colors font-mono text-sm"
                                        value={formData.sourceUrl}
                                        onChange={(e) => setFormData({ ...formData, sourceUrl: e.target.value })}
                                        autoFocus
                                    />
                                </div>
                                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3">
                                    <Brain className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                    <p className="text-xs text-blue-200/70">
                                        MindAI will analyze this source to generate your curriculum tree automatically.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Protocol */}
                        {currentStep === 2 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    onClick={() => setFormData({ ...formData, velocity: "standard" })}
                                    className={`p-6 rounded-xl border text-left transition-all group ${formData.velocity === "standard" ? "bg-emerald-500/10 border-emerald-500/50" : "bg-black border-white/10 hover:border-white/20"}`}
                                >
                                    <div className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center ${formData.velocity === "standard" ? "bg-emerald-500" : "bg-zinc-800"}`}>
                                        <Brain className={`w-5 h-5 ${formData.velocity === "standard" ? "text-black" : "text-white"}`} />
                                    </div>
                                    <h4 className="text-white font-bold mb-1">Deep Mastery</h4>
                                    <p className="text-xs text-zinc-500">Focus on long-term retention. Optimized for complex subjects.</p>
                                </button>

                                <button
                                    onClick={() => setFormData({ ...formData, velocity: "cram" })}
                                    className={`p-6 rounded-xl border text-left transition-all group ${formData.velocity === "cram" ? "bg-orange-500/10 border-orange-500/50" : "bg-black border-white/10 hover:border-white/20"}`}
                                >
                                    <div className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center ${formData.velocity === "cram" ? "bg-orange-500" : "bg-zinc-800"}`}>
                                        <Zap className={`w-5 h-5 ${formData.velocity === "cram" ? "text-black" : "text-white"}`} />
                                    </div>
                                    <h4 className="text-white font-bold mb-1">Rapid Intake</h4>
                                    <p className="text-xs text-zinc-500">Focus on short-term coverage. Optimized for upcoming deadlines.</p>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Controls */}
                <div className="mt-auto flex justify-end gap-4 pt-8 border-t border-white/5">
                    {currentStep > 0 && (
                        <button
                            onClick={() => setCurrentStep(c => c - 1)}
                            className="px-6 py-3 text-sm font-bold text-zinc-500 hover:text-white transition-colors"
                        >
                            Back
                        </button>
                    )}
                    <button
                        onClick={handleNext}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2"
                        disabled={currentStep === 0 && !formData.name}
                    >
                        {currentStep === steps.length - 1 ? "Initialize Project" : "Continue"}
                        {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
