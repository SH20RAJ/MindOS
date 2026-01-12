import {
    LearningGoal,
    ConceptNode,
    Project,
    DailyTask,
    Reflection,
    ReviewItem
} from '@/types/learning';

// --- 1. Learning Goals ---
export const MOCK_GOALS: LearningGoal[] = [
    {
        id: 'g-1',
        title: 'Master Next.js 15 & React Server Components',
        type: 'skill',
        description: 'Transition from React SPA mindset to the new Server Component paradigm.',
        createdAt: '2026-01-01T08:00:00Z',
        targetDate: '2026-02-01T08:00:00Z',
    },
    {
        id: 'g-2',
        title: 'Understand Quantum Computing Basics',
        type: 'curiosity',
        description: 'Learn the fundamentals of Qubits, Superposition, and Entanglement.',
        createdAt: '2025-12-15T08:00:00Z',
    }
];

// --- 2. Concept Map (Next.js Focus) ---
export const MOCK_CONCEPTS: ConceptNode[] = [
    {
        id: 'c-1',
        label: 'Server Components',
        description: 'React components that render exclusively on the server.',
        dependencies: [],
        status: 'mastered',
        difficulty: 'intermediate',
        resources: ['r-1'],
    },
    {
        id: 'c-2',
        label: 'Client Components',
        description: 'Standard React components with interactivity (useState, useEffect).',
        dependencies: ['c-1'],
        status: 'in_progress',
        difficulty: 'beginner',
        resources: ['r-2'],
    },
    {
        id: 'c-3',
        label: 'Server Actions',
        description: 'Async functions executed on the server, called from client.',
        dependencies: ['c-1'],
        status: 'locked',
        difficulty: 'advanced',
        resources: [],
    },
    {
        id: 'c-4',
        label: 'Streaming & Suspense',
        description: 'Progressive rendering of UI segments.',
        dependencies: ['c-1', 'c-2'],
        status: 'locked',
        difficulty: 'advanced',
        resources: [],
    }
];

// --- 3. Projects ---
export const MOCK_PROJECTS: Project[] = [
    {
        id: 'p-1',
        title: 'Build a Markdown Blog',
        goalId: 'g-1',
        description: 'A static-site generated blog using MDX and RSC.',
        status: 'in_progress',
        createdAt: '2026-01-02T10:00:00Z',
        milestones: [
            {
                id: 'm-1',
                title: 'Setup File-based Routing',
                description: 'Configure /blog/[slug] using dynamic routes.',
                isCompleted: true,
                linkedConcepts: ['c-1'],
            },
            {
                id: 'm-2',
                title: 'Implement MDX Parser',
                description: 'Use next-mdx-remote or native MDX support.',
                isCompleted: false,
                linkedConcepts: ['c-1'],
            },
            {
                id: 'm-3',
                title: 'Add Search Functionality',
                description: 'Client-side search using useSearchParams.',
                isCompleted: false,
                linkedConcepts: ['c-2'],
            }
        ],
    },
    {
        id: 'quantum',
        title: 'Quantum Mechanics Integration',
        goalId: 'g-2',
        description: 'Mastery of Qubits, Superposition, and Entanglement through simulation.',
        status: 'in_progress',
        createdAt: '2025-12-25T10:00:00Z',
        milestones: [
            {
                id: 'm-q1',
                title: 'Mathematical Foundations (Linear Algebra)',
                description: 'Vector spaces, inner products, and diaphanous matrices.',
                isCompleted: true,
                linkedConcepts: ['c-q1'],
            },
            {
                id: 'm-q2',
                title: 'Qubit Logic Gates Simulation',
                description: 'Build a visual simulator for Hadamard and CNOT gates.',
                isCompleted: false,
                linkedConcepts: ['c-q2'],
            },
            {
                id: 'm-q3',
                title: 'Implement Shor\'s Algorithm',
                description: 'The end-boss of quantum computing basics.',
                isCompleted: false,
                linkedConcepts: ['c-q3'],
            }
        ],
    }
    {
        id: 'os-kernel',
        title: 'Operating System Development',
        goalId: 'g-3',
        description: 'Build a Unix-like kernel from scratch, focusing on memory management and process scheduling.',
        status: 'in_progress',
        createdAt: '2026-01-12T10:00:00Z',
        milestones: [
            {
                id: 'm-os1',
                title: 'Bootloader & Real Mode',
                description: 'Write a basic bootloader in Assembly to switch to Protected Mode.',
                isCompleted: true,
                linkedConcepts: ['c-os1'],
            },
            {
                id: 'm-os2',
                title: 'Kernel Entry & VGA Driver',
                description: 'Implement kmain() in C and write a VGA text mode driver.',
                isCompleted: true,
                linkedConcepts: ['c-os2'],
            },
            {
                id: 'm-os3',
                title: 'Interrupt Descriptor Table (IDT)',
                description: 'Handle CPU exceptions and hardware interrupts (keyboard, timer).',
                isCompleted: false,
                linkedConcepts: ['c-os3'],
            },
            {
                id: 'm-os4',
                title: 'Paging & Memory Management',
                description: 'Implement virtual memory, paging, and a heap allocator.',
                isCompleted: false,
                linkedConcepts: ['c-os4'],
            }
        ],
    }
];

// --- 4. Daily Tasks (The "OS" Feed) ---
export const MOCK_DAILY_TASKS: DailyTask[] = [
    {
        id: 't-1',
        type: 'learn',
        title: 'Micro-Concept: The "use client" Directive',
        description: 'Read documentation on when and where to place "use client".',
        durationMinutes: 15,
        isCompleted: true,
    },
    {
        id: 't-2',
        type: 'recall',
        title: 'Quick Quiz: Server vs Client',
        description: 'Answer 3 questions about boundary attributes.',
        durationMinutes: 5,
        isCompleted: false,
    },
    {
        id: 't-3',
        type: 'apply',
        title: 'Project Task: Interactive Like Button',
        description: 'Implement a like button (Client Component) inside a Blog Post (Server Component).',
        durationMinutes: 45,
        isCompleted: false,
        contextData: { projectId: 'p-1', milestoneId: 'm-3' }
    },
    {
        id: 't-4',
        type: 'reflect',
        title: 'Daily Synthesis',
        description: 'What clicked today? What is still confusing?',
        durationMinutes: 10,
        isCompleted: false,
    }
];

// --- 5. Reflections ---
export const MOCK_REFLECTIONS: Reflection[] = [
    {
        id: 'ref-1',
        taskId: 't-1',
        content: 'Realized that "use client" is a boundary, not just a file type. It effects everything imported into it.',
        tags: ['Next.js', 'Architecture', 'Eureka'],
        sentiment: 'eureka',
        createdAt: '2026-01-10T18:30:00Z',
    }
];

// --- 6. Review Queue ---
export const MOCK_REVIEWS: ReviewItem[] = [
    {
        id: 'rev-1',
        conceptId: 'c-1',
        question: 'Can Server Components import Client Components?',
        answer: 'Yes, absolutely. This is the standard pattern.',
        nextReviewDate: '2026-01-11T09:00:00Z',
        interval: 1,
        status: 'learning',
    },
    {
        id: 'rev-2',
        conceptId: 'c-1',
        question: 'Can Client Components import Server Components?',
        answer: 'No, not directly. You must pass Server Components as children props to Client Components to avoid dragging them into the client bundle.',
        nextReviewDate: '2026-01-11T09:00:00Z',
        interval: 1,
        status: 'learning',
    }
];
