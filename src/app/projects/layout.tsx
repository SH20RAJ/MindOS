import Link from "next/link";
import { ArrowLeft, LayoutGrid } from "lucide-react";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
            {/* Minimal Header for Context */}
            <nav className="fixed top-0 left-0 right-0 p-6 z-50 flex items-center justify-between pointer-events-none">
                <Link href="/dashboard" className="pointer-events-auto flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </Link>

                <div className="pointer-events-auto flex items-center gap-2 text-sm font-mono text-muted-foreground bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <LayoutGrid className="w-4 h-4" /> PROJECT HUB
                </div>
            </nav>

            {children}
        </div>
    );
}
