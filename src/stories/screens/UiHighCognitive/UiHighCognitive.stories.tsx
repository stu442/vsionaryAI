import type { Meta, StoryObj } from "@storybook/react";
import { UiHighCognitive } from "./UiHighCognitive";

const meta: Meta<typeof UiHighCognitive> = {
  title: "Screens/UiHighCognitive",
  component: UiHighCognitive,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof UiHighCognitive> = {};
