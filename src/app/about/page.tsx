import { AboutHero } from "@/components/about/AboutHero";
import { OriginStory } from "@/components/about/OriginStory";
import { MethodologyGrid } from "@/components/about/MethodologyGrid";
import { TechStackTicker } from "@/components/about/TechStackTicker";
import { Roadmap } from "@/components/about/Roadmap";
import { Philosophy } from "@/components/about/Philosophy";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | MindOS",
    description: "The Science of Learning. Discover how we use cognitive science to help you learn 3x faster.",
};

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
            <AboutHero />
            <OriginStory />
            <MethodologyGrid />
            <Roadmap />
            <TechStackTicker />
            <AboutTestimonials />
            <Philosophy />
        </main>
    );
}
