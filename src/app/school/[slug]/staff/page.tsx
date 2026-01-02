import { Metadata } from "next";
import { Mail, Plus, Shield, Trash2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Staff Directory | MindOS School",
};

export default function StaffPage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-black text-white">Staff Directory</h1>
                    <p className="text-gray-400">Manage faculty access and roles.</p>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-6 bg-zinc-900 border border-white/10 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-gray-400">
                            Dr
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-white">Professor {String.fromCharCode(64 + i)}.</h3>
                                {i === 1 && <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/30">ADMIN</span>}
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Physics Department</p>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-white/10 rounded text-gray-400"><Mail className="w-4 h-4" /></button>
                                <button className="p-2 hover:bg-white/10 rounded text-gray-400"><Shield className="w-4 h-4" /></button>
                                <button className="p-2 hover:bg-red-500/10 rounded text-red-500 ml-auto"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
