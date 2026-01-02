import { Calendar, CheckCircle, Clock, FileText, Plus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cognitive Tasks | MindOS School",
};

export default function AssignmentsPage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-black text-white">Cognitive Tasks</h1>
                    <p className="text-gray-400">Manage quizzes, essays, and proof-of-work.</p>
                </div>
                <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white font-bold flex items-center gap-2 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                    <Plus className="w-4 h-4" /> Create Task
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Thermodynamics Quiz", type: "Quiz", due: "Tomorrow", status: "Active", count: 24, completed: 18 },
                    { title: "Mid-Term Essay: Ethics", type: "Essay", due: "Oct 24", status: "Draft", count: 0, completed: 0 },
                    { title: "Lab Report: Quantum Spin", type: "Project", due: "Oct 30", status: "Scheduled", count: 0, completed: 0 },
                ].map((task, i) => (
                    <div key={i} className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${task.type === 'Quiz' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                    task.type === 'Essay' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                        'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                }`}>
                                {task.type}
                            </span>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {task.due}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{task.title}</h3>

                        <div className="space-y-3 mt-6">
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Completion</span>
                                <span>{task.completed}/{task.count === 0 ? '-' : task.count}</span>
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                                    style={{ width: `${task.count > 0 ? (task.completed / task.count) * 100 : 0}%` }}
                                />
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
                            <button className="flex-1 text-xs font-bold bg-white/5 py-2 rounded text-white hover:bg-white/10 transition-colors">
                                Edit
                            </button>
                            <button className="flex-1 text-xs font-bold bg-white/5 py-2 rounded text-white hover:bg-white/10 transition-colors">
                                Analytics
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
