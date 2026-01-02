import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Settings | MindOS School",
};

export default function SettingsPage() {
    return (
        <div className="p-8 max-w-2xl">
            <h1 className="text-3xl font-black text-white mb-8">School Settings</h1>

            <div className="space-y-6">
                {/* Settings fields from before... */}
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">School Name</label>
                    <input type="text" defaultValue="Quantum University" className="w-full bg-zinc-900 border border-white/10 p-3 rounded-lg text-white" />
                </div>
                {/* ... */}
            </div>
        </div>
    );
}
