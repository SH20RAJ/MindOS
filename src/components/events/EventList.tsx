import { EventCard } from "./EventCard";

const events = [
    {
        id: 1,
        day: "24",
        month: "Jan",
        title: "Battle of the Bands",
        location: "Main Auditorium",
        time: "6:00 PM",
        status: "upcoming" as const
    },
    {
        id: 2,
        day: "14",
        month: "Feb",
        title: "Valentine's Acoustic Night",
        location: "Amphitheater",
        time: "7:00 PM",
        status: "upcoming" as const
    },
    {
        id: 3,
        day: "01",
        month: "Mar",
        title: "Spring Fest Opener",
        location: "Campus Grounds",
        time: "5:00 PM",
        status: "sold-out" as const
    },
    {
        id: 4,
        day: "10",
        month: "Mar",
        title: "Guest Lecture: Hans Zimmer",
        location: "Virtual Hall",
        time: "8:00 PM",
        status: "upcoming" as const
    }
];

export function EventList() {
    return (
        <div className="flex flex-col border-t border-white/10">
            {events.map(event => (
                <EventCard key={event.id} {...event} />
            ))}
        </div>
    );
}
