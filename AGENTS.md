# Core Engineering Principles

All agents must follow these principles.

### SOLID
- **SRP**: One responsibility per module
- **OCP**: Extend without modifying existing code
- **LSP**: Subtypes must be safely substitutable
- **ISP**: No unused interface dependencies
- **DIP**: Depend on abstractions, not implementations

### KISS
- Prefer the simplest working solution
- Avoid unnecessary abstractions and premature optimization
- Readability over cleverness

### DRY
- Do not duplicate logic or domain knowledge
- Extract shared logic when duplication adds maintenance cost

# Repository Guidelines

## Response & Core Rules

### Language Policy
- All agent responses MUST be written in Korean.
- English may be used only for code, identifiers, or documentation content when explicitly requested.

### Changelog Rules
- All meaningful changes MUST be recorded in `docs/CHANGELOG.md` under [Unreleased] or the current date.
- Each entry MUST include an author tag (e.g. @username).
- Create and maintain `docs/CHANGELOG.md` in Korean, with detailed entries by date.

### Response Change Summary
- When providing an answer that includes code or file changes, agents MUST include a brief summary of:
  - Modified files
  - What was changed in each file

### General Rules
- Whenever environment variables change or are added, update `.env.example`.

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
