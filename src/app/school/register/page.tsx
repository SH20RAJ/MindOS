import RegisterSchoolClient from "@/components/school/auth/RegisterSchoolClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deploy School Node | MindOS",
    description: "Launch a new digital learning environment for your institution.",
};

export default function RegisterSchoolPage() {
    return <RegisterSchoolClient />;
}
