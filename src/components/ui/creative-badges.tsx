"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export interface BadgeItem {
    id: string
    label: string
    color: string
    size: "sm" | "md" | "lg"
    rotation: number
    zIndex: number
    offsetX: number
    offsetY: number
}

interface CreativeBadgesProps {
    badges: BadgeItem[];
    className?: string;
}

const sizeClasses = {
    sm: "px-6 py-2.5 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-3.5 text-xl",
}

export function CreativeBadges({ badges, className }: CreativeBadgesProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const [clickedId, setClickedId] = useState<string | null>(null)

    const handleClick = (id: string) => {
        setClickedId(clickedId === id ? null : id)
    }

    return (
        <div className={cn("relative flex h-[400px] w-full items-center justify-center pointer-events-auto", className)}>
            {badges.map((badge) => {
                const isHovered = hoveredId === badge.id
                const isClicked = clickedId === badge.id
                const isOtherHovered = hoveredId !== null && hoveredId !== badge.id

                return (
                    <div
                        key={badge.id}
                        className={cn(
                            "absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out",
                            "bg-gradient-to-b shadow-lg border border-white/20 backdrop-blur-md",
                            badge.color, // Expecting text/bg classes or strict gradients
                            sizeClasses[badge.size],
                            "hover:shadow-2xl hover:border-white/40",
                        )}
                        style={{
                            transform: `
                translate(${badge.offsetX}px, ${badge.offsetY}px) 
                rotate(${isHovered ? 0 : badge.rotation}deg)
                scale(${isClicked ? 1.15 : isHovered ? 1.08 : isOtherHovered ? 0.95 : 1})
                translateY(${isHovered ? -8 : 0}px)
              `,
                            zIndex: isHovered || isClicked ? 100 : badge.zIndex,
                        }}
                        onMouseEnter={() => setHoveredId(badge.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleClick(badge.id)}
                    >
                        <span className="relative block text-white drop-shadow-md">
                            {badge.label}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
