import type { Meta, StoryObj } from "@storybook/react";
import { SessionItem } from "./SessionItem";

const meta: Meta<typeof SessionItem> = {
  title: "Screens/UiHighCognitive/SessionListSection/SessionItem",
  component: SessionItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Cyberpunk cityscape",
    iterations: 6,
    time: "2m ago",
    thumbnail:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-cyberpunk-cityscape-at-night-with-neon-lights.png",
    isActive: true,
  },
};

export default meta;

export const Default: StoryObj<typeof SessionItem> = {};
