"use client";

import MindCloudLayout from "@/app/mindcloud/layout";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Reuse MindCloud's sidebar and structure
    return <MindCloudLayout>{children}</MindCloudLayout>;
}
