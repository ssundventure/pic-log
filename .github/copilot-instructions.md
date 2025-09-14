# Copilot Instructions for PicLog

## Project Overview
- **PicLog** is a React (TypeScript) web app for journaling with photos and text.
- Users can upload photos, write diary entries, and view them in a list.
- The app structure is modular, with clear separation between UI components, pages, hooks, and utility logic.

## Key Architecture & Patterns
- **Component Structure:**
  - `src/components/` contains reusable UI components (e.g., `PhotoCard`, `PhotoList`, `Header`).
  - `src/pages/` contains page-level components (`Home.tsx`, `Write.tsx`).
  - `src/assets/` for static assets (images, etc.).
  - `src/constants/` for layout and other shared constants.
  - `src/types/` for TypeScript type definitions (e.g., `diary.ts`).
  - `src/utils/` for utility functions.
- **Styling:**
  - Uses styled-components or similar CSS-in-JS, with global styles in `src/styles/GlobalStyle.ts`.
- **Data Flow:**
  - Diary entries are likely managed in React state (local or via context/hooks).
  - No backend integration is present by default; data persistence may be local (e.g., localStorage) unless otherwise specified.

## Developer Workflows
- **Start Dev Server:**
  - `npm start` or `yarn start` (runs the React app locally).
- **Build for Production:**
  - `npm run build` or `yarn build` (outputs to `build/`).
- **Type Checking:**
  - `tsc --noEmit` or `npm run type-check` if defined.
- **Linting:**
  - If ESLint is configured, use `npm run lint`.
- **Testing:**
  - No test files detected; add tests in `src/__tests__/` if needed.

## Project-Specific Conventions
- **TypeScript:**
  - All source files use `.tsx`/`.ts` extensions.
  - Types are defined in `src/types/` and imported where needed.
- **Component Props:**
  - Props interfaces are defined per component, often at the top of the file.
- **File Naming:**
  - Components and pages use PascalCase (e.g., `PhotoCard.tsx`).
  - Utility and type files use camelCase or kebab-case.
- **No Redux/MobX:**
  - State management is local or via React context/hooks.

## Integration Points
- **External Libraries:**
  - React, TypeScript, styled-components (or similar), and standard React tooling.
- **Assets:**
  - Place images and static files in `public/` or `src/assets/`.

## Examples
- To add a new diary entry type, update `src/types/diary.ts` and relevant components in `src/components/` and `src/pages/`.
- To add a new page, create a file in `src/pages/` and update routing in `src/App.tsx`.

---

For questions about project structure or conventions, see this file and `README.md`.
