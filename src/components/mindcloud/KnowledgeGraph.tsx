"use client";

import { motion } from "framer-motion";
import { Network, Plus, Search, Share2, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

// Mock Data for the Graph
const NODES = [
    { id: "1", label: "Artificial Intelligence", x: 400, y: 300, r: 40, color: "#3b82f6" }, // Blue
    { id: "2", label: "Machine Learning", x: 250, y: 200, r: 35, color: "#60a5fa" }, // Lighter Blue
    { id: "3", label: "Neural Networks", x: 200, y: 400, r: 30, color: "#93c5fd" },
    { id: "4", label: "Deep Learning", x: 100, y: 350, r: 30, color: "#a5f3fc" }, // Cyan
    { id: "5", label: "React", x: 600, y: 250, r: 35, color: "#eab308" }, // Yellow
    { id: "6", label: "Next.js", x: 700, y: 150, r: 30, color: "#facc15" },
    { id: "7", label: "Server Components", x: 750, y: 300, r: 25, color: "#fde047" },
    { id: "8", label: "Cognitive Science", x: 500, y: 500, r: 35, color: "#a855f7" }, // Purple
    { id: "9", label: "Spaced Repetition", x: 400, y: 600, r: 25, color: "#d8b4fe" },
    { id: "10", label: "Active Recall", x: 600, y: 550, r: 25, color: "#d8b4fe" },
];

const EDGES = [
    { from: "1", to: "2" },
    { from: "2", to: "3" },
    { from: "3", to: "4" },
    { from: "1", to: "5" }, // Bridge between AI and React (e.g., AI integration)
    { from: "5", to: "6" },
    { from: "6", to: "7" },
    { from: "1", to: "8" },
    { from: "8", to: "9" },
    { from: "8", to: "10" },
];

export function KnowledgeGraph() {
    const [scale, setScale] = useState(1);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    return (
        <div className="h-full flex flex-col relative overflow-hidden bg-black text-white">
            {/* Toolbar */}
            <div className="absolute top-6 left-6 z-10 flex gap-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        placeholder="Search graph..."
                        className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 w-64 transition-all"
                    />
                </div>
            </div>

            <div className="absolute top-6 right-6 z-10 flex gap-2">
                <button
                    onClick={() => setScale(s => Math.min(s + 0.1, 2))}
                    className="p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <ZoomIn className="w-5 h-5 text-muted-foreground" />
                </button>
                <button
                    onClick={() => setScale(s => Math.max(s - 0.1, 0.5))}
                    className="p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <ZoomOut className="w-5 h-5 text-muted-foreground" />
                </button>
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" /> Add Node
                </button>
            </div>

            {/* Graph Visualization */}
            <div className="flex-1 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden flex items-center justify-center">
                <motion.div
                    className="w-full h-full relative"
                    style={{ scale }}
                    animate={{ scale }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <svg className="w-full h-full" viewBox="0 0 800 600">
                        {/* Edges */}
                        {EDGES.map((edge, i) => {
                            const fromNode = NODES.find(n => n.id === edge.from);
                            const toNode = NODES.find(n => n.id === edge.to);
                            if (!fromNode || !toNode) return null;

                            return (
                                <line
                                    key={i}
                                    x1={fromNode.x} y1={fromNode.y}
                                    x2={toNode.x} y2={toNode.y}
                                    stroke="white"
                                    strokeOpacity="0.1"
                                    strokeWidth="1.5"
                                />
                            );
                        })}

                        {/* Nodes */}
                        {NODES.map((node) => {
                            const isSelected = selectedNode === node.id;
                            return (
                                <g
                                    key={node.id}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
                                >
                                    {/* Pulse effect for selected node */}
                                    {isSelected && (
                                        <circle
                                            cx={node.x} cy={node.y}
                                            r={node.r + 10}
                                            fill={node.color}
                                            opacity="0.2"
                                            className="animate-pulse"
                                        />
                                    )}
                                    {/* Main Node Circle */}
                                    <circle
                                        cx={node.x} cy={node.y}
                                        r={node.r}
                                        fill="#0a0a0a" // Dark center
                                        stroke={node.color}
                                        strokeWidth={isSelected ? 3 : 1.5}
                                        className="transition-all duration-300"
                                    />
                                    {/* Inner Color Glow */}
                                    <circle
                                        cx={node.x} cy={node.y}
                                        r={node.r * 0.8}
                                        fill={node.color}
                                        opacity="0.1"
                                    />

                                    {/* Label */}
                                    <foreignObject x={node.x - node.r} y={node.y - node.r} width={node.r * 2} height={node.r * 2} style={{ pointerEvents: 'none' }}>
                                        <div className="w-full h-full flex items-center justify-center text-[8px] font-bold text-center leading-tight text-white/90 p-1">
                                            {node.label}
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}
                    </svg>
                </motion.div>
            </div>

            {/* Selected Node Inspector Pane */}
            {selectedNode && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 shadow-2xl z-20"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-2xl font-black tracking-tight mb-1">
                                {NODES.find(n => n.id === selectedNode)?.label}
                            </h2>
                            <span className="text-xs text-blue-400 font-mono">NODE ID: {selectedNode}</span>
                        </div>
                        <button onClick={() => setSelectedNode(null)} className="text-muted-foreground hover:text-white">
                            <span className="sr-only">Close</span>
                            &times;
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase mb-2">Description</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                A brief description of the node would go here. In a real application, this would pull from the node's metadata.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3">Connections (3)</h3>
                            <div className="space-y-2">
                                {["Machine Learning", "Data Science", "Python"].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-white/5 cursor-pointer group">
                                        <Network className="w-4 h-4 text-muted-foreground group-hover:text-blue-400" />
                                        <span className="text-sm font-medium">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex gap-2">
                            <button className="flex-1 bg-white text-black py-2 rounded-lg font-bold text-sm hover:opacity-90">
                                Open Entry
                            </button>
                            <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5">
                                <Share2 className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Footer Info */}
            <div className="absolute bottom-6 left-6 text-xs text-muted-foreground font-mono">
                <span className="text-white">127</span> Nodes &bull; <span className="text-white">89</span> Connections
            </div>
        </div>
    );
}
