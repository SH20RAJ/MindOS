"use client";

import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
    {
        author: {
            name: "Alex Rivera",
            handle: "@arivera_dev",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
        },
        text: "MindOS completely changed how I prepare for exams. The spaced repetition is magic.",
        href: "https://twitter.com/arivera_dev"
    },
    {
        author: {
            name: "Sarah Chen",
            handle: "@sarah_codes",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
        },
        text: "I used to forget 90% of what I read. Now I have a second brain that remembers for me.",
        href: "https://twitter.com/sarah_codes"
    },
    {
        author: {
            name: "James Wilson",
            handle: "@jwilson_phd",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
        },
        text: "The active recall features are grounded in solid cognitive science. Highly recommend.",
        href: "https://twitter.com/jwilson_phd"
    },
    {
        author: {
            name: "Emily Davis",
            handle: "@emily_studies",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
        },
        text: "Finally, a tool that understands how learning actually works. Not just another notion clone.",
        href: "https://twitter.com/emily_studies"
    },
    {
        author: {
            name: "Michael Chang",
            handle: "@mchang_ai",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
        },
        text: "The AI curation saves me hours every week. It finds the connections I miss.",
        href: "https://twitter.com/mchang_ai"
    }
];

export function AboutTestimonials() {
    return (
        <TestimonialsSection
            title="Trusted by Lifelong Learners"
            description="Join thousands of students and developers who are upgrading their operating system."
            testimonials={testimonials}
        />
    );
}
