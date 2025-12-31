"use client";

import { motion, MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps extends MotionProps {
    icon: LucideIcon;
    className?: string;
}

export function AnimatedIcon({ icon: Icon, className, ...props }: AnimatedIconProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={cn("flex items-center justify-center", className)}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {/* We can animate the SVG paths if we had access to them, 
                but simply animating the container is a good start for 'Animated Icons' 
                without external heavy libs. 
                For true Lucide animation, we'd need to manipulate path lengths.
             */}
            <Icon
                className={cn("w-full h-full transition-colors",
                    isHovered ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : ""
                )}
            />
        </motion.div>
    );
}
