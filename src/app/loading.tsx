import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono text-white">
			<div className="relative">
				{/* Visual Glitch/Effects */}
				<div className="absolute inset-0 bg-indigo-500/20 blur-xl animate-pulse" />

				{/* Logo or Icon */}
				<div className="relative w-16 h-16 border-2 border-white flex items-center justify-center mb-8 animate-spin duration-[3s]">
					<div className="w-8 h-8 bg-white" />
				</div>
			</div>

			<h2 className="text-xl font-black tracking-widest animate-pulse">
				INITIALIZING MINDOS
			</h2>

			<div className="mt-4 flex flex-col items-center gap-2">
				<div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
					<div className="h-full bg-white animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: '30%' }} />
				</div>
				<div className="text-xs text-muted-foreground">
					Loading Cognitive Models...
				</div>
			</div>

			<style>{`
                @keyframes loading {
                    0% { transform: translateX(-100%) }
                    50% { transform: translateX(100%) }
                    100% { transform: translateX(-100%) }
                }
            `}</style>
		</div>
	);
}
