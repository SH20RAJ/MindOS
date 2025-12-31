import { HeroOdyssey } from "@/components/home/HeroOdyssey";
import { CreativeScienceWithScroll } from "@/components/home/CreativeScience";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ArrowRight, Layers, Mic, Search, Share2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MindOS - Learn Everything. Scientifically. Fast.",
    description: "AI-driven note taking and knowledge management for developers. Capture ideas, organize thoughts, and retain information with the power of science.",
};

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <HeroOdyssey />
            <TrustedBy />
            <CreativeScienceWithScroll />

            {/* How MindOS Works Section */}
            <section className="py-32 px-4 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
                            How MindOS Works
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A seamless workflow designed for knowledge retention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Capture",
                                desc: "Quickly save articles, videos, and papers.",
                                icon: Mic
                            },
                            {
                                step: "02",
                                title: "Curate",
                                desc: "AI extracts key insights automatically.",
                                icon: Layers
                            },
                            {
                                step: "03",
                                title: "Connect",
                                desc: "Link related concepts into a graph.",
                                icon: Share2
                            },
                            {
                                step: "04",
                                title: "Conquer",
                                desc: "Master subjects through spaced repetition.",
                                icon: Search
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                                <div className="relative p-8 bg-black border border-white/10 rounded-lg hover:border-white/20 transition-colors h-full">
                                    <span className="text-5xl font-black text-white/5 mb-6 block">{item.step}</span>
                                    <item.icon className="w-8 h-8 text-white mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Launch CTA */}
            <section className="h-[50vh] flex items-center justify-center border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
                <div className="text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to Upgrade<br />Your Brain?</h2>
                    <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Launch Dashboard <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </section>
        </main>
    );
}
