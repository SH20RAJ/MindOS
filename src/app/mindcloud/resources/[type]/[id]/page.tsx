import { ArrowLeft, FileText, Play, BookOpen, File } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data lookup - in a real app this would be a DB fetch
const RESOURCE_TYPES = ["pdf", "video", "article", "book", "documentation", "e-book"];

export default async function ResourceDetailPage({ params }: { params: Promise<{ type: string; id: string }> }) {
    const { type, id } = await params;
    const normalizedType = type.toLowerCase();

    if (!RESOURCE_TYPES.includes(normalizedType)) {
        notFound();
    }

    const typeIcon = {
        pdf: FileText,
        video: Play,
        article: FileText,
        book: BookOpen,
        documentation: File,
        "e-book": BookOpen
    }[normalizedType] || FileText;

    const Icon = typeIcon;

    return (
        <div className="p-8 max-w-4xl mx-auto h-full flex flex-col">
            <Link
                href="/mindcloud/resources"
                className="flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors self-start group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Library
            </Link>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center flex-1 min-h-[400px]">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-muted-foreground" />
                </div>

                <h1 className="text-3xl font-black mb-2 capitalize">
                    {normalizedType} Viewer
                </h1>

                <p className="text-muted-foreground max-w-md mb-8">
                    This is a placeholder for the resource viewer.
                    ID: <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded">{id}</span>
                </p>

                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg max-w-lg">
                    <p className="text-amber-400 text-sm font-medium">
                        🚧 Backend Integration Required
                    </p>
                    <p className="text-amber-400/80 text-xs mt-1">
                        The actual content viewer (PDF.js, Video Player, Markdown Renderer) will be implemented here once the backend storage is connected.
                    </p>
                </div>
            </div>
        </div>
    );
}
