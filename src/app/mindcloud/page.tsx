import { DashboardSearch } from "@/components/mindcloud/DashboardSearch";
import { RecentActivity } from "@/components/mindcloud/RecentActivity";
import { FileText, Network, StickyNote } from "lucide-react";
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
                <DashboardSearch />
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

                <RecentActivity items={[
                    {
                        title: "Introduction to Machine Learning",
                        type: "Resource",
                        tags: ["AI", "ML", "Python"],
                        date: "2 hours ago",
                        desc: "Comprehensive guide to ML fundamentals and algorithms.",
                        href: "/mindcloud/resources/1"
                    },
                    {
                        title: "Deep Learning Research Paper",
                        type: "PDF",
                        tags: ["Deep Learning", "Transformers"],
                        date: "Yesterday",
                        desc: "Latest advances in transformer architectures and attention mechanisms.",
                        href: "/mindcloud/resources/2"
                    },
                    {
                        title: "React Best Practices 2025",
                        type: "Note",
                        tags: ["React", "JavaScript", "Frontend"],
                        date: "2 days ago",
                        desc: "Modern React patterns, server components, and performance optimization.",
                        href: "/mindcloud/journal/entry-2"
                    },
                    {
                        title: "Cognitive Science of Learning",
                        type: "Link",
                        tags: ["Psychology", "Learning"],
                        date: "3 days ago",
                        desc: "How spaced repetition and active recall physically change the brain.",
                        href: "/mindcloud/resources/3"
                    },
                ]} />
            </div>
        </div>
    );
}
