"use client";

import { MindFlowWizard } from "@/components/projects/MindFlowWizard";

export default function NewProjectPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 block">MindFlow Protocol v1.0</span>
                <h1 className="text-4xl font-black text-white tracking-tighter">INITIATE NEW PROJECT</h1>
            </div>
            <MindFlowWizard />
        </div>
    );
}
