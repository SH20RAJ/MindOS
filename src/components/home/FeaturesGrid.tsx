import { FeatureCard } from "./FeatureCard";

const features = [
    {
        id: 1,
        title: "Spaced Repetition",
        description: "Never forget a concept again. AI-scheduled reviews based on the forgetting curve.",
        category: "Memory",
        size: "large" as const,
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Active Recall Quizzes",
        description: "Test yourself before you forget. The most efficient way to learn.",
        category: "Testing",
        size: "tall" as const,
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Feynman Technique",
        description: "Explain it to a 5-year-old. AI grades your simplification.",
        category: "Understanding",
        size: "wide" as const,
        imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Interleaving",
        description: "Mix up subjects for better neural connections.",
        category: "Strategy",
        size: "small" as const,
        imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Dual Coding",
        description: "Combine words and visuals for double retention.",
        category: "Visuals",
        size: "small" as const,
        imageUrl: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop"
    }
];

export function FeaturesGrid() {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-white">
                    The Science
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {features.map((item) => (
                        <FeatureCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
