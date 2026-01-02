"use client";

import { Search } from "lucide-react";

export function ResourcesSearch() {
    return (
        <div className="relative max-w-2xl mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
                type="text"
                placeholder="Search resources by title, tag, or content..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-muted-foreground/50"
            />
        </div>
    );
}
