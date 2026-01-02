import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Retention Analytics | MindOS School",
};

export default function AnalyticsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white mb-6">Retention Analytics</h1>
            <div className="grid grid-cols-2 gap-6 h-[400px]">
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex items-center justify-center text-gray-500">
                    [Line Graph: Retention Over Time]
                </div>
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex items-center justify-center text-gray-500">
                    [Bar Chart: Performance by Topic]
                </div>
            </div>
        </div>
    );
}
