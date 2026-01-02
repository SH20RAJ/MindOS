import { NeuralTutorClient } from "@/components/projects/tutor/NeuralTutorClient";

export default async function ProjectTutorPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return <NeuralTutorClient projectId={id} />;
}
