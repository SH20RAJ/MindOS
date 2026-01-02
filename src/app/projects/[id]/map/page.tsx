import { MOCK_PROJECTS } from "@/mock/data";
import { notFound } from "next/navigation";
import { ProjectConceptMap } from "../components/concept-map";

export default async function MapPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = MOCK_PROJECTS.find(p => p.id === id);

    if (!project) return notFound();

    return <ProjectConceptMap project={project} />;
}
