"use client";

import { TestimonialsColumn, type Testimonial } from "@/components/blocks/testimonials-columns-1";

const humorTestimonials: Testimonial[] = [
    {
        text: "Can't believe I actually have to think now. I preferred being mindless. 1/5 stars.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=faces",
        name: "Karen B.",
        role: "Former Procrastinator"
    },
    {
        text: "My friends stopped inviting me to trivia nights because I keep winning. Thanks a lot, MindOS.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces",
        name: "Dave S.",
        role: "Unbearable Know-it-all"
    },
    {
        text: "I finished my degree in half the time. Now I have to get a job sooner. Horrible.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces",
        name: "Jessica L.",
        role: "Reluctant Adult"
    },
    {
        text: "It's unfair to people who don't use it. Should be banned for being a performance enhancer.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
        name: "Mark T.",
        role: "Average Joe"
    },
    {
        text: "My brain hurts from being this efficient. I miss the fog.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
        name: "Sarah M.",
        role: "Nostalgic for Confusion"
    }
];

export function HumorTestimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground mb-4">
                    We're Sorry.
                </h2>
                <p className="text-muted-foreground text-xl">
                    Our users have some... complaints.
                </p>
            </div>
            <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden mask-linear-gradient">
                <div className="flex gap-8">
                    <TestimonialsColumn
                        testimonials={humorTestimonials}
                        className="flex-shrink-0"
                        duration={15}
                    />
                    <TestimonialsColumn
                        testimonials={[...humorTestimonials].reverse()}
                        className="flex-shrink-0 mt-12"
                        duration={18}
                    />
                    <TestimonialsColumn
                        testimonials={humorTestimonials}
                        className="flex-shrink-0"
                        duration={15}
                    />
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
            </div>
        </section>
    );
}
