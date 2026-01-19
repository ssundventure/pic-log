# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds route-level screens like `Home`, `Write`, and `PostDetail`.
- `src/components/` contains reusable UI blocks such as `PhotoCard`, `SideBar`, and `MainHeader`.
- `src/styles/GlobalStyle.ts` defines app-wide styles via `styled-components`.
- `src/types/` keeps shared TypeScript types (`Post`, `OverlayType`).
- `src/constants/` stores layout constants (ex: `SIDEBAR_WIDTH`).
- `public/` is for static assets and CRA HTML scaffolding.

## Build, Test, and Development Commands
- `npm start`: run the CRA dev server with hot reload.
- `npm run build`: generate a production build in `build/`.
- `npm test`: launch React Testing Library in watch mode.
- `npm run eject`: CRA eject (avoid unless you need full config control).

## Coding Style & Naming Conventions
- TypeScript + React; keep components in PascalCase (ex: `PhotoCard.tsx`).
- Use 2-space indentation, double quotes, and semicolons to match existing files.
- Prefer named styled-components and keep styled blocks near usage.
- Constants are typically UPPER_SNAKE_CASE (ex: `SIDEBAR_WIDTH`).
- Keep route components thin; move reusable UI into `src/components/`.

## Testing Guidelines
- Testing stack is CRA + React Testing Library; no tests are present yet.
- New tests should live in `src/**/__tests__/` or `*.test.tsx`.
- Cover UI behavior and storage flows (localforage) when adding tests.

## Commit & Pull Request Guidelines
- Follow the existing commit style: `type(scope): summary` (ex: `feat(write): add overlay selector`).
- Common types seen: `feat`, `style`, `chore`, `docs`.
- PRs should include a short description, linked issues (if any), and screenshots for UI changes.

## Configuration & Data Notes
- Browser data is stored via `localforage` (IndexedDB). Clear site storage to reset posts.
- If you add environment variables, use the CRA `REACT_APP_` prefix and document them here.
