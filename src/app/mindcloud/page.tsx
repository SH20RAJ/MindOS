import { Search, FileText, StickyNote, Network, ExternalLink, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MindCloud | Second Brain",
    description: "Search and manage your knowledge graph, resources, and connections.",
};

export default function MindCloudPage() {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-black tracking-tighter mb-4">Search Your Second Brain</h1>
                <div className="relative max-w-2xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Find anything you've ever learned, instantly..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50"
                        autoFocus
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <span className="text-xs border border-white/10 px-2 py-1 rounded text-muted-foreground">⌘ K</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { label: "Total Resources", value: "127", icon: FileText, color: "text-blue-400" },
                    { label: "Total Notes", value: "43", icon: StickyNote, color: "text-amber-400" },
                    { label: "Connections", value: "89", icon: Network, color: "text-purple-400" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                            <stat.icon className={`w-6 h-6 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                            <span className="text-xs font-mono text-muted-foreground uppercase">Increasing</span>
                        </div>
                        <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Recent Items */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Activity</h2>
                    <button className="text-sm text-muted-foreground hover:text-white transition-colors">View All</button>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            title: "Introduction to Machine Learning",
                            type: "Resource",
                            tags: ["AI", "ML", "Python"],
                            date: "2 hours ago",
                            desc: "Comprehensive guide to ML fundamentals and algorithms."
                        },
                        {
                            title: "Deep Learning Research Paper",
                            type: "PDF",
                            tags: ["Deep Learning", "Transformers"],
                            date: "Yesterday",
                            desc: "Latest advances in transformer architectures and attention mechanisms."
                        },
                        {
                            title: "React Best Practices 2025",
                            type: "Note",
                            tags: ["React", "JavaScript", "Frontend"],
                            date: "2 days ago",
                            desc: "Modern React patterns, server components, and performance optimization."
                        },
                        {
                            title: "Cognitive Science of Learning",
                            type: "Link",
                            tags: ["Psychology", "Learning"],
                            date: "3 days ago",
                            desc: "How spaced repetition and active recall physically change the brain."
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all group cursor-pointer">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                                {item.type === 'Resource' && <FileText className="w-5 h-5 text-blue-400" />}
                                {item.type === 'PDF' && <FileText className="w-5 h-5 text-red-400" />}
                                {item.type === 'Note' && <StickyNote className="w-5 h-5 text-amber-400" />}
                                {item.type === 'Link' && <ExternalLink className="w-5 h-5 text-emerald-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-4 mb-1">
                                    <h3 className="font-bold truncate group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <Clock className="w-3 h-3 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground font-mono">{item.date}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{item.desc}</p>
                                <div className="flex gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
