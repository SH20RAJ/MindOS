import { User, MapPin, Calendar, BookOpen, Trophy, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/home/FeatureCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile | MindOS",
    description: "User profile and learning statistics.",
};

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-black text-white p-8 font-mono">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header / Nav */}
                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors w-fit">
                    <ArrowLeft className="w-4 h-4" />
                    <Link href="/dashboard" className="text-sm font-bold tracking-widest uppercase">
                        Back to Dashboard
                    </Link>
                </div>

                {/* Profile Header */}
                <header className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-white/10 pb-12">
                    <div className="w-32 h-32 rounded-full bg-zinc-900 border-2 border-white/10 flex items-center justify-center relative overflow-hidden group">
                        <User className="w-16 h-16 text-white/50 group-hover:text-white transition-colors" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="text-center md:text-left space-y-4 flex-1">
                        <div>
                            <h1 className="text-4xl font-black uppercase tracking-tighter text-white">
                                Pilot User
                            </h1>
                            <p className="text-muted-foreground">@mindos_pilot</p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Joined December 2025</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                            Edit Profile
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <section>
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" /> Performance Metrics
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FeatureCard
                            title="Learning Streak"
                            description="12 Days"
                            category="Consistent"
                            size="small"
                        />
                        <FeatureCard
                            title="Knowledge Nodes"
                            description="1,240 Items"
                            category="Growing"
                            size="small"
                        />
                        <FeatureCard
                            title="Quiz Accuracy"
                            description="94.5%"
                            category="Mastery"
                            size="small"
                        />
                    </div>
                </section>

                {/* Recent Activity or Badges could go here */}
                <section className="border-t border-white/10 pt-12">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-500" /> Recent Activity
                    </h2>
                    <div className="bg-zinc-950 border border-white/10 rounded-lg p-6 space-y-4">
                        {[
                            "Completed 'Advanced React Patterns' review session.",
                            "Created new resource: 'Neural Networks 101'.",
                            "Achieved 'Memory Master' badge.",
                            "Connected 'Physics' to 'Calculus' in Knowledge Graph."
                        ].map((activity, i) => (
                            <div key={i} className="flex items-center gap-4 text-sm text-gray-400 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                <span>{activity}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
