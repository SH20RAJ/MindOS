# The School System

## The Why
Schools currently operate on a "Teach and Test" model. This ignores the biological reality of the *Forgetting Curve* (Ebbinghaus). Students forget 80% of what they learn within 24 hours unless reinforced.

**MindOS School is a "Retention Management System".** We provide teachers with the tools to visualize and reverse cognitive decay.

## The How
### Architecture
The School System is built on a separate context from the personal dashboard (`/school` vs `/mindcloud`).

*   **Server Components:** The shell (`layout.tsx`, `dashboard/page.tsx`) provides high-performance rendering of the "State".
*   **Client Islands:** Components like `RetentionHeatmap` and `ActivityFeed` handle the specialized visualization and animation.

### Key Components
1.  **Retention Heatmap:** A grid of `Topics x Students`. Color indicates the strength of the memory trace.
    *   *Green:* Strong Recall (Recently reviewed/tested).
    *   *Red:* Critical Decay (Needs immediate review).
2.  **Cognitive Push:** Teachers can "Push" flashcards to student queues, "installing" the review session.

## The When
*   **Trigger:** A teacher logs in daily to check the "Critical Alerts".
*   **Action:** If they see red on the Heatmap, they assign a specific review task.
*   **Result:** The graph turns green, indicating renewed retention strength.

## Implementation Details
*   **Path:** `src/app/school`
*   **Tech:** Next.js App Router (Server Components), Framer Motion (Client-side visualization).
