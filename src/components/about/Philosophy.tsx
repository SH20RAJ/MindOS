"use client";

import { Code } from "lucide-react";

export function Philosophy() {
    return (
        <section className="py-32 bg-white text-black text-center">
            <div className="max-w-3xl mx-auto px-4">
                <Code className="w-16 h-16 mx-auto mb-8" />
                <h2 className="text-5xl font-black tracking-tighter mb-8">OPEN SOURCE FOREVER.</h2>
                <p className="text-2xl font-medium mb-12">
                    Knowledge should not be gated. We are building MindOS as a public utility for the curious.
                </p>
                <a href="https://github.com/mindos-labs" className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
                    Contribute on GitHub
                </a>
            </div>
        </section>
    );
}
