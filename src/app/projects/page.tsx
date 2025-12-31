import { ProjectCard } from "@/components/projects/ProjectCard";

const projects = [
    { id: 1, title: "Quantum Physics Integration", category: "Academic", progress: 45, color: "bg-purple-500" },
    { id: 2, title: "Japanese N3 Mastery", category: "Language", progress: 12, color: "bg-red-500" },
    { id: 3, title: "Jazz Guitar Improvisation", category: "Music", progress: 78, color: "bg-orange-500" },
    { id: 4, title: "Full Stack Development", category: "Skill", progress: 30, color: "bg-blue-500" },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                        Project Gallery
                    </h1>
                    <p className="text-xl text-muted-foreground font-mono tracking-widest max-w-xl">
                        Your active learning collection. Use the "Sleeve" to access details, "Disc" to start learning.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 place-items-center">
                    {projects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
