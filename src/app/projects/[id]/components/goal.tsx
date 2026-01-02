import { Project } from "@/types/learning";
import { Target, Flag, Trophy } from "lucide-react";

export function ProjectGoal({ project }: { project: Project }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            <div className="col-span-2 space-y-8">
                <div>
                    <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Prime Directive</h2>
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        {project.description}
                    </h1>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest">Success Criteria</h3>
                    <div className="space-y-2">
                        {["Explain concepts without notes", "Build a working simulation", "Pass simulated final exam"].map((criteria, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-zinc-900/20">
                                <div className="mt-1 w-5 h-5 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                                    {i === 2 ? <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full" /> : null}
                                </div>
                                <span className="text-lg text-zinc-300">{criteria}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-1 bg-zinc-900/30 border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-yellow-500" />
                </div>
                <div>
                    <div className="font-serif italic text-zinc-500 text-lg mb-2">"The ultimate goal is not knowledge, but action."</div>
                    <div className="text-xs font-bold text-zinc-700 uppercase tracking-widest">— Herbert Spencer</div>
                </div>
            </div>
        </div>
    );
}
