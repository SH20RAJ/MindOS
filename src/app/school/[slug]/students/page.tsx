import { ArrowRight, BrainCircuit } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Student Roster | MindOS School",
};

const INDIAN_NAMES = [
    { name: "Aarav Patel", id: "ST-1001", retention: 92 },
    { name: "Vihaan Gupta", id: "ST-1002", retention: 88 },
    { name: "Ananya Sharma", id: "ST-1003", retention: 95 },
    { name: "Diya Singh", id: "ST-1004", retention: 76 },
    { name: "Rohan Kumar", id: "ST-1005", retention: 82 },
    { name: "Ishaan Reddy", id: "ST-1006", retention: 89 },
    { name: "Saanvi Iyer", id: "ST-1007", retention: 94 },
    { name: "Aditya Verma", id: "ST-1008", retention: 81 },
];

export default async function StudentsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-white">Student Roster</h1>
                <div className="text-sm text-gray-500">
                    Total: <span className="text-white font-bold">{INDIAN_NAMES.length}</span>
                </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-zinc-950 text-gray-200 font-bold uppercase">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">ID</th>
                            <th className="p-4">Retention</th>
                            <th className="p-4">Cognitive Graph</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {INDIAN_NAMES.map((student) => (
                            <tr key={student.id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 text-white font-medium flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs ring-1 ring-indigo-500/30">
                                        {student.name.charAt(0)}
                                    </div>
                                    {student.name}
                                </td>
                                <td className="p-4 font-mono text-xs opacity-70">{student.id}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${student.retention > 90 ? 'bg-emerald-500' : student.retention > 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                style={{ width: `${student.retention}%` }}
                                            />
                                        </div>
                                        <span className={`font-bold ${student.retention > 90 ? 'text-emerald-400' : student.retention > 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                                            {student.retention}%
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <Link
                                        href={`/mindcloud/graph`} // Linking to main graph for demo, or could use /school/${slug}/students/${student.id}
                                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold text-xs bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 transition-all hover:scale-105"
                                    >
                                        <BrainCircuit className="w-3 h-3" /> View Graph
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
