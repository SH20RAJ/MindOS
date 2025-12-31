import { ProjectHeader } from "@/components/project/ProjectHeader";
import { CognitivePipeline } from "@/components/project/CognitivePipeline";

// Mock Data Store (would be DB in real app)
const PIPELINE_DATA = {
    "1": [
        { id: 1, title: "Quantum Superposition", type: "concept", status: "synthesized", retention: 94 },
        { id: 2, title: "Wave Function Collapse", type: "concept", status: "synthesized", retention: 88 },
        { id: 3, title: "Video: Feynman Lectures", type: "source", status: "ingested", retention: 100 },
        { id: 4, title: "Schrödinger Equation", type: "concept", status: "pending", retention: 0 },
        { id: 5, title: "Entanglement Mockup", type: "project", status: "pending", retention: 0 },
    ],
    "default": [
        { id: 1, title: "Core Principles", type: "concept", status: "synthesized", retention: 85 },
        { id: 2, title: "Official Documentation", type: "source", status: "ingested", retention: 100 },
    ]
};

const PROJECT_META = {
    "1": { title: "Quantum Physics Integration", progress: 45, streak: 12 },
    "2": { title: "Japanese N3 Mastery", progress: 12, streak: 3 },
    "3": { title: "Jazz Guitar Improvisation", progress: 78, streak: 45 },
    "default": { title: "New Cognitive Project", progress: 0, streak: 0 }
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Fallback to default if ID not found in mock
    const meta = PROJECT_META[id as keyof typeof PROJECT_META] || PROJECT_META["default"];
    const workflow = PIPELINE_DATA[id as keyof typeof PIPELINE_DATA] || PIPELINE_DATA["default"];

    return (
        <main className="min-h-screen bg-black pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                <ProjectHeader
                    title={meta.title}
                    progress={meta.progress}
                    streak={meta.streak}
                />

                <CognitivePipeline
                    initialItems={workflow}
                />
            </div>
        </main>
    );
}
