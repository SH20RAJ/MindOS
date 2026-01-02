import StudentJoinClient from "@/components/school/auth/StudentJoinClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join Class | MindOS Student",
    description: "Enter your class code to join your school's learning graph.",
};

export default function StudentJoinPage() {
    return <StudentJoinClient />;
}
