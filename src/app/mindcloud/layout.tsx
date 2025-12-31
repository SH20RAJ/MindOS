"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, FileText, StickyNote, Network, Plus, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/mindcloud", icon: LayoutDashboard },
    { name: "Search", href: "/mindcloud/search", icon: Search },
    { name: "Resources", href: "/mindcloud/resources", icon: FileText },
    { name: "Notes", href: "/mindcloud/notes", icon: StickyNote },
    { name: "Knowledge Graph", href: "/mindcloud/graph", icon: Network },
];

export default function MindCloudLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden font-mono">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full" />
                        MINDOS
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <div className="mb-8">
                        <button className="w-full flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
                            <Plus className="w-4 h-4" /> New Resource
                        </button>
                    </div>

                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors",
                                    isActive
                                        ? "bg-white/10 text-white font-bold"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                        <Settings className="w-4 h-4" /> Settings
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:text-red-300 rounded-lg hover:bg-white/5 transition-colors text-left">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto relative">
                {/* Top Bar / Breadcrumbs could go here */}
                {children}
            </main>
        </div>
    );
}
