import { FocusTimer } from "@/components/dashboard/FocusTimer";
import { DailyReviewStack } from "@/components/dashboard/DailyReviewStack";
import { FeatureCard } from "@/components/home/FeatureCard";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | Mission Control",
    description: "Manage your daily review stack and focus sessions.",
};

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">
                        Mission Control
                    </h1>
                    <p className="text-muted-foreground font-mono">
                        Welcome back, Pilot. Systems nominal.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">
                    {/* Focus Timer - Main Interaction */}
                    <div className="md:col-span-8 md:row-span-1">
                        <FocusTimer />
                    </div>

                    {/* Daily Stack - Side Interaction */}
                    <div className="md:col-span-4 md:row-span-2">
                        <DailyReviewStack />
                    </div>

                    {/* Quick Stats / Project Status */}
                    <div className="md:col-span-4 md:row-span-1">
                        <FeatureCard
                            title="Current Project"
                            description="Advanced Guitar Theory - Week 3"
                            category="Active"
                            size="small"
                            className="h-full"
                        />
                    </div>
                    <div className="md:col-span-4 md:row-span-1">
                        <FeatureCard
                            title="Retention Rate"
                            description="94% Memory Strength on last week's topics."
                            category="Stats"
                            size="small"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
