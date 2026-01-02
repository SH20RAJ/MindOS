"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function SchoolLoginClient() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Reuse previous logic */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-md w-full relative z-10">
                <Link href="/school" className="flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors self-start">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <h1 className="text-2xl font-black text-white mb-2 text-center">Admin Portal</h1>
                    <p className="text-muted-foreground text-sm text-center mb-8">Sign in to manage your school node.</p>

                    <div className="space-y-4">
                        <button
                            onClick={() => router.push('/school/quantum-uni/dashboard')}
                            className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
