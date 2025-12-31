"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Ticket } from "lucide-react";

interface EventCardProps {
    day: string;
    month: string;
    title: string;
    location: string;
    time: string;
    image?: string;
    status?: "upcoming" | "sold-out" | "past";
}

export function EventCard({ day, month, title, location, time, status = "upcoming" }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row gap-6 p-6 border-b border-white/10 hover:bg-white/5 transition-colors relative"
        >
            {/* Date Stack */}
            <div className="flex flex-col items-center justify-center w-20 h-20 border border-white/20 rounded-lg bg-black/50 shrink-0 group-hover:border-accent transition-colors">
                <span className="text-xs font-mono uppercase text-muted-foreground">{month}</span>
                <span className="text-3xl font-black text-white">{day}</span>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">{title}</h3>
                <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mt-2">
                    <span>{location}</span>
                    <span>/</span>
                    <span>{time}</span>
                </div>
            </div>

            {/* Ticket Stub Button */}
            <div className="flex items-center">
                <button
                    disabled={status !== "upcoming"}
                    className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm uppercase tracking-widest transition-all",
                        status === "upcoming"
                            ? "bg-white text-black hover:bg-accent hover:text-white"
                            : "bg-white/5 text-white/30 cursor-not-allowed"
                    )}
                >
                    {status === "upcoming" ? (
                        <>
                            <Ticket className="w-4 h-4" />
                            <span>Get Tickets</span>
                        </>
                    ) : (
                        <span>{status.replace("-", " ")}</span>
                    )}
                </button>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shine pointer-events-none" />
        </motion.div>
    );
}
