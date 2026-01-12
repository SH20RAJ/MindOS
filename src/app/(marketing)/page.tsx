import { CinematicHero } from "@/components/home/CinematicHero";
import { LaunchDashboard } from "@/components/home/LaunchDashboard";
import { CreativePricing } from "@/components/ui/creative-pricing";

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
            
            {/* Pricing Section - Created to demonstrate the new component */}
            <section className="py-24 bg-black/50">
                <CreativePricing 
                    title="Invest in Your Brain"
                    description="Simple, transparent pricing for lifelong learning."
                    tag="Go Pro"
                    tiers={[
                        {
                            name: "Explorer",
                            price: 0,
                            description: "For curious minds starting their journey.",
                            features: ["Basic Knowledge Graph", "5 Active Projects", "Daily Reviews"],
                            icon: <div className="text-2xl">🌱</div>,
                            color: "blue"
                        },
                        {
                            name: "Architect",
                            price: 15,
                            description: "For serious learners building complex systems.",
                            features: ["Unlimited Projects", "AI Tutor Integration", "Advanced Analytics", "Graph Visualization"],
                            popular: true,
                            icon: <div className="text-2xl">🚀</div>,
                            color: "amber"
                        },
                        {
                            name: "Galaxy Brain",
                            price: 49,
                            description: "For teams and research collectives.",
                            features: ["Team Collaboration", "API Access", "Custom Models", "Priority Support"],
                            icon: <div className="text-2xl">🧠</div>,
                            color: "purple"
                        }
                    ]}
                />
            </section>
        </main>
    );
}

