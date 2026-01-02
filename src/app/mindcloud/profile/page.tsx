"use client";

import { Upload, FileText, X, Check, Database } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MindCloudProfilePage() {
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState<{ name: string, size: string, status: 'uploading' | 'complete' }[]>([]);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // Mock upload process
            const file = e.dataTransfer.files[0];
            addFile(file.name, (file.size / 1024 / 1024).toFixed(2) + " MB");
        }
    };

    const addFile = (name: string, size: string) => {
        const newFile = { name, size, status: 'uploading' as const };
        setFiles(prev => [...prev, newFile]);

        // Simulate upload completion
        setTimeout(() => {
            setFiles(prev => prev.map(f => f.name === name ? { ...f, status: 'complete' } : f));
        }, 2000);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-white mb-2">Neural Archive</h1>
                    <p className="text-zinc-400">Manage your study materials and upload external knowledge to your Second Brain.</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
                    <Database className="w-4 h-4" />
                    <span>Database Active</span>
                </div>
            </header>

            {/* User Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                    <div className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-1">Storage Used</div>
                    <div className="text-2xl font-black text-white">2.4 GB <span className="text-sm font-normal text-zinc-600">/ 5 GB</span></div>
                    <div className="mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-[48%] bg-indigo-500 rounded-full" />
                    </div>
                </div>
                <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                    <div className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-1">Total Assets</div>
                    <div className="text-2xl font-black text-white">843</div>
                </div>
                <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                    <div className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-1">Synapse Rate</div>
                    <div className="text-2xl font-black text-emerald-400">98.2%</div>
                </div>
            </div>

            {/* Upload Zone */}
            <div
                className={`relative h-64 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all duration-300 ${dragActive ? 'border-indigo-500 bg-indigo-500/10 scale-[1.02]' : 'border-zinc-700 bg-zinc-900/30 hover:border-zinc-500'
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <div className="p-4 bg-zinc-800 rounded-full mb-4">
                    <Upload className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Drag & Drop Study Materials</h3>
                <p className="text-zinc-500 text-sm">PDF, DOCX, MD (Max 50MB)</p>

                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            addFile(file.name, (file.size / 1024 / 1024).toFixed(2) + " MB");
                        }
                    }}
                />
            </div>

            {/* Recent Uploads */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Recent Ingestion</h3>
                <div className="space-y-3">
                    <AnimatePresence>
                        {files.length === 0 && (
                            <div className="text-center py-8 text-zinc-600 italic">No recent uploads</div>
                        )}
                        {files.map((file, i) => (
                            <motion.div
                                key={file.name + i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="p-4 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                                        <FileText className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm">{file.name}</div>
                                        <div className="text-xs text-zinc-500">{file.size}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {file.status === 'uploading' ? (
                                        <div className="flex items-center gap-2 text-xs text-indigo-400">
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                                            Encrypting...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                                            <Check className="w-3 h-3" /> Indexed
                                        </div>
                                    )}
                                    <button className="text-zinc-600 hover:text-red-400 transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
