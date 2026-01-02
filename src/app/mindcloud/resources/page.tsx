"use client";

import { FileText, Filter, MoreHorizontal, Plus, Search, Tag } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="p-8 max-w-6xl mx-auto h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black tracking-tight mb-2">Resources Library</h1>
                    <p className="text-muted-foreground">Manage your collection of papers, articles, and artifacts.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
                        <Plus className="w-4 h-4" /> Add Resource
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search resources by title, tag, or content..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50"
                />
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { title: "Attention Is All You Need", type: "PDF", tags: ["AI", "Transformer"], added: "2 days ago", size: "2.4 MB" },
                    { title: "The Bitter Lesson", type: "Article", tags: ["AI", "Philosophy"], added: "5 days ago", size: "15 KB" },
                    { title: "React Server Components Docs", type: "Documentation", tags: ["React", "Web"], added: "1 week ago", size: "-" },
                    { title: "Calculus Vol 1", type: "Book", tags: ["Math"], added: "2 weeks ago", size: "150 MB" },
                    { title: "Huberman Lab: Focus Protocol", type: "Video", tags: ["Neuroscience", "Health"], added: "3 weeks ago", size: "-" },
                    { title: "Design Systems Handbook", type: "E-Book", tags: ["Design", "UI/UX"], added: "1 month ago", size: "12 MB" },
                ].map((resource, i) => (
                    <div key={i} className="group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-between h-48">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-[10px] font-bold px-2 py-1 rounded border ${resource.type === 'PDF' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                        resource.type === 'Video' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                            'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                    }`}>
                                    {resource.type.toUpperCase()}
                                </span>
                                <button className="text-muted-foreground hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                            <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">{resource.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {resource.tags.map(tag => (
                                    <span key={tag} className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Tag className="w-3 h-3" /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-white/5 mt-auto">
                            <span>Added {resource.added}</span>
                            <span>{resource.size}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
