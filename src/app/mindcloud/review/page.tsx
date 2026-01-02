import { ArrowLeft, Check, ThumbsUp, X } from "lucide-react";
import Link from "next/link";

export default function ReviewSessionPage() {
    return (
        <div className="min-h-screen bg-black text-white p-6 font-sans flex flex-col items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                <Link href="/dashboard" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Command Center
                </Link>

                <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-mono uppercase tracking-wider">
                                Card 1 of 42
                            </div>
                            <span className="text-zinc-500 text-xs font-mono">SPACED REPETITION</span>
                        </div>

                        <h1 className="text-2xl font-bold leading-tight">
                            What is the primary difference between Supervised and Unsupervised Learning?
                        </h1>
                    </div>

                    <div className="text-center py-12 text-zinc-500 italic">
                        Tap to reveal answer
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="py-4 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all font-bold">
                            Forgot
                        </button>
                        <button className="py-4 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-white transition-all font-bold">
                            Recalled
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
