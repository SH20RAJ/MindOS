import { create } from 'zustand';
import { Project, ProjectMilestone } from '@/types/learning';
import { MOCK_PROJECTS } from '@/mock/data';

interface ProjectState {
    projects: Project[];
    activeProjectId: string | null;
    setActiveProject: (id: string) => void;
    completeMilestone: (projectId: string, milestoneId: string) => void;
    addProject: (project: Project) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
    projects: MOCK_PROJECTS,
    activeProjectId: null,

    setActiveProject: (id) => set({ activeProjectId: id }),

    completeMilestone: (projectId, milestoneId) => set((state) => ({
        projects: state.projects.map(p =>
            p.id === projectId
                ? {
                    ...p,
                    milestones: p.milestones.map(m =>
                        m.id === milestoneId ? { ...m, isCompleted: true } : m
                    )
                }
                : p
        )
    })),

    addProject: (project) => set((state) => ({
        projects: [...state.projects, project]
    })),
}));
