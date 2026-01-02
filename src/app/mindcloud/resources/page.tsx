import { ResourcesGrid } from "@/components/mindcloud/ResourcesGrid";
import { ResourcesSearch } from "@/components/mindcloud/ResourcesSearch";
import { Filter, Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Resources | MindCloud",
    description: "Library of your learning materials.",
};

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
                    <Link href="/mindcloud/resources/new" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
                        <Plus className="w-4 h-4" /> Add Resource
                    </Link>
                </div>
            </div>

            {/* Search Bar */}
            <ResourcesSearch />

            {/* Resource Grid */}
            <ResourcesGrid resources={[
                { title: "Attention Is All You Need", type: "PDF", tags: ["AI", "Transformer"], added: "2 days ago", size: "2.4 MB" },
                { title: "The Bitter Lesson", type: "Article", tags: ["AI", "Philosophy"], added: "5 days ago", size: "15 KB" },
                { title: "React Server Components Docs", type: "Documentation", tags: ["React", "Web"], added: "1 week ago", size: "-" },
                { title: "Calculus Vol 1", type: "Book", tags: ["Math"], added: "2 weeks ago", size: "150 MB" },
                { title: "Huberman Lab: Focus Protocol", type: "Video", tags: ["Neuroscience", "Health"], added: "3 weeks ago", size: "-" },
                { title: "Design Systems Handbook", type: "E-Book", tags: ["Design", "UI/UX"], added: "1 month ago", size: "12 MB" },
            ]} />
        </div>
    );
}
