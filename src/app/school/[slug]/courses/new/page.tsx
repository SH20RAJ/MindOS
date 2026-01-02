import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Course Builder | MindOS School",
};

export default function CourseBuilderPage() {
    return (
        <div className="p-8 h-screen flex flex-col">
            <header className="mb-6 flex justify-between items-center">
                <h1 className="text-3xl font-black text-white">Course Builder</h1>
                <button className="bg-indigo-600 px-6 py-2 rounded-lg text-white font-bold">Save Graph</button>
            </header>

            <div className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center text-gray-500 border-dashed">
                [Interactive Graph Editor Placeholder]
                <br />
                Nodes: Week 1, Week 2, Week 3...
            </div>
        </div>
    );
}
