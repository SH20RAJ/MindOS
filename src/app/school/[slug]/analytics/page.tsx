import { ArrowDown, ArrowUp, Calendar, Filter, MoreHorizontal, RefreshCw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Retention Analytics | MindOS School",
};

export default function AnalyticsPage() {
    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-black text-white">Retention Analytics</h1>
                    <p className="text-gray-400">Real-time cognitive decay tracking.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg border border-white/10 flex items-center gap-2 hover:bg-zinc-800">
                        <Calendar className="w-3 h-3" /> Last 30 Days
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg flex items-center gap-2 hover:bg-indigo-500">
                        <RefreshCw className="w-3 h-3" /> Refresh Data
                    </button>
                </div>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Avg Retention", value: "87%", trend: "+2.4%", good: true },
                    { label: "Active Students", value: "842", trend: "+12", good: true },
                    { label: "Decay Rate", value: "-4.2%", trend: "-0.5%", good: false }, // Lower decay is usually good, but let's assume negative trend means more decay here for visual variety, or make logic clear
                    { label: "Study Hours", value: "12.5k", trend: "+8.1%", good: true },
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                        <div className="flex items-end justify-between">
                            <div className="text-3xl font-black text-white">{stat.value}</div>
                            <div className={`flex items-center text-xs font-bold ${stat.good ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {stat.good ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                                {stat.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Retention Graph (CSS Implementation) */}
                <div className="lg:col-span-2 bg-zinc-900 border border-white/10 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-white">Global Retention Curve</h3>
                        <button className="p-1 hover:bg-white/10 rounded"><MoreHorizontal className="w-4 h-4 text-gray-500" /></button>
                    </div>

                    <div className="h-[300px] flex items-end justify-between gap-2 px-2 pb-4 border-b border-white/5 relative">
                        {/* Y-Axis labels */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-600 pointer-events-none -ml-6">
                            <span>100%</span>
                            <span>50%</span>
                            <span>0%</span>
                        </div>

                        {/* Bars / Points */}
                        {[65, 70, 75, 72, 78, 82, 85, 84, 88, 90, 89, 92, 94, 91, 88, 86, 89, 92, 95, 96].map((h, i) => (
                            <div key={i} className="w-full bg-indigo-500/20 rounded-t-sm hover:bg-indigo-500/50 transition-colors relative group h-full flex flex-col justify-end">
                                <div
                                    className="bg-indigo-500 w-full rounded-t-sm relative transition-all duration-1000 ease-out min-h-[4px]"
                                    style={{ height: `${h}%` }}
                                >
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        {h}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-500 uppercase font-mono">
                        <span>Day 1</span>
                        <span>Day 10</span>
                        <span>Day 20</span>
                    </div>
                </div>

                {/* Performance Heatmap */}
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-6">Topic Mastery Heatmap</h3>
                    <div className="space-y-4">
                        {[
                            { name: "Logic Gates", val: 92 },
                            { name: "Binary Arithmetic", val: 88 },
                            { name: "Memory Hierarchy", val: 76 },
                            { name: "Instruction Sets", val: 84 },
                            { name: "Pipelining", val: 62 },
                        ].map((topic, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs text-gray-400 mb-1">
                                    <span>{topic.name}</span>
                                    <span>{topic.val}%</span>
                                </div>
                                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${topic.val > 90 ? 'bg-emerald-500' : topic.val > 70 ? 'bg-indigo-500' : 'bg-rose-500'}`}
                                        style={{ width: `${topic.val}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                        <h4 className="text-rose-400 font-bold text-sm mb-1">Attention Needed</h4>
                        <p className="text-xs text-rose-200/80">
                            "Pipelining" mastery dropped by 12% this week. Recommended intervention: Assign review module #4.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
