import type { Meta, StoryObj } from "@storybook/react";
import { ActionButtons } from "./ActionButtons";

const meta: Meta<typeof ActionButtons> = {
  title: "Screens/UiLowCognitive/ActionButtons",
  component: ActionButtons,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof ActionButtons> = {};
