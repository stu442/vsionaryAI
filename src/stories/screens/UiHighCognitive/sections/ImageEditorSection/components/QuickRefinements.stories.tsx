import type { Meta, StoryObj } from "@storybook/react";
import { QuickRefinements } from "./QuickRefinements";

const meta: Meta<typeof QuickRefinements> = {
  title: "Screens/UiHighCognitive/ImageEditorSection/QuickRefinements",
  component: QuickRefinements,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    selectedRefinements: [
      "cinematic lighting, dramatic shadows, volumetric lighting, golden hour, studio quality",
    ],
  },
};

export default meta;

export const Default: StoryObj<typeof QuickRefinements> = {};
