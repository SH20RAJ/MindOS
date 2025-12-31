import { BentoGrid } from "@/components/news/BentoGrid";

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                        The Resonance
                    </h1>
                    <p className="text-xl text-muted-foreground font-mono tracking-widest max-w-2xl">
                        Latest updates, stories, and reverberations from the club.
                    </p>
                </header>

                <BentoGrid />
            </div>
        </main>
    );
}
