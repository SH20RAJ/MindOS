import { RetentionHeatmap } from "@/components/school/RetentionHeatmap";
import { ArrowUpRight, BrainCircuit, Users, Zap } from "lucide-react";
import Link from "next/link";
import { SchoolActivityFeed } from "@/components/school/SchoolActivityFeed";

export default function SchoolDashboard() {
    // This is now a Server Component
    // Future: Fetch data here

    return (
        <div className="p-8">
            <header className="mb-12">
                <h1 className="text-4xl font-black text-white mb-4 tracking-tight">COMMAND CENTER</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
                        <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest mb-1">Total Active Minds</div>
                        <div className="text-3xl font-bold text-white flex items-end gap-2">
                            128 <Users className="w-5 h-5 text-indigo-400 mb-1" />
                        </div>
                    </div>
                    <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
                        <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest mb-1">Avg. Retention</div>
                        <div className="text-3xl font-bold text-emerald-400 flex items-end gap-2">
                            84% <BrainCircuit className="w-5 h-5 mb-1" />
                        </div>
                    </div>
                    <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
                        <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest mb-1">Critical Alerts</div>
                        <div className="text-3xl font-bold text-red-400 flex items-end gap-2">
                            3 <Zap className="w-5 h-5 mb-1" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Main Content - Heatmap (Client Component) */}
                <div className="xl:col-span-2 space-y-8">
                    <RetentionHeatmap />

                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/school/actions/push" className="group p-6 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors flex items-center justify-center gap-3">
                            <span className="font-bold text-white text-lg">PUSH COGNITIVE UPDATE</span>
                            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center">
                            <span className="text-muted-foreground">Manage Curriculum nodes</span>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Activity Feed (New Client Component) */}
                <SchoolActivityFeed />
            </div>
        </div>
    );
}
