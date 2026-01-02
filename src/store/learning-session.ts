import { create } from 'zustand';
import { LearningSession } from '@/types/learning';

interface LearningSessionState {
    currentSession: LearningSession | null;
    isLoading: boolean;
    startSession: (focus: string) => void;
    endSession: () => void;
    setEnergyLevel: (level: number) => void;
}

export const useLearningSessionStore = create<LearningSessionState>((set) => ({
    currentSession: null,
    isLoading: false,

    startSession: (focus) => {
        set({ isLoading: true });
        // Simulate API call
        setTimeout(() => {
            const newSession: LearningSession = {
                id: crypto.randomUUID(),
                date: new Date().toISOString(),
                focus,
                energyLevel: 5, // Default
                tasks: [], // Would populate from DailyStore
                completedTaskIds: [],
            };
            set({ currentSession: newSession, isLoading: false });
        }, 800);
    },

    endSession: () => {
        set({ currentSession: null });
    },

    setEnergyLevel: (level) => {
        set((state) => ({
            currentSession: state.currentSession
                ? { ...state.currentSession, energyLevel: level }
                : null
        }));
    },
}));
