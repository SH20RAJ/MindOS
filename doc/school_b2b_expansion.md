# MindOS School: B2B Expansion Plan

## Executive Summary
Transform `MindOS School` from a standalone teacher tool into a multi-tenant B2B platform ("The Operating System for Education"). Schools can sign up, create their own "Digital Digital Gardens" (Courses), and manage student retention.

## Core Value Proposition
**For Schools:** "Stop the leaks in your curriculum." A platform that proves learning retention, not just test completion.
**For Students:** "Your school work becomes your permanent brain." Coursework isn't discarded; it integrates into their personal MindOS Knowledge Graph.

## 1. Architecture: Multi-Tenancy

### URL Structure
- **Marketing/Signup:** `/school` (The pitch page)
- **School Portal:** `/school/[school_slug]/dashboard` (Admin/Teacher view)
- **Student Portal:** `/school/student` (Unified view of all enrolled courses form all schools)

### Role-Based Access Control (RBAC)
We need to introduce a `Role` context.
- **School Admin:** Manage subscription, add teachers.
- **Teacher:** Create courses, "push" assignments, view retention heatmaps.
- **Student:** Connects their personal MindOS account to the School. *Crucial: Students own their data.*

## 2. Data Model Extensions
We need to extend `types/learning.ts` (or create `types/school.ts`).

### New Entities
- **Organization (School)**: `id, name, slug, branding, subscriptionTier`
- **Course**: `id, schoolId, title, syllabus (Graph Nodes)`
- **Cohort (Class)**: `id, courseId, teacherId, studentIds[]`
- **Enrollment**: `id, studentId, cohortId, progress, retentionScore`

## 3. Feature Breakdown

### A. The "Launchpad" (B2B Selling Page)
**Path:** `src/app/school/page.tsx` (Replace/Refactor)
A sales landing page targeting Deans/Principals.
- **Hero:** "The First Learning OS for Schools."
- **Feature:** "Visual Retention Tracking."
- **CTA:** "Launch Your School Node."

### B. The Course Builder (Teacher)
**Path:** `src/app/school/[slug]/builder`
A tool to map a curriculum to MindOS Nodes.
- Instead of uploading PDFs, teachers build a "Knowledge Graph" of the syllabus.
- "Week 1: Photosynthesis" -> Creates a locked Node in every student's MindOS.

### C. The Student Experience
**Path:** `src/app/school/student/dashboard`
Students see a separated view of their "Assigned" learning.
- **Assignments:** "Complete 'Mitochondria' Node by Friday."
- **Integration:** When they verify knowledge, it lights up in their *School* graph AND their *Personal* MindOS graph.

### D. The Command Center (Existing)
**Path:** `src/app/school/[slug]/dashboard` (Refactor existing dashboard)
The existing retention heatmap becomes the daily driver for teachers to monitor their specific cohorts.

## 4. Implementation Steps

### Phase 1: The Pitch (Immediate)
- Build the B2B Landing Page at `/school/start`.
- Create a "Request Access" form for schools.

### Phase 2: The Foundation
- Define `types/school.ts`.
- Create mock data for multiple schools (e.g., "Quantum University", "Design Academy").

### Phase 3: The Dashboard Refactor
- Move current `/school/dashboard` to `/school/[schoolId]/dashboard`.
- Add "Course Selector" to the dashboard.

### Phase 4: The Student Integration
- Create the "Enrollment" flow (Student enters code -> Gets graph nodes added).

## Integration with MindOS Core
The killer feature: **Cross-Polination.**
If a student learns "Linear Algebra" in their "University" context, that node is unlocked in their "Personal" context too. MindOS becomes the unified record of their intellect.
