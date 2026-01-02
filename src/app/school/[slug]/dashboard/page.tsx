import { RetentionHeatmap } from "@/components/school/RetentionHeatmap";
import { SchoolActivityFeed } from "@/components/school/SchoolActivityFeed";
import { MOCK_SCHOOLS } from "@/mock/school-data";
import { ArrowUpRight, BrainCircuit, Users, Zap } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const QUOTES = [
    { text: "What I cannot create, I do not understand.", author: "Richard Feynman" },
    { text: "The purpose of computing is insight, not numbers.", author: "Richard Hamming" },
    { text: "Learning is not a spectator sport.", author: "D. Blocher" },
    { text: "Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein" },
    { text: "Civilization advances by extending the number of important operations which we can perform without thinking about them.", author: "Alfred North Whitehead" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It is not knowledge, but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment.", author: "Carl Friedrich Gauss" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "The details are not the details. They make the design.", author: "Charles Eames" },
    { text: "Design is intelligence made visible.", author: "Alina Wheeler" },
    { text: "Everything should be made as simple as possible, but not simpler.", author: "Albert Einstein" },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const school = MOCK_SCHOOLS.find(s => s.slug === slug);
    return {
        title: `${school?.name || 'School'} Dashboard | MindOS`,
    };
}

export default async function SchoolDashboard({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const school = MOCK_SCHOOLS.find(s => s.slug === slug);

    if (!school) return <div className="p-8 text-white">404 School Not Found</div>;

    return (
        <div className="p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-white tracking-tight mb-6">Command Center</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-sm text-gray-500 uppercase font-bold mb-1">Retention Pulse</div>
                        <div className="text-4xl font-black text-emerald-400">84%</div>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-sm text-gray-500 uppercase font-bold mb-1">Active Students</div>
                        <div className="text-4xl font-black text-white">1,204</div>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="text-sm text-gray-500 uppercase font-bold mb-1">Assignments Due</div>
                        <div className="text-4xl font-black text-indigo-400">12</div>
                    </div>
                </div>

                {/* Quote of the Hour */}
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-xl flex items-start gap-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg shrink-0">
                        <Zap className="w-5 h-5 text-indigo-400 fill-current" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Quote of the Hour</div>
                        <blockquote className="text-lg font-medium text-white italic mb-2">
                            "{QUOTES[new Date().getHours() % QUOTES.length].text}"
                        </blockquote>
                        <div className="text-sm text-gray-500 font-bold">— {QUOTES[new Date().getHours() % QUOTES.length].author}</div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-8">
                    <RetentionHeatmap />
                </div>
                <SchoolActivityFeed />
            </div>
        </div>
    );
}
