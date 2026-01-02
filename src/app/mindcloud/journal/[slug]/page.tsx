import { ArrowLeft, Calendar, Clock, Edit3, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock Data (In real app, fetch from DB)
const MOCK_ENTRIES: Record<string, any> = {
    'entry-1': {
        id: 'entry-1',
        title: "Reflection on Spaced Repetition",
        date: "Oct 12, 2026",
        time: "10:42 AM",
        tags: ["Learning", "Meta-Cognition"],
        mood: "Productive",
        content: `
            <p className="mb-4">Today I realized that spaced repetition isn't just about memorizing facts, it's about altering the structural decay of neural pathways.</p>
            <p className="mb-4">I've been using the system for 3 weeks now, and the difference in recall for "Concept 42" vs "Concept 12" is staggering. The heatmaps don't lie.</p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Forgetting Curve</h3>
            <p>It's relentless. But having a visual dashboard that tells me exactly <em>when</em> I'm about to forget something changes the game. It turns memory into an inventory management problem.</p>
        `
    },
    'entry-2': {
        id: 'entry-2',
        title: "Project Alpha: Initial Brainstorm",
        date: "Oct 14, 2026",
        time: "02:15 PM",
        tags: ["Project", "Strategy"],
        mood: "Excited",
        content: `
            <p className="mb-4">Kicked off the new architecture for the retention engine today. The key challenge uses directed acyclic graphs (DAGs) to model the prerequisites of knowledge.</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                <li>Node A: Fundamentals of React</li>
                <li>Node B: Server Components (Depends on A)</li>
                <li>Node C: Streaming (Depends on B)</li>
            </ul>
            <p>If we can visualize this dependency tree for the student, they will never feel lost again. They'll know exactly 'where' they are in the map of knowledge.</p>
        `
    }
};

export default async function JournalEntryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // In a real app, strict check or fetch. For now, fallback to generic if ID missing in mock.
    const entry = MOCK_ENTRIES[slug] || {
        id: slug,
        title: "Untitled Entry",
        date: "Unknown Date",
        time: "--:--",
        tags: ["Uncategorized"],
        mood: "Neutral",
        content: "<p>Entry content not found.</p>"
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <nav className="mb-8 flex justify-between items-center">
                    <Link href="/mindcloud/journal" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Journal
                    </Link>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
                            <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </nav>

                <header className="mb-12 border-b border-white/10 pb-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {entry.tags.map((tag: string) => (
                            <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Tag className="w-3 h-3" /> {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        {entry.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {entry.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {entry.time}
                        </div>
                        <div className="px-3 py-1 bg-zinc-900 rounded border border-white/10 text-gray-300">
                            Mood: {entry.mood}
                        </div>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: entry.content }} />
                </article>
            </div>
        </div>
    );
}
