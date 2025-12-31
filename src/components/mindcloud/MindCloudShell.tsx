"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, FileText, StickyNote, Network, Plus, Settings, LogOut, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useStackApp, useUser } from "@stackframe/stack";
import { cn } from "@/lib/utils";
import { AnimatedIcon } from "@/components/ui/animated-icon";

const navigation = [
    { name: "Dashboard", href: "/mindcloud", icon: LayoutDashboard },
    { name: "Search", href: "/mindcloud/search", icon: Search },
    { name: "Resources", href: "/mindcloud/resources", icon: FileText },
    { name: "Notes", href: "/mindcloud/notes", icon: StickyNote },
    { name: "Knowledge Graph", href: "/mindcloud/graph", icon: Network },
    { name: "Profile", href: "/profile", icon: User },
];

export function MindCloudShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const user = useUser();
    const app = useStackApp();

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            <div className="p-6 border-b border-white/10">
                {user ? (
                    <div className="flex items-center gap-3">
                        {user.profileImageUrl ? (
                            <img src={user.profileImageUrl} alt={user.displayName || "User"} className="w-10 h-10 rounded-full border border-white/20" />
                        ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {user.displayName?.charAt(0) || "U"}
                            </div>
                        )}
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-sm font-bold text-white truncate max-w-[140px]">{user.displayName || "MindOS User"}</span>
                            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                ONLINE
                            </span>
                        </div>
                    </div>
                ) : (
                    <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full" />
                        MINDOS
                    </Link>
                )}
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
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors group",
                                isActive
                                    ? "bg-white/10 text-white font-bold"
                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                            )}
                        >
                            <AnimatedIcon icon={item.icon} className="w-4 h-4" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-2">
                <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                    <Settings className="w-4 h-4" /> Settings
                </Link>
                <button
                    onClick={() => app.signOut()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:text-red-300 rounded-lg hover:bg-white/5 transition-colors text-left"
                >
                    <LogOut className="w-4 h-4" /> Sign Out
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden font-mono">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 border-r border-white/10 flex-col">
                <SidebarContent />
            </aside>

            {/* Mobile Header & Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Mobile Header */}
                <div className="lg:hidden p-4 border-b border-white/10 flex items-center justify-between bg-black">
                    <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-6 h-6 bg-white rounded-full" />
                        MINDOS
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 bg-black border-r border-white/10 w-64 text-white">
                            <SidebarContent />
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-auto relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
