"use client";

import { use, useEffect } from "react";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { CognitivePipeline } from "@/components/project/CognitivePipeline";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params in Next.js 15+ compatible way
    const unwrappedParams = use(params);
    const { id } = unwrappedParams;

    // Hardcoded mock data for now based on ID (or simplified)
    const projectTitle = id === "quantum" ? "Quantum Mechanics" : "Project " + id;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
            <ProjectHeader
                title={projectTitle}
                description="Mastering the fundamental principles of quantum physics, specifically wave-particle duality and the Schrödinger equation."
                mastery={42}
                streak={7}
            />

            <div className="max-w-[1600px] mx-auto p-6 md:p-8">
                <CognitivePipeline />
            </div>
        </div>
    );
}
