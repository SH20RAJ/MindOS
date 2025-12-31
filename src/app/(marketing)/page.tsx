import { CinematicHero } from "@/components/home/CinematicHero";
import { LaunchDashboard } from "@/components/home/LaunchDashboard";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MindOS - Learn Everything. Scientifically. Fast.",
    description: "AI-driven note taking and knowledge management for developers. Capture ideas, organize thoughts, and retain information with the power of science.",
};

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
            <CinematicHero />
            <LaunchDashboard />
        </main>
    );
}

