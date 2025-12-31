export function Footer() {
    return (
        <footer className="w-full py-12 border-t border-white/10 bg-black text-center">
            <div className="container mx-auto px-4">
                <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase mb-4">
                    "Music is the silence between the notes."
                </p>
                <div className="flex justify-center gap-8 text-sm text-subtle">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Spotify</a>
                    <a href="#" className="hover:text-white transition-colors">YouTube</a>
                </div>
                <p className="mt-8 text-xs text-white/20">
                    © {new Date().getFullYear()} Dhwani Music Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
