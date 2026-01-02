"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterSchoolClient() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="max-w-xl w-full">
                <Link href="/school" className="flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors self-start">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>

                <h1 className="text-3xl font-black text-white mb-2">Deploy New School Node</h1>
                <p className="text-muted-foreground mb-8">Setup your institution's digital brain.</p>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">School Name</label>
                        <input type="text" placeholder="e.g. Quantum University" className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 text-white focus:border-indigo-500 outline-none" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">Official Domain</label>
                        <input type="text" placeholder="e.g. quantum.edu" className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 text-white focus:border-indigo-500 outline-none" />
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition-colors">
                        Launch System
                    </button>
                </form>
            </div>
        </div>
    );
}
