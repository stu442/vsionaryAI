import type { Meta, StoryObj } from "@storybook/react";
import { PromptCard } from "./PromptCard";

const meta: Meta<typeof PromptCard> = {
  title: "Screens/UiLowCognitive/PromptCard",
  component: PromptCard,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    prompt:
      "A serene mountain landscape at golden hour, with snow-capped peaks reflecting warm sunset light.",
  },
};

export default meta;

export const Default: StoryObj<typeof PromptCard> = {};
