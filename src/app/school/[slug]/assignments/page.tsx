import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cognitive Tasks | MindOS School",
};

export default function AssignmentsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white mb-6">Assignments</h1>
            <div className="p-12 text-center border border-dashed border-white/20 rounded-2xl">
                <p className="text-gray-500">Assignment Interface (Placeholder)</p>
            </div>
        </div>
    );
}
