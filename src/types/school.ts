
import { ConceptNode } from "./learning";

export type SchoolTier = 'starter' | 'growth' | 'enterprise';

export interface Organization {
    id: string;
    slug: string;           // e.g., "mit-physics", "quantum-high"
    name: string;
    logoUrl?: string;
    tier: SchoolTier;
    adminIds: string[];
    features: {
        maxStudents: number;
        customBranding: boolean;
        apiAccess: boolean;
    };
    createdAt: string;
}

export interface Course {
    id: string;
    schoolId: string;
    title: string;          // e.g., "Introduction to Thermodynamics"
    description: string;
    teacherIds: string[];
    syllabus: ConceptNode[]; // The "Knowledge Graph" of the course
    isPublished: boolean;
    createdAt: string;
}

export interface Cohort {
    id: string;
    courseId: string;
    name: string;           // e.g., "Fall 2026 - Section A"
    startDate: string;
    endDate: string;
    studentIds: string[];
}

export interface TeacherProfile {
    id: string;             // Links to User ID
    schoolIds: string[];    // Schools they teach at
    specialization: string;
    bio?: string;
}

export interface StudentEnrollment {
    id: string;
    studentId: string;
    cohortId: string;
    progress: number;       // 0-100%
    retentionScore: number; // 0-100% (Avg recall strength)
    joinedAt: string;
}

export type AssignmentType = 'quiz' | 'proof_of_work' | 'reading' | 'code';

export interface Assignment {
    id: string;
    courseId: string;
    moduleId: string;       // Links to a specific Node in the Knowledge Graph
    title: string;
    type: AssignmentType;
    description: string;
    dueDate?: string;
    points: number;
    status: 'draft' | 'published' | 'archived';
}

export interface Submission {
    id: string;
    assignmentId: string;
    studentId: string;
    content: string;        // URL, Text, or JSON string for Quiz answers
    status: 'submitted' | 'graded' | 'late';
    score?: number;
    feedback?: string;
    submittedAt: string;
}
