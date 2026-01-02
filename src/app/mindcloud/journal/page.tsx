import { Book, Calendar, ChevronRight, Edit3, MoreHorizontal, Plus, Search, Tag } from "lucide-react";
import Link from "next/link";

export default function JournalPage() {
    return (
        <div className="max-w-4xl mx-auto h-full flex flex-col">
            {/* Header / Sub-nav */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black sticky top-0 z-10">
                <div>
                    <h1 className="text-2xl font-black tracking-tight flex items-center gap-3">
                        <Book className="w-6 h-6 text-amber-400" />
                        Digital Garden Journal
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Cultivate your thoughts, reflections, and daily logs.
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            placeholder="Search entries..."
                            className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 w-64 transition-all"
                        />
                    </div>
                    <Link href="/mindcloud/journal/new" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
                        <Plus className="w-4 h-4" /> New Entry
                    </Link>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-auto p-6 grid grid-cols-12 gap-8">

                {/* Timeline / List Side */}
                <div className="col-span-4 space-y-6 border-r border-white/10 pr-6">
                    <div>
                        <h3 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">This Week</h3>
                        <div className="space-y-2">
                            {[
                                { title: "Reflecting on Deep Learning", date: "Today", preview: "The concept of backpropagation is finally clicking..." },
                                { title: "Project 'Quantum' Kickoff", date: "Yesterday", preview: "Started the new ambitious project. The goal is..." },
                                { title: "Weekly Review: Jan 01", date: "Jan 1, 2026", preview: "A strong start to the new year. Goals aligned..." },
                            ].map((entry, i) => (
                                <div key={i} className={`p-3 rounded-lg cursor-pointer transition-all ${i === 0 ? "bg-white/10 border-l-2 border-amber-400" : "hover:bg-white/5 border-l-2 border-transparent"}`}>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-bold text-sm truncate pr-2">{entry.title}</span>
                                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">{entry.date}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                        {entry.preview}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">December 2025</h3>
                        <div className="space-y-2 opacity-60 hover:opacity-100 transition-opacity">
                            {[
                                { title: "End of Year Retrospective", date: "Dec 31", preview: "Looking back at the progress made in MindOS..." },
                                { title: "Learning Rust: Day 1", date: "Dec 28", preview: "Memory safety without garbage collection is fascinating..." },
                            ].map((entry, i) => (
                                <div key={i} className="p-3 rounded-lg cursor-pointer hover:bg-white/5 border-l-2 border-transparent transition-all">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-bold text-sm truncate pr-2">{entry.title}</span>
                                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">{entry.date}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                        {entry.preview}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Editor / Reader Side */}
                <div className="col-span-8 flex flex-col h-full">

                    {/* Entry Header */}
                    <div className="mb-6 pb-6 border-b border-white/5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-amber-400/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-400/20">REFLECTION</span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> Jan 2, 2026 at 4:32 PM
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 font-serif">Reflecting on Deep Learning</h1>
                        <div className="flex gap-2">
                            {["DeepLearning", "NeuralNetworks", "Math"].map(tag => (
                                <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-md hover:text-white transition-colors cursor-pointer">
                                    <Tag className="w-3 h-3" /> {tag}
                                </span>
                            ))}
                            <button className="ml-auto text-xs text-muted-foreground hover:text-white flex items-center gap-1">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Entry Content (Mock Editor) */}
                    <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none flex-1 font-serif text-lg leading-relaxed">
                        <p>
                            Today I spent about 3 hours diving deep into backpropagation. It's fascinating how the chain rule—something I learned in high school calculus and promptly forgot—is the engine behind the AI revolution.
                        </p>
                        <p>
                            <strong>Key realization:</strong> Use the analogy of "blame assignment". When the network makes a mistake, backprop is just a way of telling each neuron exactly how much it contributed to that error, so it can adjust its weight (synapse strength) accordingly.
                        </p>
                        <h3>Action Items for Tomorrow</h3>
                        <ul>
                            <li>Implement a basic perceptron from scratch in Python.</li>
                            <li>Watch the 3Blue1Brown video on Gradient Descent again.</li>
                            <li>Connect this node to the <span className="text-blue-400 underline decoration-blue-400/30 cursor-pointer">Calculus</span> topic in my graph.</li>
                        </ul>
                        <blockquote>
                            "What I cannot create, I do not understand." — Richard Feynman
                        </blockquote>
                        <p>
                            This quote really resonates with my current learning path. I need to stop just reading papers and start building small models, even if they are inefficient.
                        </p>
                    </div>

                    {/* Editor Toolbar (Bottom) */}
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-4 text-muted-foreground">
                        <button className="hover:text-white transition-colors"><Edit3 className="w-4 h-4" /></button>
                        <div className="h-4 w-px bg-white/10" />
                        <span className="text-xs">Last saved just now</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
