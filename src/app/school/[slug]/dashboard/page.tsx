import { RetentionHeatmap } from "@/components/school/RetentionHeatmap";
import { SchoolActivityFeed } from "@/components/school/SchoolActivityFeed";
import { MOCK_SCHOOLS } from "@/mock/school-data";
import { ArrowUpRight, BrainCircuit, Users, Zap } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const school = MOCK_SCHOOLS.find(s => s.slug === slug);
    return {
        title: `${school?.name || 'School'} Dashboard | MindOS`,
    };
}

export default async function SchoolDashboard({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const school = MOCK_SCHOOLS.find(s => s.slug === slug);

    if (!school) return <div className="p-8 text-white">404 School Not Found</div>;

    return (
        <div className="p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-white tracking-tight mb-6">Command Center</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-sm text-gray-500 uppercase font-bold mb-1">Retention Pulse</div>
                        <div className="text-4xl font-black text-emerald-400">84%</div>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-sm text-gray-500 uppercase font-bold mb-1">Active Students</div>
                        <div className="text-4xl font-black text-white">1,204</div>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-sm text-gray-500 uppercase font-bold mb-1">Assignments Due</div>
                        <div className="text-4xl font-black text-indigo-400">12</div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-8">
                    <RetentionHeatmap />
                </div>
                <SchoolActivityFeed />
            </div>
        </div>
    );
}
