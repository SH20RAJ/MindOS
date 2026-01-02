"use client";

import { Send, User, Sparkles, StopCircle, Mic } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ProjectTutorPage() {
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hello! I'm your AI Tutor for this project. We're focusing on **Linear Algebra** today. Shall we start by defining the scope of your next milestone?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput("");
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: "That's a great starting point. To achieve that, I recommend we break it down into three core concepts: \n\n1. Vector Spaces\n2. Linear Transformations\n3. Eigenvalues\n\nWhich one would you like to tackle first?"
            }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-200px)] flex flex-col max-w-4xl mx-auto">
            <div className="flex-1 bg-zinc-900/30 border border-white/10 rounded-2xl p-6 overflow-y-auto space-y-6" ref={scrollRef}>
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-indigo-600' : 'bg-zinc-700'}`}>
                            {msg.role === 'ai' ? <Sparkles className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                        </div>
                        <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.role === 'ai'
                                ? 'bg-zinc-800 text-gray-200 rounded-tl-none border border-white/5'
                                : 'bg-indigo-600 text-white rounded-tr-none'
                            }`}>
                            <div className="whitespace-pre-wrap">{msg.content}</div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-800 rounded-tl-none border border-white/5 flex gap-1 items-center">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4 flex gap-4">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask your AI tutor anything..."
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors pr-12"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white">
                        <Mic className="w-5 h-5" />
                    </button>
                </div>
                <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="bg-white text-black px-6 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send className="w-4 h-4" /> Send
                </button>
            </div>
        </div>
    );
}
