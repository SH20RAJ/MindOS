"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderKanban, GraduationCap, User, Users } from "lucide-react";
import { UserButton } from "@stackframe/stack";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    { name: "School", href: "/school", icon: GraduationCap },
    { name: "Community", href: "/community", icon: Users },
    // { name: "Profile", href: "/profile", icon: User },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50"
            >
                <Link
                    href="/"
                    className={cn(
                        "p-3 rounded-full transition-all duration-300 hover:bg-white/10",
                        pathname === "/" ? "bg-white/20 text-white" : "text-muted-foreground hover:text-white"
                    )}
                >
                    <div className="w-5 h-5 bg-white rounded-full animate-pulse" />
                </Link>

                <div className="h-6 w-px bg-white/10 mx-2" />

                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href; // Simple active check for now

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                isActive
                                    ? "text-white bg-white/10"
                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <Icon className="w-4 h-4" />
                                <span className="hidden sm:inline-block">{item.name}</span>
                            </span>
                        </Link>
                    );
                })}

                <div className="h-6 w-px bg-white/10 mx-2" />

                <div className="px-2">
                    <UserButton />
                </div>
            </motion.nav>
        </div>
    );
}
