import type { Meta, StoryObj } from "@storybook/react";
import { Desktop } from "./Desktop";

const meta: Meta<typeof Desktop> = {
  title: "Screens/Desktop",
  component: Desktop,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof Desktop> = {};
