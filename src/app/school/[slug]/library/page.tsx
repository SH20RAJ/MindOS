import { Metadata } from "next";
import { FileText, Film, Folder, Upload } from "lucide-react";

export const metadata: Metadata = {
    title: "Digital Library | MindOS School",
};

export default function LibraryPage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-white">Digital Library</h1>
                <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white font-bold flex items-center gap-2">
                    <Upload className="w-4 h-4" /> Upload Resource
                </button>
            </div>

            <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
                {['All Assets', 'Textbooks', 'Lecture Recordings', 'Lab Manuals'].map((tab, i) => (
                    <button key={tab} className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${i === 0 ? 'bg-white text-black' : 'bg-zinc-900 text-gray-400 border border-white/10'}`}>
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {/* Folders */}
                <div className="p-4 bg-zinc-900 border border-white/10 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-zinc-800 cursor-pointer transition-colors">
                    <Folder className="w-10 h-10 text-yellow-500/80 mb-2" />
                    <span className="text-sm font-medium text-white">Physics 101</span>
                    <span className="text-xs text-gray-500">12 items</span>
                </div>

                {/* Files */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl flex flex-col items-center justify-center aspect-square group hover:border-indigo-500/50 transition-colors">
                        {i % 2 === 0 ? <FileText className="w-8 h-8 text-indigo-400 mb-3" /> : <Film className="w-8 h-8 text-rose-400 mb-3" />}
                        <span className="text-xs text-gray-300 text-center truncate w-full px-2">Lecture_Week_{i}.pdf</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
