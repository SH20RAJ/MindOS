import { EventList } from "@/components/events/EventList";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-2 text-white">
                            Tour Dates
                        </h1>
                        <p className="text-xl text-muted-foreground font-mono tracking-widest">
                            Upcoming Live Performances & Gatherings
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="block text-xs font-mono text-accent">SEASON 2026</span>
                        <span className="block text-4xl font-black text-white/20">VOL. II</span>
                    </div>
                </header>

                <EventList />
            </div>
        </main>
    );
}
