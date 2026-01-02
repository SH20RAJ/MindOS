export type GoalType = 'exam' | 'skill' | 'project' | 'curiosity';
export type MilestoneStatus = 'pending' | 'in_progress' | 'completed' | 'blocked';
export type TaskType = 'learn' | 'recall' | 'apply' | 'reflect';
export type ConfidenceLevel = 'low' | 'medium' | 'high';
export type ReviewStatus = 'new' | 'learning' | 'review' | 'mastered';

// 1. Intent & Goal Definition
export interface LearningGoal {
    id: string;
    title: string;          // e.g., "Master Quantum Computing"
    type: GoalType;         // The nature of the goal
    description: string;    // User's "Why"
    targetDate?: string;    // Optional deadline
    createdAt: string;
}

// 2. Concept Map (The "Brain")
export interface ConceptNode {
    id: string;
    label: string;          // e.g., "Superposition"
    description: string;    // Brief explanation
    parentId?: string;      // For hierarchy
    dependencies: string[]; // IDs of concepts needed before this one
    status: 'locked' | 'unlocked' | 'in_progress' | 'mastered';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    resources: string[];    // IDs of linked resources (videos, docs)
}

// 3. Project Definition (The "Vehicle" for learning)
export interface Project {
    id: string;
    title: string;          // e.g., "Build a Qubit Simulator"
    goalId: string;         // Links back to the high-level LearningGoal
    description: string;
    status: MilestoneStatus;
    milestones: ProjectMilestone[];
    createdAt: string;
}

export interface ProjectMilestone {
    id: string;
    title: string;          // e.g., "Implement Matrix Multiplication"
    description: string;
    isCompleted: boolean;
    linkedConcepts: string[]; // Concepts applied in this milestone
}

// 4. Daily Execution (The "OS")
export interface DailyTask {
    id: string;
    type: TaskType;
    title: string;
    description: string;
    durationMinutes: number; // Est. time
    isCompleted: boolean;
    contextData?: any;       // Flexible payload for specific task types (e.g., code snippet, quiz ID)
}

export interface LearningSession {
    id: string;
    date: string;
    focus: string;           // "Deep Work: Quantum Gates"
    energyLevel: number;     // 1-10
    tasks: DailyTask[];
    completedTaskIds: string[];
}

// 5. Reflection & Knowledge Storage
export interface Reflection {
    id: string;
    taskId: string;          // Trigger event
    content: string;         // User's thought
    tags: string[];          // Insight tagging
    sentiment: 'frustrated' | 'neutral' | 'eureka';
    createdAt: string;
}

// 6. Output & Validation
export interface OutputProof {
    id: string;
    projectId: string;
    milestoneId: string;
    type: 'code' | 'image' | 'text' | 'link';
    content: string;         // URL or text content
    selfEvaluationScore: number; // 1-10
    aiFeedback?: string;     // Future agent hook
    submittedAt: string;
}

// 7. Spaced Review
export interface ReviewItem {
    id: string;
    conceptId: string;
    question: string;
    answer: string;
    nextReviewDate: string;
    interval: number;        // Spaced repetition interval
    status: ReviewStatus;
}
