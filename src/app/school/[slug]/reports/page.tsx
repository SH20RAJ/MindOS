import { Metadata } from "next";
import { Download, FileBarChart, Filter } from "lucide-react";

export const metadata: Metadata = {
    title: "Reports Center | MindOS School",
};

export default function ReportsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white mb-2">Data Reports</h1>
            <p className="text-gray-400 mb-8">Export retention and performance data for compliance.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Weekly Retention Audit", type: "CSV", size: "2.4 MB" },
                    { title: "Student Engagement Summary", type: "PDF", size: "1.2 MB" },
                    { title: "Curriculum Gaps Analysis", type: "PDF", size: "4.8 MB" },
                    { title: "Faculty Activity Log", type: "CSV", size: "800 KB" },
                    { title: "System Usage Metrics", type: "XLSX", size: "3.1 MB" }
                ].map((report, i) => (
                    <div key={i} className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-white/20 transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-zinc-800 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                                <FileBarChart className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-gray-400">{report.type}</span>
                        </div>
                        <h3 className="font-bold text-white mb-1">{report.title}</h3>
                        <p className="text-xs text-gray-500 mb-6">Generated on Oct 12, 2026</p>

                        <button className="w-full py-2 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" /> Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
