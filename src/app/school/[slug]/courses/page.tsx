import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Course Catalog | MindOS School",
};

import { Plus } from "lucide-react";
import Link from "next/link";

export default async function CoursesPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-white">Course Catalog</h1>
                <Link href={`/school/${slug}/courses/new`} className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Plus className="w-4 h-4" /> New Course
                </Link>
            </div>
            {/* Grid code from before... */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="h-32 bg-indigo-500/20 rounded-lg mb-4 flex items-center justify-center text-indigo-400 font-bold">
                            COVER IMAGE
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Physics 10{i}</h3>
                        <p className="text-sm text-gray-400 mb-4">Introduction to mechanics and thermodynamics.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>32 Students</span>
                            <span className="text-emerald-400">Active</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
