import SchoolLandingClient from "@/components/school/landing/SchoolLandingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MindOS for Education | The Retention Operating System",
    description: "Empower your school with a retention management system that visualizes and reverses learning decay.",
};

export default function SchoolLandingPage() {
    return <SchoolLandingClient />;
}
