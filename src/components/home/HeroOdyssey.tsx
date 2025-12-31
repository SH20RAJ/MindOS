"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function HeroOdyssey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
            {/* Noise Overlay */}
            <div className="absolute inset-0 z-[5] pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-[1]" />

            {/* Main Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center justify-center h-full px-4"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-difference select-none">
                        MINDOS
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                        className="h-1 md:h-2 bg-white absolute bottom-2 left-0 mix-blend-difference"
                    />
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 text-xl md:text-2xl font-mono text-muted-foreground uppercase tracking-[0.2em]"
                >
                    Master Anything. Scientifically.
                </motion.p>
            </motion.div>

            {/* Vertical Ticker Right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 z-20 mix-blend-difference">
                <div className="h-32 w-px bg-white/20 mx-auto" />
                <div className="vertical-writing-mode text-xs font-mono uppercase tracking-widest text-white/50 animate-pulse">
                    System Status: Online · v2.0
                </div>
                <div className="h-32 w-px bg-white/20 mx-auto" />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </div>
    );
}
