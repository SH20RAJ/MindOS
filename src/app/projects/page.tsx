import { Plus, LayoutGrid, Target, Activity, Clock, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/mock/data";

export default function ProjectsPage() {
    const projects = MOCK_PROJECTS;

    return (
        <main className="min-h-screen bg-black text-white p-6 font-mono selection:bg-blue-500/30">
            <div className="max-w-[1800px] mx-auto space-y-8">
                {/* OS Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-[10px] text-blue-500 uppercase tracking-widest mb-1">
                            <Activity className="w-3 h-3 animate-pulse" />
                            <span>System Status: Nominal</span>
                        </div>
                        <h1 className="text-3xl font-black tracking-tighter uppercase">Active Directives</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-8 text-xs text-zinc-500">
                            <div>
                                <span className="block text-white font-bold">04</span>
                                <span>RUNNING</span>
                            </div>
                            <div>
                                <span className="block text-white font-bold">12</span>
                                <span>VELOCITY</span>
                            </div>
                            <div>
                                <span className="block text-white font-bold">98%</span>
                                <span>EFFICIENCY</span>
                            </div>
                        </div>
                        <Link
                            href="/projects/new"
                            className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-3 h-3" /> Initialize
                        </Link>
                    </div>
                </header>

                {/* Process Matrix (Table/List View) */}
                <div className="border border-white/10 rounded-sm bg-zinc-950/50">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/10 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-4">Directive Protocol</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-3">Next Milestone</div>
                        <div className="col-span-2 text-right">Action</div>
                    </div>

                    {/* Rows */}
                    {projects.length > 0 ? (
                        <div className="divide-y divide-white/5">
                            {projects.map((project) => (
                                <div key={project.id} className="group grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-white/5 transition-colors">
                                    {/* ID */}
                                    <div className="col-span-1 text-xs text-zinc-600 font-bold">
                                        {project.id.toUpperCase()}
                                    </div>

                                    {/* Title */}
                                    <div className="col-span-4">
                                        <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                                            {project.title}
                                        </h3>
                                        <p className="text-[10px] text-zinc-500 truncate mt-1">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Status */}
                                    <div className="col-span-2">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-sm text-[10px] uppercase font-bold border ${statusStyles(project.status)}`}>
                                            {project.status.replace('_', ' ')}
                                        </span>
                                    </div>

                                    {/* Milestone */}
                                    <div className="col-span-3">
                                        {project.milestones.find(m => !m.isCompleted) ? (
                                            <div className="flex items-center gap-2 text-xs text-zinc-300">
                                                <Target className="w-3 h-3 text-zinc-500" />
                                                <span className="truncate">
                                                    {project.milestones.find(m => !m.isCompleted)?.title}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-emerald-500 flex items-center gap-2">
                                                <Zap className="w-3 h-3" /> Protocol Complete
                                            </span>
                                        )}
                                    </div>

                                    {/* Action */}
                                    <div className="col-span-2 flex justify-end">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
                                        >
                                            ENGAGE <ChevronRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <p className="text-zinc-500 text-sm">SYSTEM IDLE. NO ACTIVE PROCESSES.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

function statusStyles(status: string) {
    switch (status) {
        case 'in_progress':
            return "bg-blue-500/10 border-blue-500/30 text-blue-400";
        case 'completed':
            return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
        case 'blocked':
            return "bg-red-500/10 border-red-500/30 text-red-400";
        default:
            return "bg-zinc-500/10 border-zinc-500/30 text-zinc-400";
    }
}
