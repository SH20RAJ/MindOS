import { HeroOdyssey } from "@/components/home/HeroOdyssey";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <HeroOdyssey />
            <FeaturesGrid />
            <section className="h-screen flex items-center justify-center border-t border-white/10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Start Your First Project</h2>
                    <button className="px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                        Launch Dashboard
                    </button>
                </div>
            </section>
        </main>
    );
}
