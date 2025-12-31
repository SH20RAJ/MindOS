"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js 15", "React Server Components", "TypeScript", "Tailwind CSS",
    "Framer Motion", "Cloudflare Workers", "Pinecone Vector DB", "OpenAI GPT-4o",
    "PostgreSQL", "Prisma", "Radix UI", "Bun", "Turbopack"
];

export function TechStackTicker() {
    return (
        <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
            <div className="relative flex">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center mx-8">
                            <span className="text-lg md:text-2xl font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default">
                                {tech}
                            </span>
                            <span className="ml-8 text-red-500/50">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
