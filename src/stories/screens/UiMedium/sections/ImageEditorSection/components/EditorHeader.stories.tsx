import type { Meta, StoryObj } from "@storybook/react";
import { EditorHeader } from "./EditorHeader";

const meta: Meta<typeof EditorHeader> = {
  title: "Screens/UiMedium/ImageEditorSection/EditorHeader",
  component: EditorHeader,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Cyberpunk cityscape refinement",
  },
};

export default meta;

export const Default: StoryObj<typeof EditorHeader> = {};
