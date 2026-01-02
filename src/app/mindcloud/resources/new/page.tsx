"use client";

import { ArrowLeft, Save, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewResourcePage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/mindcloud/resources");
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <Link href="/mindcloud/resources" className="flex items-center gap-2 text-muted-foreground hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                        <UploadCloud className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight">Add New Resource</h1>
                        <p className="text-muted-foreground">Upload a file or save a link to your digital garden.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold ml-1">Title</label>
                        <input
                            required
                            placeholder="e.g., Introduction to Neural Networks"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">Type</label>
                            <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 appearance-none">
                                <option>Article</option>
                                <option>PDF</option>
                                <option>Video</option>
                                <option>Book</option>
                                <option>Course</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">URL (Optional)</label>
                            <input
                                placeholder="https://..."
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold ml-1">Tags</label>
                        <input
                            placeholder="Separated by commas (e.g., AI, Math, Python)"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold ml-1">Description</label>
                        <textarea
                            rows={4}
                            placeholder="Why is this resource valuable?"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50 resize-none"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            ) : (
                                <Save className="w-4 h-4" />
                            )}
                            {isSubmitting ? "Saving..." : "Save Resource"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
