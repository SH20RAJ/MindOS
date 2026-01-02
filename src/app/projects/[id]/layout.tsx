import { MOCK_PROJECTS } from "@/mock/data";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from "next/navigation";
import { ProjectTabs } from "@/components/projects/ProjectTabs";

export default async function ProjectLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Simulating Server Fetch
    const project = MOCK_PROJECTS.find(p => p.id === id);

    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-black text-white font-mono selection:bg-blue-500/30">
            {/* Top Navigation */}
            <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/projects" className="text-zinc-500 hover:text-white transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="h-6 w-px bg-white/10" />
                        <h1 className="font-bold text-sm tracking-widest uppercase">
                            {project.title}
                        </h1>
                    </div>
                </div>

                {/* Client Tabs */}
                <ProjectTabs projectId={id} />
            </div>

            {/* Content Area */}
            <div className="max-w-[1800px] mx-auto p-6 md:p-12 animate-in fade-in duration-500">
                {children}
            </div>
        </main>
    );
}
