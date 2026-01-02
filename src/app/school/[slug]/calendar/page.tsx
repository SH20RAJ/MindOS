import { ChevronLeft, ChevronRight, Clock, MapPin, Plus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Academic Calendar | MindOS School",
};

export default function CalendarPage() {
    const days = Array.from({ length: 35 }, (_, i) => i + 1); // Mock 35 days for grid

    // Mock Events
    const events: Record<number, { title: string, type: 'exam' | 'lecture' | 'deadline' }[]> = {
        5: [{ title: "Physics Mid-Term", type: "exam" }],
        12: [{ title: "Lab Report Due", type: "deadline" }],
        15: [{ title: "Guest Lecture: AI", type: "lecture" }],
        24: [{ title: "Project Alpha", type: "deadline" }],
    };

    return (
        <div className="p-6 h-screen flex flex-col">
            <header className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-black text-white">October 2026</h1>
                    <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg border border-white/10">
                        <button className="p-1 hover:bg-white/10 rounded"><ChevronLeft className="w-4 h-4 text-gray-400" /></button>
                        <button className="p-1 hover:bg-white/10 rounded"><ChevronRight className="w-4 h-4 text-gray-400" /></button>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500" /> Exam</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /> Deadline</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Lecture</span>
                    </div>
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm hover:opacity-90">
                        <Plus className="w-4 h-4" /> Add Event
                    </button>
                </div>
            </header>

            <div className="flex-1 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden flex flex-col">
                {/* Days Header */}
                <div className="grid grid-cols-7 border-b border-white/10 bg-zinc-950">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 grid grid-cols-7 grid-rows-5">
                    {days.slice(0, 31).map((day) => ( // Just show 31 days
                        <div key={day} className="border-r border-b border-white/5 p-3 relative hover:bg-white/5 transition-colors group min-h-[100px]">
                            <span className={`text-sm font-bold ${day === 14 ? 'bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full' : 'text-gray-500'}`}>
                                {day}
                            </span>

                            <div className="mt-2 space-y-1">
                                {events[day]?.map((ev, i) => (
                                    <div key={i} className={`text-[10px] font-bold px-2 py-1 rounded truncate border ${ev.type === 'exam' ? 'bg-rose-500/10 text-rose-300 border-rose-500/20' :
                                            ev.type === 'deadline' ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' :
                                                'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                                        }`}>
                                        {ev.title}
                                    </div>
                                ))}
                            </div>

                            {/* Hover Add Button */}
                            <button className="absolute bottom-2 right-2 p-1 bg-white text-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                <Plus className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                    {/* Empty cells for padding if needed, simplified here */}
                </div>
            </div>
        </div>
    );
}
