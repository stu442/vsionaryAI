import type { Meta, StoryObj } from "@storybook/react";
import { QuickRefinements, quickRefinementsData } from "./QuickRefinements";

const meta: Meta<typeof QuickRefinements> = {
  title: "Screens/UiMedium/ImageEditorSection/QuickRefinements",
  component: QuickRefinements,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    selectedRefinements: [quickRefinementsData[0].value],
  },
};

export default meta;

export const Default: StoryObj<typeof QuickRefinements> = {};
