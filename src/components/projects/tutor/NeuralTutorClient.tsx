"use client";

import {
    Send, Sparkles, User, Code2, Brain, ChevronRight,
    Lightbulb, Play, CheckCircle2, Maximize2, Minimize2,
    Video, Network, FileCode, MonitorPlay, PanelRightClose,
    PanelRightOpen, Bot, Eraser, PenTool, Download
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

// --- Types ---
type ContextType = 'concept' | 'code' | 'quiz' | 'mindmap' | 'video' | 'preview' | 'empty';

interface ContextPayload {
    type: ContextType;
    title?: string;
    content?: string;
    language?: string; // for code
    url?: string; // for video
    nodes?: { id: string, label: string, x: number, y: number, color: string }[]; // for mindmap
    edges?: { from: string, to: string }[]; // for mindmap
    options?: string[]; // for quiz
}

interface Message {
    role: 'ai' | 'user';
    content: string;
    context: ContextPayload;
    timestamp: Date;
}

// --- Component ---
export function NeuralTutorClient({ projectId }: { projectId: string }) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'ai',
            content: "Neural Link Established. I am ready to accelerate your 'Linear Algebra' project. \n\nI can generate Mindmaps, run Python simulations, or find relevant lectures. Where should we begin?",
            context: { type: 'empty' },
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [activeContext, setActiveContext] = useState<ContextPayload>({ type: 'empty' });
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg, context: { type: 'empty' }, timestamp: new Date() }]);
        setInput("");
        setIsTyping(true);

        // Simulate AI "Thinking" and Generative Response
        setTimeout(() => {
            const turn = messages.length;
            let responseContent = "";
            let newContext: ContextPayload = { type: 'empty' };

            // Turn-based Demo Logic
            if (userMsg.toLowerCase().includes('mindmap') || turn === 1) {
                responseContent = "Generating conceptual topology for **Eigenvectors**. Visualizing relationships between Matrix Transformations and Vector Scaling.";
                newContext = {
                    type: 'mindmap',
                    title: 'Eigen Theory Map',
                    nodes: [
                        { id: '1', label: 'Linear Transformation', x: 300, y: 50, color: '#6366f1' },
                        { id: '2', label: 'Matrix A', x: 200, y: 150, color: '#8b5cf6' },
                        { id: '3', label: 'Vector v', x: 400, y: 150, color: '#8b5cf6' },
                        { id: '4', label: 'Eigenvalue λ', x: 300, y: 300, color: '#ec4899' },
                        { id: '5', label: 'Scaling Factor', x: 300, y: 400, color: '#10b981' }
                    ],
                    edges: [
                        { from: '1', to: '2' },
                        { from: '1', to: '3' },
                        { from: '2', to: '4' },
                        { from: '3', to: '4' },
                        { from: '4', to: '5' }
                    ]
                };
            } else if (userMsg.toLowerCase().includes('code') || turn === 2) {
                responseContent = "Deploying Python Environment... \nHere is a visualization script for the transformation. You can run this directly.";
                newContext = {
                    type: 'code',
                    title: 'Vector_Transform.py',
                    language: 'python',
                    content: `import numpy as np\nimport matplotlib.pyplot as plt\n\ndef plot_vector(vec, color='b'):\n    plt.quiver(0, 0, vec[0], vec[1], angles='xy', scale_units='xy', scale=1, color=color)\n\nv = np.array([1, 2])\nA = np.array([[2, 0], [0, 2]])\n\ntransformed_v = A.dot(v)\n\nprint(f"Original: {v}, Transformed: {transformed_v}")`
                };
            } else if (userMsg.toLowerCase().includes('video') || turn === 3) {
                responseContent = "I found a highly relevant segment from 3Blue1Brown regarding this topic. Syncing playback...";
                newContext = {
                    type: 'video',
                    title: 'Visualizing Linear Transformations',
                    url: 'https://www.youtube.com/embed/fNk_zzaMoSs?start=120' // Mock URL
                };
            } else {
                responseContent = "Would you like me to create a quiz to test this concept?";
                newContext = { type: 'concept', title: 'Deep Learning Connection', content: 'Eigenvalues determine the stability of deep networks during backpropagation (Gradient Explosion/Vanishing).' };
            }

            setMessages(prev => [...prev, { role: 'ai', content: responseContent, context: newContext, timestamp: new Date() }]);
            setActiveContext(newContext);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-80px)] bg-black flex overflow-hidden relative font-sans">

            {/* BACKGROUND AMBIENCE */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* LEFT: NEURAL FEED (Sidebar) */}
            <AnimatePresence initial={false}>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "25%", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="border-r border-white/10 bg-black/50 backdrop-blur-xl flex flex-col z-20 relative"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">System Online</span>
                            </div>
                            <button onClick={() => setIsSidebarOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                                <PanelRightClose className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Chat Feed */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai'
                                            ? 'bg-zinc-900 border border-white/5 text-gray-300'
                                            : 'bg-indigo-600 text-white rounded-tr-sm'
                                        }`}>
                                        <div className="whitespace-pre-wrap">{msg.content}</div>
                                    </div>

                                    {/* Action Chips for AI Context */}
                                    {msg.role === 'ai' && msg.context.type !== 'empty' && (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveContext(msg.context)}
                                            className="ml-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"
                                        >
                                            {msg.context.type === 'mindmap' && <Network className="w-3 h-3 text-purple-400" />}
                                            {msg.context.type === 'code' && <Code2 className="w-3 h-3 text-blue-400" />}
                                            {msg.context.type === 'video' && <Video className="w-3 h-3 text-red-400" />}
                                            <span className="text-[10px] uppercase font-bold text-zinc-500 group-hover:text-indigo-300">
                                                Restore {msg.context.type}
                                            </span>
                                        </motion.button>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />

                            {isTyping && (
                                <div className="flex gap-2 items-center text-zinc-600 text-xs font-mono pl-2">
                                    <Bot className="w-4 h-4 animate-bounce" />
                                    <span>GENERATING RESPONSE...</span>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-black/20 border-t border-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Command the AI..."
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-all font-mono"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
                                >
                                    <Send className="w-3 h-3 text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* RIGHT: OMNI-CANVAS (Main Stage) */}
            <div className="flex-1 flex flex-col relative z-10 transition-all duration-500">
                {/* Canvas Toolbar */}
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-black/50 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        {!isSidebarOpen && (
                            <button onClick={() => setIsSidebarOpen(true)} className="text-zinc-500 hover:text-white">
                                <PanelRightOpen className="w-5 h-5" />
                            </button>
                        )}
                        <div className="h-4 w-px bg-white/10" />
                        <span className="text-sm font-bold text-zinc-400 flex items-center gap-2">
                            {activeContext.type === 'empty' ? <Brain className="w-4 h-4" /> :
                                activeContext.type === 'mindmap' ? <Network className="w-4 h-4 text-purple-400" /> :
                                    activeContext.type === 'code' ? <Code2 className="w-4 h-4 text-blue-400" /> :
                                        activeContext.type === 'video' ? <Video className="w-4 h-4 text-red-400" /> :
                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            }
                            {activeContext.title || "Neural Idle State"}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/5 rounded-lg text-zinc-500 hover:text-white transition-colors">
                            <Download className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsFullScreen(!isFullScreen)}
                            className="p-2 hover:bg-white/5 rounded-lg text-zinc-500 hover:text-white transition-colors"
                        >
                            {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Canvas Content */}
                <div className="flex-1 bg-zinc-950/50 relative overflow-hidden flex items-center justify-center p-8">
                    <AnimatePresence mode="wait">

                        {/* MINDMAP MODE */}
                        {activeContext.type === 'mindmap' && (
                            <motion.div
                                key="mindmap"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="w-full h-full relative border border-white/5 rounded-3xl bg-[#09090b] shadow-2xl overflow-hidden"
                            >
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    {activeContext.edges?.map((edge, i) => {
                                        const fromNode = activeContext.nodes?.find(n => n.id === edge.from);
                                        const toNode = activeContext.nodes?.find(n => n.id === edge.to);
                                        if (!fromNode || !toNode) return null;
                                        return (
                                            <motion.line
                                                key={i}
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.2 }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                x1={fromNode.x} y1={fromNode.y}
                                                x2={toNode.x} y2={toNode.y}
                                                stroke="white" strokeWidth="2"
                                            />
                                        );
                                    })}
                                </svg>
                                {activeContext.nodes?.map((node) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", delay: Math.random() * 0.5 }}
                                        className="absolute p-4 rounded-xl shadow-lg border border-white/10 backdrop-blur-md cursor-grab active:cursor-grabbing hover:ring-2 ring-white/20 transition-all flex flex-col items-center gap-2"
                                        style={{
                                            left: node.x,
                                            top: node.y,
                                            backgroundColor: `${node.color}15`, // 15 = 10% opacity hex
                                            borderColor: node.color
                                        }}
                                        drag
                                        dragConstraints={{ left: 0, right: 800, top: 0, bottom: 600 }}
                                    >
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: node.color }} />
                                        <span className="text-white font-bold text-sm whitespace-nowrap">{node.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* CODE MODE */}
                        {activeContext.type === 'code' && (
                            <motion.div
                                key="code"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full max-w-3xl bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                            >
                                <div className="h-10 bg-[#252526] flex items-center justify-between px-4 border-b border-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-xs text-zinc-400 font-mono">{activeContext.title}</span>
                                    <Play className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
                                </div>
                                <div className="p-6 overflow-auto font-mono text-sm leading-relaxed text-blue-300">
                                    <pre>{activeContext.content}</pre>
                                </div>
                                <div className="h-32 bg-black/50 border-t border-white/10 p-4 font-mono text-xs text-zinc-400">
                                    <span className="text-green-500">➜</span> ~ python {activeContext.title}
                                    <br />
                                    <span className="text-white animate-pulse">Running process...</span>
                                </div>
                            </motion.div>
                        )}

                        {/* VIDEO MODE */}
                        {activeContext.type === 'video' && (
                            <motion.div
                                key="video"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full h-full max-w-4xl aspect-video bg-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative group"
                            >
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                </div>
                                {/* Mock Video Player Placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-50" />
                                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{activeContext.title}</h3>
                                        <p className="text-zinc-400">02:14 / 14:30 • 3Blue1Brown</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* EMPTY STATE */}
                        {activeContext.type === 'empty' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center space-y-6"
                            >
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 animate-pulse" />
                                    <Brain className="w-32 h-32 text-zinc-800 relative z-10" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white mb-2">Omni-Canvas Ready</h2>
                                    <p className="text-zinc-500 max-w-md mx-auto">
                                        Waiting for neural input. Ask to generate a <span className="text-indigo-400">Mindmap</span>, write <span className="text-blue-400">Code</span>, or find <span className="text-red-400">Videos</span>.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
