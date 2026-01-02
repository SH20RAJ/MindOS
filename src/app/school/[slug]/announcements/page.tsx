import { Metadata } from "next";
import { Bell, Megaphone, Pin } from "lucide-react";

export const metadata: Metadata = {
    title: "Announcements | MindOS School",
};

export default function AnnouncementsPage() {
    return (
        <div className="p-8 max-w-4xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black text-white">Announcements</h1>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Megaphone className="w-4 h-4" /> Post Update
                </button>
            </div>

            <div className="space-y-4">
                {/* Pinned Post */}
                <div className="p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-3 text-indigo-400">
                        <Pin className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold uppercase tracking-wider">Pinned by Dean</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Mid-Term Exam Schedule Released</h2>
                    <p className="text-indigo-200/80 mb-4 text-sm leading-relaxed">
                        The official schedule for Fall 2026 mid-terms is now available in the Library.
                        Please ensure all cognitive mapping tasks are completed by Oct 15th.
                    </p>
                    <div className="text-xs text-indigo-400/60">Posted 2 days ago</div>
                </div>

                {/* Regular Posts */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-white">System Maintenance Scheduled</h3>
                            <span className="text-xs text-gray-500">Oct {10 + i}, 2026</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">MindOS will be undergoing a brief retention algorithm update...</p>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-zinc-800" /> Admin Team
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
