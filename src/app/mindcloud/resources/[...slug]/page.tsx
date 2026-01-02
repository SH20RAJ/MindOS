import { ArrowLeft, BookOpen, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data database
const MOCK_RESOURCES: Record<string, any> = {
    '1': {
        id: '1',
        title: "The Art of Doing Science and Engineering",
        author: "Richard Hamming",
        type: "book",
        cover: "https://m.media-amazon.com/images/I/71K6W6Y5MlL._AC_UF1000,1000_QL80_.jpg",
        description: "A master class on how to think like a scientist and engineer, delivered by the legendary Richard Hamming.",
        stats: {
            mastery: 84,
            nodes: 124,
            highlights: 45
        }
    },
    'effr3ew': {
        id: 'effr3ew',
        title: "Introduction to Cognitive Science",
        author: "MIT OpenCourseWare",
        type: "video",
        cover: "https://img.youtube.com/vi/AnMn-3rJ4qE/maxresdefault.jpg",
        description: "Foundational lectures on the computational nature of the human mind.",
        stats: {
            mastery: 12,
            nodes: 8,
            highlights: 2
        }
    }
};

export default async function ResourceCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

    // Parse Slug
    // 1 segment: /resources/1 -> type="book" (default), id="1"
    // 2 segments: /resources/book/1 -> type="book", id="1"

    let type = "book";
    let id = "";

    if (slug.length === 1) {
        id = slug[0];
    } else if (slug.length === 2) {
        type = slug[0];
        id = slug[1];
    } else {
        return notFound();
    }

    // Fallback for demo if id isn't in mock key directly
    const resource = MOCK_RESOURCES[id] || {
        id,
        title: "Untitled Resource",
        author: "Unknown Author",
        type: type,
        description: "Resource content not found.",
        stats: { mastery: 0, nodes: 0, highlights: 0 }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Link href="/mindcloud/resources" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Library
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Left Column - Metadata */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="aspect-[2/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        {resource.cover ? (
                            <img src={resource.cover} alt={resource.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-700">No Cover</div>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 bg-white text-black py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                            Start Reading
                        </button>
                        <button className="p-3 bg-zinc-900 border border-white/10 rounded-lg shrink-0 hover:bg-zinc-800 text-gray-400">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Mastery</span>
                            <span className="text-emerald-400 font-bold">{resource.stats.mastery}%</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${resource.stats.mastery}%` }} />
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                            <div className="bg-black/40 rounded p-2 text-center">
                                <div className="text-lg font-bold text-white">{resource.stats.nodes}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Nodes</div>
                            </div>
                            <div className="bg-black/40 rounded p-2 text-center">
                                <div className="text-lg font-bold text-white">{resource.stats.highlights}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Highlights</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded text-xs font-bold uppercase tracking-wider">
                                {resource.type}
                            </span>
                            <span className="text-gray-500 text-sm">{resource.author}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                            {resource.title}
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {resource.description}
                        </p>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-indigo-400" />
                            Extracted Concepts
                        </h3>
                        {/* Placeholder for Extracted Nodes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="p-4 bg-zinc-900 border border-white/10 rounded-xl hover:border-indigo-500/50 transition-colors cursor-pointer group">
                                    <div className="text-xs text-indigo-400 font-mono mb-2">#CONCEPT_{i}0{i}</div>
                                    <h4 className="font-bold text-white group-hover:text-indigo-200 transition-colors">
                                        The Hamming Distance
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-emerald-400" />
                            AI Synthesis
                        </h3>
                        <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl">
                            <p className="text-emerald-100/80 leading-relaxed italic">
                                "This resource argues that `Style` is distinct from knowledge, involving the deliberate choices one makes in problem solving..."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
