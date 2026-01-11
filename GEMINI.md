# Visionary Project Context (`GEMINI.md`)

## 1. Project Overview
**Visionary** is a React-based web application designed for AI image generation, featuring multiple user interface modes tailored to different cognitive load preferences (Low, Medium, High). The project is scaffolded with Vite and utilizes modern frontend tooling.

### Key Features
- **Adaptive UI**: Three distinct interface levels:
  - **UiLowCognitive**: Simplified interface for ease of use.
  - **UiMedium**: Balanced interface with moderate controls.
  - **UiHighCognitive**: Advanced interface with detailed image editing and refinement tools.
- **AI Image Generation**: Integrated with OpenAI's API for generating and refining images based on text prompts.
- **Component-Based Architecture**: Built using a modular component structure with shared UI primitives.

## 2. Tech Stack
- **Framework/Runtime**: [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) (Shadcn-style components)
- **API Integration**: OpenAI (Image Generation)
- **State Management**: React Hooks (Context/Local State)

## 3. Project Structure
```
/
├── public/              # Static assets
├── src/
│   ├── api/             # API client modules (e.g., image.ts)
│   ├── components/      # Shared components
│   │   └── ui/          # Low-level UI primitives (buttons, inputs, etc.)
│   ├── hooks/           # Custom React hooks (e.g., useImageGeneration.ts)
│   ├── lib/             # Utility functions (utils.ts)
│   ├── screens/         # Page-level components (The core views)
│   │   ├── Desktop/
│   │   ├── UiLowCognitive/
│   │   ├── UiMedium/
│   │   └── UiHighCognitive/
│   ├── App.tsx          # Main application component / Router setup
│   └── main.tsx         # Entry point
├── docs/                # Documentation
│   └── CHANGELOG.md     # Project history (Korean)
├── AGENTS.md            # Guidelines for AI agents
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 4. Key Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the development server at `http://localhost:5173/`. |
| `npm run build` | Build the project for production. |

## 5. Configuration & Environment
- **Environment Variables**: Managed via `.env` (not committed). See `.env.example` for reference.
  - `VITE_OPENAI_API_KEY`: Required for image generation features.
  - `VITE_IMAGE_API_ENABLED`: Toggle (`true`/`false`) to enable/disable API calls.

## 6. Development Guidelines (from `AGENTS.md`)
- **Language**: All responses and documentation (including CHANGELOG) must be in **Korean**.
- **Changelog**: Maintain `docs/CHANGELOG.md` with detailed daily entries.
- **Code Style**:
  - Functional Components with TypeScript.
  - PascalCase for components, `use` prefix for hooks.
  - Tailwind utilities over inline styles.
- **Commit Messages**: Use prefixes like `feat:`, `fix:`, `docs:`.

## 7. Recent Development Highlights (Jan 2026)
- **UiHighCognitive Implementation**:
  - Integrated `ImageEditorSection` with real API data.
  - Implemented `QuickRefinements` with prompt appending logic.
  - Connected `ImagePreviewArea` regenerate functionality.
  - Added "Draft" and "Version" UI badges.
- **UI/UX Improvements**:
  - Fixed layout issues with long prompts using `truncate` and `whitespace-normal`.
  - Improved button visibility on hover (text color fixes).
  - Added loading states (spinners) to refinement and generation actions.

## 8. Usage Tips for Agents
- **Context Awareness**: Always check `src/screens` to identify which UI mode the user is referring to.
- **Safety**: Do not commit `.env` files. Update `.env.example` if new keys are added.
- **File modification**: When modifying UI components, check for `className` conflicts and ensure responsive design (Tailwind) is preserved.
