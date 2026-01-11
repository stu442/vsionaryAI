import type { Meta, StoryObj } from "@storybook/react";
import { EditorActions } from "./EditorActions";

const meta: Meta<typeof EditorActions> = {
  title: "Screens/UiMedium/ImageEditorSection/EditorActions",
  component: EditorActions,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    prompt: "Futuristic cityscape with dramatic sky",
    onRegenerate: () => {},
    onVariations: () => {},
    onSavePrompt: () => {},
  },
};

export default meta;

export const Default: StoryObj<typeof EditorActions> = {};
