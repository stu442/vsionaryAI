import type { Meta, StoryObj } from "@storybook/react";
import { EditorTip } from "./EditorTip";

const meta: Meta<typeof EditorTip> = {
  title: "Screens/UiMedium/ImageEditorSection/EditorTip",
  component: EditorTip,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof EditorTip> = {};
