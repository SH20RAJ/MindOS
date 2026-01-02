
import { Organization, Course, Cohort } from "../types/school";
import { ConceptNode } from "../types/learning";

// Mock Concept Nodes for a Course
const PHYSICS_NODES: ConceptNode[] = [
    {
        id: "phys-101",
        label: "Vectors",
        description: "Quantities with magnitude and direction.",
        dependencies: [],
        status: "mastered",
        difficulty: "beginner",
        resources: []
    },
    {
        id: "phys-102",
        label: "Kinematics",
        description: "Motion of objects without reference to forces.",
        dependencies: ["phys-101"],
        status: "in_progress",
        difficulty: "beginner",
        resources: []
    },
    {
        id: "phys-103",
        label: "Newton's Laws",
        description: "The relationship between a body and the forces acting upon it.",
        dependencies: ["phys-102"],
        status: "locked",
        difficulty: "intermediate",
        resources: []
    }
];

export const MOCK_SCHOOLS: Organization[] = [
    {
        id: "sch_123",
        slug: "quantum-uni",
        name: "Quantum University",
        tier: "enterprise",
        adminIds: ["admin_1"],
        features: {
            maxStudents: 5000,
            customBranding: true,
            apiAccess: true
        },
        createdAt: "2024-01-01T00:00:00Z"
    },
    {
        id: "sch_456",
        slug: "design-academy",
        name: "Global Design Academy",
        tier: "growth",
        adminIds: ["admin_2"],
        features: {
            maxStudents: 500,
            customBranding: false,
            apiAccess: false
        },
        createdAt: "2024-06-15T00:00:00Z"
    }
];

export const MOCK_COURSES: Course[] = [
    {
        id: "course_phys_1",
        schoolId: "sch_123",
        title: "Classical Mechanics I",
        description: "Foundation of physics.",
        teacherIds: ["teach_1"],
        syllabus: PHYSICS_NODES,
        isPublished: true,
        createdAt: "2024-08-01T00:00:00Z"
    }
];

export const MOCK_COHORTS: Cohort[] = [
    {
        id: "cohort_fall_24",
        courseId: "course_phys_1",
        name: "Fall 2024",
        startDate: "2024-09-01",
        endDate: "2024-12-20",
        studentIds: ["stud_1", "stud_2", "stud_3"]
    }
];
