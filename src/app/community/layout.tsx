import { Share2, Users, Calendar, Trophy, ShoppingBag, Search, Bell } from "lucide-react";
import Link from "next/link";

export default function CommunityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
            {/* Community Navigation Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-6">
                <div className="flex items-center gap-8">
                    <Link href="/mindcloud" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <Share2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">MindNetwork</span>
                    </Link>

                    <nav className="flex items-center gap-1">
                        {[
                            { label: 'Feed', href: '/community', icon: Share2 },
                            { label: 'Groups', href: '/community/groups', icon: Users },
                            { label: 'Events', href: '/community/events', icon: Calendar },
                            { label: 'Market', href: '/community/marketplace', icon: ShoppingBag },
                            { label: 'Rankings', href: '/community/leaderboard', icon: Trophy },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 rounded-full hover:bg-white/10 text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search minds..."
                            className="bg-zinc-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors w-64"
                        />
                    </div>
                    <button className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-zinc-800 transition-colors relative">
                        <Bell className="w-4 h-4 text-zinc-400" />
                        <span className="absolute top-2 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 border-2 border-black" />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
                <div className="flex gap-8">
                    {/* Left Sidebar (Quick Access) */}
                    <aside className="w-64 hidden lg:block space-y-8 fixed top-24 bottom-0 overflow-y-auto pr-4 scrollbar-hide">
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">My Squads</h3>
                            <div className="space-y-1">
                                {['Deep Learning Club', 'YCombinator Prep', 'React Wizards'].map((group) => (
                                    <div key={group} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                            {group[0]}
                                        </div>
                                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{group}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Trending Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {['#neuroscience', '#startups', '#ui-design', '#rust-lang', '#mindos'].map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/5 text-xs text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Center Content */}
                    <div className="flex-1 lg:ml-72">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
