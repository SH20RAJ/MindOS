import { MindCloudShell } from "@/components/mindcloud/MindCloudShell";

export default function MindCloudLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Now a Server Component that wraps the Client Shell
    return (
        <MindCloudShell>
            {children}
        </MindCloudShell>
    );
}
