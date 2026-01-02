import SchoolLoginClient from "@/components/school/auth/SchoolLoginClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Admin Login | MindOS",
    description: "Sign in to your school's command center.",
};

export default function SchoolLoginPage() {
    return <SchoolLoginClient />;
}
