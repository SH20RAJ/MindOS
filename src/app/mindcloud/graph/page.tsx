import { KnowledgeGraph } from "@/components/mindcloud/KnowledgeGraph";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Knowledge Graph | MindCloud",
    description: "Visual exploration of your second brain connections.",
};

export default function GraphPage() {
    return (
        <KnowledgeGraph />
    );
}
