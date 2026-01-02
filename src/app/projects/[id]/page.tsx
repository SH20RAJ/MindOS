import { ProjectHeader } from "@/components/project/ProjectHeader";
import { CognitivePipeline } from "@/components/project/CognitivePipeline";
import { MOCK_PROJECTS } from "@/mock/data";
import { ArrowLeft, Activity, Cpu, Network, Zap, Settings, Share2, Command } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Direct Mock Access (Simulating Server-Side DB Fetch)
    const project = MOCK_PROJECTS.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4 text-white font-mono">
                <div className="w-16 h-16 border border-red-500/50 rounded-full flex items-center justify-center animate-pulse text-red-500">
                    <Activity className="w-8 h-8" />
                </div>
                <h1 className="text-xl font-bold tracking-widest uppercase text-red-500">Signal Lost</h1>
                <p className="text-zinc-500 text-sm">Project ID "{id}" could not be resolved.</p>
                <Link href="/projects" className="mt-8 px-6 py-3 border border-white/10 hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3" /> Return to Hub
                </Link>
            </div>
        );
    }

    const completedMilestones = project.milestones.filter(m => m.isCompleted).length;
    const progress = Math.round((completedMilestones / project.milestones.length) * 100) || 0;

    return (
        <main className="min-h-screen bg-black text-white font-mono selection:bg-purple-500/30 pb-24">
            {/* Top Command Bar */}
            <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/projects" className="text-zinc-500 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                        <Command className="w-3 h-3" />
                        <span>PROTOCOL: {project.id.toUpperCase()}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="h-2 w-24 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="text-xs font-bold text-purple-400">{progress}%</span>
                    <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-zinc-500 hover:text-white">
                        <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-zinc-500 hover:text-white">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto p-6 space-y-8">
                {/* Header Section */}
                <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/5 pb-8">
                    <div className="col-span-1 lg:col-span-8 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-md text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4">
                                <Activity className="w-3 h-3" /> Active Protocol
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                                {project.title}
                            </h1>
                            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs font-bold">
                            <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded flex items-center gap-3">
                                <span className="text-zinc-500">STATUS</span>
                                <span className="text-white uppercase">{project.status.replace('_', ' ')}</span>
                            </div>
                            <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded flex items-center gap-3">
                                <span className="text-zinc-500">EST. TIME</span>
                                <span className="text-white">45 HOURS</span>
                            </div>
                            <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded flex items-center gap-3">
                                <span className="text-zinc-500">DIFFICULTY</span>
                                <span className="text-white">INTERMEDIATE</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="col-span-1 lg:col-span-4 grid grid-cols-2 gap-4">
                        <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-xl flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
                            <Cpu className="w-6 h-6 text-zinc-600 group-hover:text-purple-500 transition-colors" />
                            <div>
                                <div className="text-2xl font-black text-white">12</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Concepts</div>
                            </div>
                        </div>
                        <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-xl flex flex-col justify-between group hover:border-blue-500/30 transition-colors">
                            <Network className="w-6 h-6 text-zinc-600 group-hover:text-blue-500 transition-colors" />
                            <div>
                                <div className="text-2xl font-black text-white">85%</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Retention</div>
                            </div>
                        </div>
                        <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-xl flex flex-col justify-between group hover:border-orange-500/30 transition-colors">
                            <Zap className="w-6 h-6 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                            <div>
                                <div className="text-2xl font-black text-white">4d</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Streak</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Action Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Milestones (Directives) */}
                    <div className="col-span-1 lg:col-span-4 space-y-6">
                        <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">
                            Active Directives
                        </h2>
                        <div className="space-y-3">
                            {project.milestones.map((milestone, idx) => (
                                <div
                                    key={milestone.id}
                                    className={`p-4 rounded-lg border transition-all ${milestone.isCompleted
                                            ? "bg-emerald-500/5 border-emerald-500/20 opacity-50"
                                            : idx === 0 || project.milestones[idx - 1]?.isCompleted // Logic to highlight current
                                                ? "bg-white/5 border-white/20 hover:border-purple-500/50 cursor-pointer"
                                                : "bg-zinc-950/50 border-white/5 text-zinc-600"
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-1 w-2 h-2 rounded-full ${milestone.isCompleted ? 'bg-emerald-500' : 'bg-current'}`} />
                                        <div>
                                            <h3 className={`text-sm font-bold ${milestone.isCompleted ? 'text-emerald-500 line-through' : 'text-white'}`}>
                                                {milestone.title}
                                            </h3>
                                            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Cognitive Pipeline */}
                    <div className="col-span-1 lg:col-span-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-6">
                            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                                Cognitive Pipeline
                            </h2>
                            <span className="text-[10px] text-zinc-600 font-mono">LIVE FEED</span>
                        </div>

                        {/* 
                            Using the CognitivePipeline component, but ensuring it fits nicely.
                            Ideally, we'd pass real data here.
                        */}
                        <CognitivePipeline
                            // Mocking generic items for now as per the component's strict prop requirement
                            initialItems={[
                                { id: 1, title: "Heisenberg Uncertainty Principle", type: "concept", status: "synthesized", retention: 88 },
                                { id: 2, title: "Wave-Particle Duality", type: "concept", status: "synthesized", retention: 92 },
                                { id: 3, title: "Lecture 3: Linear Algebra", type: "source", status: "ingested", retention: 100 },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
