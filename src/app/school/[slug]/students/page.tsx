import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Student Roster | MindOS School",
};

export default function StudentsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white mb-6">Student Roster</h1>
            <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-zinc-950 text-gray-200 font-bold uppercase">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">ID</th>
                            <th className="p-4">Retention</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-white/5">
                                <td className="p-4 text-white font-medium">Student {i}</td>
                                <td className="p-4">ST-{1000 + i}</td>
                                <td className="p-4"><span className="text-emerald-400">9{i}%</span></td>
                                <td className="p-4 text-indigo-400 hover:underline cursor-pointer">View Graph</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
