"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
    title: string;
    description: string;
    category: string;
    imageUrl?: string;
    size?: "large" | "tall" | "wide" | "small";
    className?: string;
}

export function FeatureCard({ title, description, category, imageUrl, size = "small", className }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            className={cn(
                "group relative overflow-hidden rounded-xl bg-secondary/50 border border-white/5",
                // Grid span logic based on size
                size === "large" && "col-span-2 row-span-2",
                size === "tall" && "col-span-1 row-span-2",
                size === "wide" && "col-span-2 row-span-1",
                size === "small" && "col-span-1 row-span-1",
                className
            )}
        >
            {imageUrl && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
            )}

            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <div className="mb-auto flex justify-between items-start">
                    <span className="px-2 py-1 text-[10px] uppercase tracking-widest font-mono border border-white/20 rounded-full text-white/70 bg-black/30 backdrop-blur-sm">
                        {category}
                    </span>
                </div>

                <div>
                    <h3 className={cn(
                        "font-bold leading-tight group-hover:text-accent transition-colors mb-2",
                        size === "large" ? "text-3xl" : "text-xl"
                    )}>
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
