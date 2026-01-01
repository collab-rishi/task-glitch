# TaskGlitch - Sales Task Management System

A high-performance React application for sales teams to track, manage, and prioritize tasks based on ROI (Return on Investment). This project has been stabilized and optimized by resolving critical state, logic, and UI bugs.

**🚀 [Live Demo Link](https://task-glitch-ynaa.vercel.app/)**

---

## 🛠️ Bug Fix Report

### 1. Data Layer: Double Fetch Issue
- **Issue:** The API simulation/data retrieval ran twice on initial load.
- **Fix:** Identified a missing cleanup phase and redundant effect triggers in `useTasks.ts`. Corrected the initialization logic to ensure data is fetched exactly once, even in React Strict Mode.

### 2. State Sync: Undo Snackbar Ghosting
- **Issue:** Closing the "Undo" snackbar did not clear the `lastDeleted` state, leading to "phantom" task restorations.
- **Fix:** Created a `clearLastDeleted` function in the `TasksProvider` and wired it to the `onClose` handler in `App.tsx`. This ensures the state is wiped clean once the undo window expires.

### 3. UI Stability: Unstable Sorting
- **Issue:** Tasks with identical ROI and Priority "flickered" or changed positions randomly on re-renders due to a non-deterministic sort.
- **Fix:** Implemented a stable tie-breaker using `localeCompare` on task titles. The sorting is now: `ROI (Desc) > Priority (Desc) > Title (Asc)`.

### 4. Event Logic: Double Dialog Trigger
- **Issue:** Clicking "Edit" or "Delete" in the task table opened the "View Details" dialog simultaneously.
- **Fix:** Applied `e.stopPropagation()` to action button click handlers in `TaskTable.tsx` to prevent event bubbling from the button to the table row.

### 5. Mathematical Edge Cases: ROI Infinity
- **Issue:** Entering `0` for "Time Taken" resulted in an ROI of `Infinity`, breaking dashboard metrics.
- **Fix:** Added defensive guard clauses in `logic.ts` to handle zero or negative inputs, defaulting the ROI to `0` and preventing corrupt analytics.

---

## 🏗️ Technical Improvements

- **TypeScript Hardening:** Resolved type mismatches between the `useTasks` hook and `TasksContext`.
- **Build Optimization:** Fixed `node:path` and `node:url` resolution errors in `vite.config.ts` by configuring `@types/node` and ESM-compatible path resolution.
- **XSS Prevention:** Removed `dangerouslySetInnerHTML` from task notes to prevent potential script injection, replacing it with standard React text rendering.
- **Data Integrity:** Ensured `createdAt` timestamps are preserved during task updates while generated correctly for new entries.

