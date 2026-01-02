import { create } from 'zustand';
import { ReviewItem } from '@/types/learning';
import { MOCK_REVIEWS } from '@/mock/data';

interface ReviewState {
    queue: ReviewItem[];
    submitReview: (id: string, correct: boolean) => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
    queue: MOCK_REVIEWS,

    submitReview: (id, correct) => set((state) => ({
        queue: state.queue.map(item => {
            if (item.id !== id) return item;

            // Basic Spaced Repetition Logic (Mock)
            const newInterval = correct ? item.interval * 2 : 1;
            const nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + newInterval);

            return {
                ...item,
                interval: newInterval,
                nextReviewDate: nextDate.toISOString(),
                status: correct ? 'mastered' : 'learning'
            };
        })
    })),
}));
