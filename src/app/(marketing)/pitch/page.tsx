import { PitchDeck } from "@/components/pitch/PitchDeck";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pitch | MindOS",
    description: "The revolution in learning technology.",
};

export default function PitchPage() {
    return <PitchDeck />;
}
