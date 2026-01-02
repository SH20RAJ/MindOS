"use client";

import { Project } from "@/types/learning";
import { Check, Play, BookOpen, Code, Brain } from "lucide-react";

export function ProjectDaily({ project }: { project: Project }) {
    // Mock daily tasks generated from the execution engine
    const tasks = [
        { id: 1, type: 'ingest', title: 'Read: "Quantum States vs Classical Bits"', time: '15m', completed: true },
        { id: 2, type: 'recall', title: 'Flashcards: Matrix Operations', time: '10m', completed: false },
        { id: 3, type: 'apply', title: 'Code: Initialize a Complex Number Class', time: '45m', completed: false },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Today's Queue */}
            <div className="space-y-6">
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Execution Queue</h2>
                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`p-4 rounded-xl border flex items-center gap-4 transition-all ${task.completed
                                    ? "bg-emerald-500/5 border-emerald-500/20 opacity-60"
                                    : "bg-zinc-900/50 border-white/10 hover:border-white/20"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${task.completed ? "bg-emerald-500 border-emerald-500" : "bg-transparent border-zinc-600"
                                }`}>
                                {task.completed ? <Check className="w-4 h-4 text-black" /> : <span className="text-xs text-zinc-500">{task.id}</span>}
                            </div>

                            <div className="flex-1">
                                <h3 className={`font-bold ${task.completed ? "text-emerald-500 line-through" : "text-white"}`}>
                                    {task.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    {task.type === 'ingest' && <BookOpen className="w-3 h-3 text-blue-400" />}
                                    {task.type === 'recall' && <Brain className="w-3 h-3 text-orange-400" />}
                                    {task.type === 'apply' && <Code className="w-3 h-3 text-purple-400" />}
                                    <span className="text-[10px] text-zinc-500 uppercase font-mono">{task.time}</span>
                                </div>
                            </div>

                            {!task.completed && (
                                <button className="p-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
                                    <Play className="w-4 h-4 fill-current" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Active Workspace */}
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-32 h-32 rounded-full border-4 border-zinc-800 border-t-purple-500 animate-spin" />
                <div>
                    <h3 className="text-xl font-bold text-white">Focus Mode</h3>
                    <p className="text-zinc-500 text-sm mt-2">
                        Select a task to initiate the immersive environment.
                    </p>
                </div>
            </div>
        </div>
    );
}
