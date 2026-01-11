import type { Meta, StoryObj } from "@storybook/react";
import { GenerationDetails } from "./GenerationDetails";

const meta: Meta<typeof GenerationDetails> = {
  title: "Screens/UiMedium/ImageEditorSection/GenerationDetails",
  component: GenerationDetails,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof GenerationDetails> = {};
