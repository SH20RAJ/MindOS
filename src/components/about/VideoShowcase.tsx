"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoShowcase() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        See MindOS In Action
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Experience how our retention engine transforms the way you learn and remember information forever.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] group-hover:bg-indigo-500/20 transition-colors duration-700" />

                    {!isPlaying ? (
                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-20" onClick={() => setIsPlaying(true)}>
                            {/* Thumbnail Overlay (Optional - Using high-res default for now) */}
                            <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors" />

                            {/* Custom Play Button */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg relative z-30 group-hover:bg-white/20 transition-all"
                            >
                                <Play className="w-10 h-10 text-white fill-current ml-1" />
                            </motion.div>

                            {/* <img
                                src={`https://img.youtube.com/vi/qDBv3XDXAyI/sddefault.jpg`}
                                alt="MindOS Demo"
                                className="absolute inset-0 w-full h-full object-cover -z-10"
                            /> */}
                        </div>
                    ) : (
                        <iframe
                            src="https://www.youtube.com/embed/qDBv3XDXAyI?autoplay=1&rel=0&showinfo=0"
                            title="MindOS Demo"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
