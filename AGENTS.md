# Repository Guidelines

## Response & Core Rules
- Responses in this repository should be written in Korean.
- Whenever environment variables change or are added, update `.env.example`.
- Create and maintain `docs/CHANGELOG.md` in Korean, with detailed entries by date.

## Project Structure & Module Organization
- `src/` holds application code.
- `src/screens/` is page/experience-level UI (e.g., Desktop, UiLowCognitive).
- `src/components/` houses shared components; `src/components/ui/` is shadcn-style primitives.
- `src/hooks/` contains reusable hooks (e.g., `useImageGeneration`).
- `src/api/` contains API client logic (e.g., `image.ts`).
- Styling uses Tailwind (`tailwind.css`, `tailwind.config.js`).

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the dev server at `http://localhost:5173/`.
- `npm run build` creates a production build.
- No test scripts are configured yet (add to `package.json` when introduced).

## Coding Style & Naming Conventions
- TypeScript + React functional components.
- Use 2-space indentation and keep existing formatting consistent.
- Components use PascalCase (e.g., `ImageGenerationHeroSection`).
- Hooks use the `use` prefix (e.g., `useImageGeneration`).
- Prefer Tailwind utilities; avoid inline styles when possible.

## Testing Guidelines
- No test framework yet. If added, document scripts and structure.
- Co-locate tests near source (e.g., `src/screens/.../__tests__`).

## Commit & Pull Request Guidelines
- Commits use prefixes like `feat:` and `fix:` with short summaries (Korean ok).
- PRs should include a summary, UI screenshots/GIFs, and env var changes.

## Security & Configuration Tips
- Keep real keys in `.env` and do not commit them.
- `VITE_OPENAI_API_KEY` is required for image generation.
- `VITE_IMAGE_API_ENABLED` toggles API calls on/off.
