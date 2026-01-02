import { MOCK_PROJECTS } from "@/mock/data";
import { notFound } from "next/navigation";
import { ProjectOverview } from "../components/overview";

export default async function OverviewPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = MOCK_PROJECTS.find(p => p.id === id);

    if (!project) return notFound();

    return <ProjectOverview project={project} />;
}
