"use client";

import { Search } from "lucide-react";

export function JournalSearch() {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
                type="text"
                placeholder="Search entries..."
                className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 w-64 transition-all"
            />
        </div>
    );
}
