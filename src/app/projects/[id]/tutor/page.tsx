"use client";

import { Send, Sparkles, User, Code2, Brain, ChevronRight, Lightbulb, Play, CheckCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Context Data ---
type ContextType = 'concept' | 'code' | 'quiz' | 'empty';

interface ContextPayload {
    type: ContextType;
    title?: string;
    content?: string; // Markdown or Code
    language?: string;
    options?: string[]; // For quizzes
}

// --- Component ---
export default function ProjectTutorPage() {
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Systems online. I've analyzed your project 'Linear Algebra'. Let's focus on **Eigenvectors** today.", context: { type: 'concept', title: 'Eigenvectors', content: 'Vectors that maintain their direction after a linear transformation.' } as ContextPayload }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    // The "Active Context" shows what the AI is currently "Projecting" to the user
    const [activeContext, setActiveContext] = useState<ContextPayload>(messages[0].context);

    // Auto-scroll logic
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg, context: { type: 'empty' } }]);
        setInput("");
        setIsTyping(true);

        // Simulate AI "Thinking" and changing context
        setTimeout(() => {
            // Mock Response Logic based on turn count (for demo)
            const turn = messages.length;
            let responseContent = "";
            let newContext: ContextPayload = { type: 'empty' };

            if (turn === 1) {
                responseContent = "Here's the Python implementation using NumPy. Notice how we use `eig` to extract both values and vectors.";
                newContext = {
                    type: 'code',
                    title: 'NumPy Implementation',
                    language: 'python',
                    content: `import numpy as np\n\n# Define matrix\nA = np.array([[1, 2], [2, 1]])\n\n# Calculate eigenvalues/vectors\neval, evec = np.linalg.eig(A)\n\nprint(f"Eigenvalues: {eval}")`
                };
            } else if (turn === 2) {
                responseContent = "Let's test your intuition. If the eigenvalue is 2, what happens to the vector's length?";
                newContext = {
                    type: 'quiz',
                    title: 'Quick Check',
                    content: 'If λ = 2, the vector:',
                    options: ['Doubles in length', 'Halves in length', 'Rotates 90 degrees', 'Becomes zero']
                };
            } else {
                responseContent = "Excellent progress. Shall we move on to Matrix Decompositions?";
                newContext = { type: 'concept', title: 'Next Topic', content: 'Singular Value Decomposition (SVD)' };
            }

            setMessages(prev => [...prev, { role: 'ai', content: responseContent, context: newContext }]);
            setActiveContext(newContext);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-100px)] flex gap-6 max-w-[1800px] mx-auto p-6">

            {/* LEFT: Neural Feed (Chat) */}
            <div className="w-1/3 flex flex-col gap-4">
                <div className="flex-1 overflow-y-auto space-y-6 pr-4 no-scrollbar">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`group flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'ai' ? 'bg-indigo-600 shadow-indigo-500/20' : 'bg-zinc-800'}`}>
                                {msg.role === 'ai' ? <Brain className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-zinc-400" />}
                            </div>

                            <div className="space-y-2 max-w-[85%]">
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai'
                                        ? 'bg-zinc-900/50 border border-white/5 text-gray-200'
                                        : 'bg-white text-black font-medium'
                                    }`}>
                                    {msg.content}
                                </div>
                                {/* Context Indicator (Click to revisit) */}
                                {msg.role === 'ai' && msg.context.type !== 'empty' && (
                                    <button
                                        onClick={() => setActiveContext(msg.context)}
                                        className="text-[10px] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        <span>Show: {msg.context.title}</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />

                    {isTyping && (
                        <div className="flex gap-4 items-center pl-12 opacity-50">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-100" />
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-200" />
                            </div>
                            <span className="text-xs text-indigo-400 font-mono">NEURAL PROCESSING...</span>
                        </div>
                    )}
                </div>

                {/* Input Command Bar */}
                <div className="relative mt-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a command or ask a question..."
                        className="w-full bg-black border border-white/20 rounded-2xl px-6 py-4 pl-12 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-2xl"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                        <ChevronRight className="w-5 h-5 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* RIGHT: Dynamic Context Canvas */}
            <div className="flex-1 bg-zinc-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-6 flex gap-2">
                    <div className="px-3 py-1 bg-black/50 rounded-full border border-white/10 text-xs font-mono text-zinc-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE CONTEXT
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {/* State: CONCEPT */}
                    {activeContext.type === 'concept' && (
                        <motion.div
                            key="concept"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex-1 flex flex-col justify-center items-center text-center max-w-2xl mx-auto"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/20">
                                <Lightbulb className="w-12 h-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">{activeContext.title}</h2>
                            <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                {activeContext.content}
                            </p>
                        </motion.div>
                    )}

                    {/* State: CODE */}
                    {activeContext.type === 'code' && (
                        <motion.div
                            key="code"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="flex-1 flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Code2 className="w-6 h-6 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{activeContext.title}</h2>
                            </div>
                            <div className="flex-1 bg-black rounded-xl border border-white/10 p-6 font-mono text-sm relative group overflow-hidden">
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded font-bold text-xs hover:bg-zinc-200">
                                        <Play className="w-3 h-3" /> Run
                                    </button>
                                </div>
                                <pre className="text-blue-300">
                                    {activeContext.content}
                                </pre>
                            </div>
                        </motion.div>
                    )}

                    {/* State: QUIZ */}
                    {activeContext.type === 'quiz' && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full"
                        >
                            <div className="mb-8">
                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">Knowledge Check</span>
                                <h2 className="text-3xl font-bold text-white mb-2">{activeContext.content}</h2>
                            </div>
                            <div className="space-y-3">
                                {activeContext.options?.map((opt, i) => (
                                    <button key={i} className="w-full p-4 text-left bg-zinc-800/50 hover:bg-indigo-600 hover:scale-[1.02] border border-white/5 hover:border-indigo-500/50 rounded-xl transition-all duration-300 group flex items-center justify-between">
                                        <span className="font-medium text-gray-300 group-hover:text-white">{opt}</span>
                                        <CheckCircle2 className="w-5 h-5 opacity-0 group-hover:opacity-100 text-white" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeContext.type === 'empty' && (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex-1 flex items-center justify-center text-zinc-700"
                        >
                            <Brain className="w-32 h-32 opacity-20 animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
