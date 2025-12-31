import { AboutHero } from "@/components/about/AboutHero";
import { OriginStory } from "@/components/about/OriginStory";
import { MethodologyGrid } from "@/components/about/MethodologyGrid";
import { TechStackTicker } from "@/components/about/TechStackTicker";
import { Roadmap } from "@/components/about/Roadmap";
import { Philosophy } from "@/components/about/Philosophy";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { CreativeBadges, type BadgeItem } from "@/components/ui/creative-badges";
import { HumorTestimonials } from "@/components/about/HumorTestimonials";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | MindOS",
    description: "The Science of Learning. Discover how we use cognitive science to help you learn 3x faster.",
};

const badges: BadgeItem[] = [
    { id: "1", label: "Neuroscience", color: "from-blue-500/80 to-blue-600/80", size: "lg", rotation: -5, zIndex: 1, offsetX: -100, offsetY: -50 },
    { id: "2", label: "Spaced Repetition", color: "from-purple-500/80 to-purple-600/80", size: "md", rotation: 3, zIndex: 2, offsetX: 120, offsetY: -20 },
    { id: "3", label: "Cognitive Science", color: "from-emerald-500/80 to-emerald-600/80", size: "lg", rotation: -2, zIndex: 3, offsetX: -20, offsetY: 40 },
    { id: "4", label: "Active Recall", color: "from-amber-500/80 to-amber-600/80", size: "md", rotation: 4, zIndex: 4, offsetX: 80, offsetY: 80 },
    { id: "5", label: "Dual Coding", color: "from-rose-500/80 to-rose-600/80", size: "sm", rotation: -4, zIndex: 5, offsetX: -140, offsetY: 60 },
];

function AboutBadges() {
    return (
        <div className="py-24 bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            <CreativeBadges badges={badges} />
        </div>
    );
}

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
            <AboutHero />
            <OriginStory />
            <HumorTestimonials />
            <MethodologyGrid />
            <AboutBadges />
            <Roadmap />
            <TechStackTicker />
            <AboutTestimonials />
            <Philosophy />
        </main>
    );
}
