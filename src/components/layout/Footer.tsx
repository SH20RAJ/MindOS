export function Footer() {
    return (
        <footer className="w-full py-12 border-t border-white/10 bg-black text-center">
            <div className="container mx-auto px-4">
                <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase mb-4">
                    "Built by Students, For Students."
                </p>
                <div className="flex justify-center gap-8 text-sm text-muted-foreground/60">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Discord</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
                <div className="mt-8 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full mb-2" />
                    <p className="text-xs text-white/20">
                        © {new Date().getFullYear()} MindOS Labs. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
