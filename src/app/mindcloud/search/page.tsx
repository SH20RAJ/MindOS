import { SearchInterface } from "@/components/mindcloud/SearchInterface";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Search | MindCloud",
    description: "Search your knowledge base.",
};

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
            <SearchInterface />
        </Suspense>
    );
}
