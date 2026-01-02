"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutTemplate, Target, Network, Play, RefreshCw, MessageSquare, FileOutput } from 'lucide-react';
import { cn } from "@/lib/utils";

const TABS = [
    { id: 'overview', label: 'Overview', icon: LayoutTemplate },
    { id: 'goal', label: 'Intent', icon: Target },
    { id: 'map', label: 'Concept Map', icon: Network },
    { id: 'daily', label: 'Execution', icon: Play },
    { id: 'review', label: 'Review', icon: RefreshCw },
    { id: 'tutor', label: 'AI Tutor', icon: MessageSquare },
    { id: 'output', label: 'Proof', icon: FileOutput },
];

export function ProjectTabs({ projectId }: { projectId: string }) {
    const pathname = usePathname();

    return (
        <div className="max-w-[1800px] mx-auto px-6 flex items-center gap-8 overflow-x-auto no-scrollbar">
            {TABS.map((tab) => {
                const href = `/projects/${projectId}/${tab.id}`;
                const isActive = pathname.includes(tab.id);

                return (
                    <Link
                        key={tab.id}
                        href={href}
                        className={cn(
                            "h-12 flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-all whitespace-nowrap px-1",
                            isActive
                                ? "border-blue-500 text-blue-400"
                                : "border-transparent text-zinc-500 hover:text-zinc-300"
                        )}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </Link>
                );
            })}
        </div>
    );
}
