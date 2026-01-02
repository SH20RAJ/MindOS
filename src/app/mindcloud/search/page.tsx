"use client";

import { ArrowRight, Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {
    const [query, setQuery] = useState("");

    return (
        <div className="flex flex-col h-full bg-black">
            {/* Search Hero */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 min-h-[40vh]">
                <div className="w-full max-w-3xl space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
                            What are you looking for?
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Search across 127 resources, 43 notes, and your entire knowledge graph.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 transition-all group-focus-within:bg-black group-focus-within:ring-2 group-focus-within:ring-blue-500/50">
                            <SearchIcon className="w-6 h-6 text-muted-foreground ml-4" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search queries, concepts, or tags..."
                                className="flex-1 bg-transparent border-none text-xl p-4 focus:outline-none placeholder:text-muted-foreground/50"
                                autoFocus
                            />
                            <button className="bg-white text-black p-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 text-sm">
                        <span className="text-muted-foreground">Try searching:</span>
                        <button className="text-blue-400 hover:underline">Neural Networks</button>
                        <button className="text-blue-400 hover:underline">Project Quantum</button>
                        <button className="text-blue-400 hover:underline">Design Systems</button>
                    </div>
                </div>
            </div>

            {/* Results Area (Placeholder if query active) */}
            {query && (
                <div className="flex-1 bg-white/5 border-t border-white/10 p-8 animate-in slide-in-from-bottom-5 fade-in duration-300">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase mb-6">Top Results</h3>
                        <div className="space-y-4">
                            {/* Mock Results */}
                            <div className="p-4 rounded-xl border border-white/10 bg-black/50 hover:bg-white/5 cursor-pointer transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">NODE</span>
                                    <h4 className="font-bold">Neural Networks</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">A method in artificial intelligence that teaches computers to process data in a way that is inspired by the human brain.</p>
                            </div>
                            <div className="p-4 rounded-xl border border-white/10 bg-black/50 hover:bg-white/5 cursor-pointer transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">JOURNAL</span>
                                    <h4 className="font-bold">Reflecting on Deep Learning</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">...chain rule—something I learned in high school calculus and promptly forgot—is the engine behind the AI revolution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
