import Link from "next/link";
import { ArrowLeft, Users, Brain, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-24">
            <div className="max-w-3xl mx-auto space-y-12">

                <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <header className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tight">About MindOS</h1>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        We are building the operating system for your cognition.
                        In a world drowning in information, MindOS helps you swim.
                    </p>
                </header>

                <div className="grid gap-8">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
                        <Brain className="w-8 h-8 text-indigo-500 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Active Cognition</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            Most tools are digital storage lockers. You put notes in, and they die.
                            MindOS is different. It uses AI and Spaced Repetition to ensure you actually *retain* what you learn.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
                        <Users className="w-8 h-8 text-emerald-500 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">The Community</h2>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Learning is a social sport. We've built a global network of "Neural Graphs" where you can share your knowledge structures and learn from others.
                        </p>
                        <Link href="/community" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors">
                            Join the Community <Zap className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
