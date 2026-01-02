import { create } from 'zustand';
import { DailyTask } from '@/types/learning';
import { MOCK_DAILY_TASKS } from '@/mock/data';

interface DailyExecutionState {
    queue: DailyTask[];
    activeTaskId: string | null;
    setActiveTask: (id: string) => void;
    completeTask: (id: string) => void;
    addTask: (task: DailyTask) => void;
}

export const useDailyExecutionStore = create<DailyExecutionState>((set) => ({
    queue: MOCK_DAILY_TASKS,
    activeTaskId: null,

    setActiveTask: (id) => set({ activeTaskId: id }),

    completeTask: (id) => set((state) => ({
        queue: state.queue.map(t =>
            t.id === id ? { ...t, isCompleted: true } : t
        ),
        activeTaskId: null // Auto-deselect on complete
    })),

    addTask: (task) => set((state) => ({
        queue: [...state.queue, task]
    })),
}));
