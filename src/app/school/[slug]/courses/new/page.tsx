"use client";

import { ArrowRight, BrainCircuit, GripVertical, Layers, MousePointer2, Plus, Save, Settings2, Trash2 } from "lucide-react";
import { useState } from "react";

// Mock Nodes for the visual editor
const INITIAL_NODES = [
    { id: 1, x: 100, y: 100, title: "Week 1: Fundamentals", type: "module", color: "bg-indigo-500" },
    { id: 2, x: 400, y: 100, title: "Week 2: Advanced Logic", type: "module", color: "bg-purple-500" },
    { id: 3, x: 100, y: 300, title: "Assignment: Logic Gate Quiz", type: "task", color: "bg-emerald-500" },
    { id: 4, x: 400, y: 300, title: "Project: CPU Design", type: "task", color: "bg-amber-500" },
];

export default function CourseBuilderPage() {
    const [nodes, setNodes] = useState(INITIAL_NODES);

    return (
        <div className="h-screen flex flex-col bg-zinc-950 overflow-hidden">
            {/* Toolbar */}
            <header className="h-16 px-6 border-b border-white/10 bg-black flex justify-between items-center z-10">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                        <BrainCircuit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className="font-bold text-white text-sm">Course Graph Builder</h1>
                        <p className="text-xs text-gray-500">Editing: Intro to Computer Architecture</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-zinc-800 text-gray-300 text-xs font-bold rounded hover:bg-zinc-700 flex items-center gap-2">
                        <Settings2 className="w-3 h-3" /> Settings
                    </button>
                    <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded hover:bg-indigo-500 flex items-center gap-2">
                        <Save className="w-3 h-3" /> Save Graph
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar Palette */}
                <aside className="w-64 bg-black border-r border-white/10 p-4 flex flex-col gap-6 z-10">
                    <div>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Node Types</h3>
                        <div className="space-y-3">
                            <div className="p-3 bg-zinc-900 border border-white/10 rounded-lg cursor-grab hover:border-indigo-500/50 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                                <span className="text-sm font-medium text-gray-300">Module</span>
                            </div>
                            <div className="p-3 bg-zinc-900 border border-white/10 rounded-lg cursor-grab hover:border-emerald-500/50 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                <span className="text-sm font-medium text-gray-300">Quiz / Task</span>
                            </div>
                            <div className="p-3 bg-zinc-900 border border-white/10 rounded-lg cursor-grab hover:border-amber-500/50 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-amber-500" />
                                <span className="text-sm font-medium text-gray-300">Resource</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto p-4 bg-zinc-900 rounded-xl border border-white/10 text-xs text-gray-500">
                        <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold">
                            <MousePointer2 className="w-3 h-3" /> Tip
                        </div>
                        Drag nodes to canvas to create your curriculum path.
                    </div>
                </aside>

                {/* Canvas Area */}
                <main className="flex-1 relative bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:24px_24px] overflow-scroll">

                    {/* SVG Connector Lines (Mocked positions) */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                        {/* Line 1 -> 2 */}
                        <path d="M 350 130 C 375 130, 375 130, 400 130" stroke="white" strokeWidth="2" fill="none" />
                        {/* Line 1 -> 3 */}
                        <path d="M 150 160 C 150 200, 150 200, 150 300" stroke="white" strokeWidth="2" fill="none" />
                        {/* Line 2 -> 4 */}
                        <path d="M 450 160 C 450 200, 450 200, 450 300" stroke="white" strokeWidth="2" fill="none" />
                    </svg>

                    {/* Nodes */}
                    {nodes.map(node => (
                        <div
                            key={node.id}
                            className="absolute w-[250px] bg-zinc-900 border border-white/10 rounded-xl shadow-2xl group hover:border-indigo-500/50 transition-colors"
                            style={{ left: node.x, top: node.y }}
                        >
                            <div className={`h-1.5 w-full ${node.color} rounded-t-xl`} />
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-white text-sm">{node.title}</h4>
                                    <div className="cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                                        <GripVertical className="w-4 h-4 text-gray-500" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <button className="p-1.5 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors">
                                        <Plus className="w-3 h-3" />
                                    </button>
                                    <button className="p-1.5 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors ml-auto">
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </main>
            </div>
        </div>
    );
}
