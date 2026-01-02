import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Academic Calendar | MindOS School",
};

export default function CalendarPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white mb-6">Academic Calendar</h1>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-8 min-h-[500px] flex items-center justify-center text-gray-500">
                [Full Calendar View w/ Assignment Due Dates]
            </div>
        </div>
    );
}
