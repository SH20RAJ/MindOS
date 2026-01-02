"use client";

import { ArrowLeft, BookOpen, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewJournalEntryPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/mindcloud/journal");
    };

    return (
        <div className="max-w-3xl mx-auto h-full flex flex-col p-8">
            <Link href="/mindcloud/journal" className="flex items-center gap-2 text-muted-foreground hover:text-white mb-6 transition-colors self-start">
                <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="mb-8 space-y-4">
                    <input
                        required
                        placeholder="Title your thought..."
                        className="w-full bg-transparent text-4xl font-black tracking-tight placeholder:text-muted-foreground/30 focus:outline-none border-b border-transparent focus:border-white/10 pb-4 transition-all"
                        autoFocus
                    />
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                            <BookOpen className="w-3 h-3" />
                            <span>Reflection</span>
                        </div>
                        <input
                            placeholder="Add tags..."
                            className="bg-transparent text-sm text-muted-foreground focus:outline-none focus:text-white transition-colors"
                        />
                    </div>
                </div>

                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                    <textarea
                        required
                        placeholder="Start writing..."
                        className="w-full h-full bg-transparent resize-none focus:outline-none text-lg leading-relaxed font-serif text-gray-300 placeholder:text-muted-foreground/30"
                    />
                    <div className="absolute bottom-6 right-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transform"
                        >
                            {isSubmitting ? (
                                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            ) : (
                                <Save className="w-4 h-4" />
                            )}
                            {isSubmitting ? "Saving..." : "Save Entry"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
