import { MOCK_PROJECTS } from "@/mock/data";
import { notFound } from "next/navigation";
import { ProjectDaily } from "../components/daily";

export default async function DailyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = MOCK_PROJECTS.find(p => p.id === id);

    if (!project) return notFound();

    return <ProjectDaily project={project} />;
}
