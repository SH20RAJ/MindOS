import { MOCK_SCHOOLS } from "@/mock/school-data";
import { BarChart3, BookOpen, Calendar, CreditCard, FileBarChart, GraduationCap, LayoutDashboard, Megaphone, Settings, Users } from "lucide-react";
import Link from "next/link";

export default async function MultiTenantLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    // Await params for Next.js 15
    const { slug } = await params;
    const school = MOCK_SCHOOLS.find(s => s.slug === slug);

    return (
        <div className="min-h-screen bg-black flex">
            <aside className="w-64 border-r border-white/10 bg-zinc-950 flex flex-col fixed h-full z-20">
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
                            {school ? school.name.substring(0, 1) : "S"}
                        </div>
                        <div className="leading-tight">
                            <h2 className="font-bold text-sm text-white truncate max-w-[140px]">{school ? school.name : "Portal"}</h2>
                            <span className="text-xs text-muted-foreground uppercase">{school?.tier || "Enterprise"}</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <Link href={`/school/${slug}/dashboard`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-white/5 rounded-lg border border-white/5">
                        <LayoutDashboard className="w-4 h-4 text-indigo-400" /> Dashboard
                    </Link>
                    <Link href={`/school/${slug}/analytics`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <BarChart3 className="w-4 h-4" /> Analytics
                    </Link>
                    <Link href={`/school/${slug}/calendar`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Calendar className="w-4 h-4" /> Calendar
                    </Link>
                    <div className="pt-4 pb-2">
                        <div className="px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Management</div>
                    </div>
                    <Link href={`/school/${slug}/courses`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <BookOpen className="w-4 h-4" /> Courses
                    </Link>
                    <Link href={`/school/${slug}/students`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Users className="w-4 h-4" /> Students
                    </Link>
                    <Link href={`/school/${slug}/assignments`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <GraduationCap className="w-4 h-4" /> Assignments
                    </Link>
                    <Link href={`/school/${slug}/library`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <BookOpen className="w-4 h-4" /> Library
                    </Link>

                    <div className="pt-4 pb-2">
                        <div className="px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Admin</div>
                    </div>
                    <Link href={`/school/${slug}/staff`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Users className="w-4 h-4" /> Staff
                    </Link>
                    <Link href={`/school/${slug}/announcements`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Megaphone className="w-4 h-4" /> News
                    </Link>
                    <Link href={`/school/${slug}/reports`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <FileBarChart className="w-4 h-4" /> Reports
                    </Link>
                    <Link href={`/school/${slug}/billing`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <CreditCard className="w-4 h-4" /> Billing
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link href={`/school/${slug}/settings`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        <Settings className="w-4 h-4" /> Settings
                    </Link>
                </div>
            </aside>

            <main className="flex-1 ml-64 min-h-screen bg-zinc-950/50">
                {children}
            </main>
        </div>
    );
}
