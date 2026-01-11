import type { Meta, StoryObj } from "@storybook/react";
import { LowCognitiveHeader } from "./LowCognitiveHeader";

const meta: Meta<typeof LowCognitiveHeader> = {
  title: "Screens/UiLowCognitive/LowCognitiveHeader",
  component: LowCognitiveHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof LowCognitiveHeader> = {};
