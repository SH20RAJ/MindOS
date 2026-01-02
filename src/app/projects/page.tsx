import { Plus, LayoutGrid, Activity, Play } from "lucide-react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/mock/data";

export default function ProjectsPage() {
    const projects = MOCK_PROJECTS;

    return (
        <main className="min-h-screen bg-black text-white p-8 font-mono selection:bg-purple-500/30">
            <div className="max-w-[1800px] mx-auto space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">
                            <LayoutGrid className="w-3 h-3" />
                            <span>System Architecture</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                            Project Hub
                        </h1>
                    </div>
                </header>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const completed = project.milestones.filter(m => m.isCompleted).length;
                        const total = project.milestones.length;
                        const percent = Math.round((completed / total) * 100);

                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="group relative bg-zinc-950 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className="w-5 h-5 text-white fill-white" />
                                </div>

                                <div className="p-8 flex-1 space-y-6">
                                    {/* ID & Status */}
                                    <div className="flex justify-between items-start">
                                        <span className="font-mono text-xs text-zinc-600 font-bold">
                                            {project.id.toUpperCase()}
                                        </span>
                                        <span className={`px-2 py-1 text-[10px] uppercase font-bold border rounded-sm ${project.status === 'in_progress' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'
                                            }`}>
                                            {project.status.replace('_', ' ')}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <div>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-2">
                                            {project.title}
                                        </h2>
                                        <p className="text-zinc-500 text-sm line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-mono text-zinc-500">
                                            <span>COMPETENCE</span>
                                            <span className="text-white">{percent}%</span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-900">
                                            <div
                                                className="h-full bg-blue-500 transition-all duration-1000"
                                                style={{ width: `${percent}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                    {/* New Project Action */}
                    <button className="group relative min-h-[300px] border border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all text-zinc-600 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Plus className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest font-bold">
                            Initialize Protocol
                        </span>
                    </button>
                </div>
            </div>
        </main>
    );
}
