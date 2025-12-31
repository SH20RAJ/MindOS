import { Flashcard } from "@/components/school/Flashcard";
import { FeatureCard } from "@/components/home/FeatureCard";
import { QuizGame } from "@/components/school/QuizGame";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mind School | Active Recall",
    description: "Test your knowledge with active recall quizzes and spaced repetition flashcards.",
};

export default function SchoolPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                        Mind School
                    </h1>
                    <p className="text-xl text-muted-foreground font-mono tracking-widest">
                        Scientific Tools Training Ground
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {/* Flashcard Demo */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-white/50">
                            01. Active Recall
                        </h2>
                        <Flashcard
                            category="Neuroscience"
                            question="What is the Hebbian Theory of learning?"
                            answer="Neurons that fire together, wire together."
                        />
                        <p className="mt-8 text-sm text-muted-foreground text-center max-w-sm">
                            Interactive flashcards using 3D transforms. "Ticket Stub" aesthetic implies entry to knowledge.
                        </p>
                    </div>

                    {/* Concept Mapping / Other Tools Placeholder */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-white/50">
                            02. Gamified Testing
                        </h2>
                        <QuizGame />
                        <p className="mt-8 text-sm text-muted-foreground text-center max-w-sm">
                            "Terminal" style quizzes for immediate feedback loop. High-stakes testing environment simulation.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
