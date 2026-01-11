import type { Meta, StoryObj } from "@storybook/react";
import { ImageEditorSection } from "./ImageEditorSection";

const meta: Meta<typeof ImageEditorSection> = {
  title: "Screens/UiMedium/ImageEditorSection",
  component: ImageEditorSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof ImageEditorSection> = {};
