"use client";

import { Heart, MessageCircle, Share2, MoreHorizontal, Sparkles, Brain, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const FEED_POSTS = [
    {
        id: 1,
        author: "Sarah Chen",
        role: "Neuroscience Student",
        avatar: "bg-purple-500",
        time: "2h ago",
        content: "Just finished mapping the entire **Visual Cortex** pathway! 🧠✨\n\nThe connections between V1 and V2 are fascinating when you visualize them as a directed graph. Check out my MindMap below.",
        tags: ["Neuroscience", "VisualCortex", "MindMapping"],
        likes: 124,
        comments: 18,
        shares: 5,
        attachment: {
            type: "graph",
            title: "Visual Cortex Connectivity Map",
            image: "/mock-graph-1.png" // Placeholder
        }
    },
    {
        id: 2,
        author: "David Miller",
        role: "Indie Hacker",
        avatar: "bg-blue-500",
        time: "4h ago",
        content: "Productivity hack: I replaced my entire Jira board with a **MindOS Goal Graph**. \n\nInstead of tickets, I have 'Outcome Nodes' that branch into tasks. It's way more intuitive for non-linear projects.",
        tags: ["Productivity", "IndieHacking", "Workflow"],
        likes: 856,
        comments: 42,
        shares: 112,
        attachment: null
    },
    {
        id: 3,
        author: "Dr. Alisha Gupta",
        role: "AI Researcher",
        avatar: "bg-emerald-500",
        time: "6h ago",
        content: "Publishing my 'Transformer Architecture' deep dive module to the marketplace today. 📚\n\nIncludes 5 interactive quizzes and a Python playground for exploring attention mechanisms.",
        tags: ["AI", "DeepLearning", "Education"],
        likes: 2300,
        comments: 156,
        shares: 405,
        attachment: {
            type: "product",
            title: "Transformers: From Scratch",
            price: "$0 (Free)"
        }
    }
];

export default function CommunityFeedPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">

            {/* Create Post Input */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 border border-black" />
                    <input
                        type="text"
                        placeholder="Share a thought or Knowledge Graph..."
                        className="flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
                    />
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <div className="flex gap-2 text-zinc-500">
                        <button className="p-2 hover:bg-white/5 rounded-lg hover:text-indigo-400 transition-colors"><Brain className="w-4 h-4" /></button>
                        <button className="p-2 hover:bg-white/5 rounded-lg hover:text-indigo-400 transition-colors"><Share2 className="w-4 h-4" /></button>
                    </div>
                    <button className="px-4 py-1.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                        Post
                    </button>
                </div>
            </div>

            {/* Feed Stream */}
            <div className="space-y-6">
                {FEED_POSTS.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
                    >
                        {/* Post Header */}
                        <div className="p-4 flex items-start justify-between">
                            <div className="flex gap-3">
                                <div className={`w-10 h-10 rounded-full ${post.avatar} flex items-center justify-center font-bold text-white`}>
                                    {post.author[0]}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-white text-sm">{post.author}</h3>
                                        <span className="text-xs text-zinc-500">• {post.time}</span>
                                    </div>
                                    <p className="text-xs text-zinc-400">{post.role}</p>
                                </div>
                            </div>
                            <button className="text-zinc-500 hover:text-white">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-4 pb-2">
                            <p className="text-zinc-200 text-sm whitespace-pre-wrap leading-relaxed">
                                {post.content}
                            </p>
                            {post.tags && (
                                <div className="flex gap-2 mt-3">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-indigo-400 text-xs hover:underline cursor-pointer">#{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Attachment (Rich Media) */}
                        {post.attachment && (
                            <div className="mt-3 mx-4 mb-4 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 group cursor-pointer relative">
                                {post.attachment.type === 'graph' ? (
                                    <div className="h-48 bg-grid-white/[0.05] relative flex items-center justify-center bg-indigo-950/20">
                                        <Brain className="w-12 h-12 text-indigo-500 opacity-50" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <div className="flex items-center gap-2 text-white font-bold">
                                                <Sparkles className="w-4 h-4 text-yellow-400" /> {post.attachment.title}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 transition-colors">
                                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                            <Download className="w-6 h-6 text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white">{post.attachment.title}</h4>
                                            <p className="text-xs text-emerald-400 font-bold">{post.attachment.price}</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-zinc-400" />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 bg-white/[0.02]">
                            <button className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors text-sm group">
                                <Heart className="w-4 h-4 group-hover:fill-current" />
                                <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors text-sm">
                                <MessageCircle className="w-4 h-4" />
                                <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 text-zinc-400 hover:text-green-500 transition-colors text-sm">
                                <Share2 className="w-4 h-4" />
                                <span>{post.shares}</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
